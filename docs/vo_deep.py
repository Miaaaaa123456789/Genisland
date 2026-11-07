#!/usr/bin/env python3
"""低沉舒缓的女声管线（v2）

目标：在 macOS 系统中文语音里挑出最接近「低沉舒缓女声」的一条，
再通过后处理把它推得更暖、更近、更松弛。

选声依据（实测 F0 / 语调）：
  Tingting        F0≈201 Hz  咬字清晰但明亮偏尖
  Flo / Sandy     F0≈190-206 Hz  同上
  Shelley         F0≈150 Hz  略低但仍偏亮
  Grandma         F0≈114 Hz  最低沉，且是真实连续语音（非 novelty 单音）
  Reed / Eddy     F0≈105-112 Hz  与 Grandma 相近，音高轨迹更平

因此以 Grandma 为主声源，混少量 Tingting 提供咬字清晰度，再做后处理。

后处理链：
  1) 降调 0.90×（F0 再降约 1.5 个半音 → 更低沉）
  2) 轻度共振峰补偿：把 300-3000Hz 略微抬起，避免过暗发闷
  3) 高频柔化（低通 4200Hz）+ 低频清理（高通 85Hz）
  4) 轻微慢速包络，让语速更舒缓
  5) 三档极短早期反射（9/17/28ms），营造贴耳空间感
  6) 温和软饱和 + 峰值归一

只依赖标准库 wave/array，不依赖 numpy/scipy/ffmpeg。
"""
import array
import math
import os
import subprocess
import sys
import wave

VOICE_LOW = 'Grandma (中文（中国大陆）)'
VOICE_CLEAR = 'Tingting'
PITCH_RATIO = 0.88          # <1 → 变慢且变低
MIX_CLEAR = 0.14            # 混入清晰女声的比例，兼顾咬字


def read_wav(path):
    with wave.open(path, 'rb') as w:
        nch = w.getnchannels()
        sw = w.getsampwidth()
        sr = w.getframerate()
        frames = w.readframes(w.getnframes())
    if sw != 2:
        raise SystemExit(f'only 16-bit PCM supported, got {sw * 8}-bit')
    data = array.array('h')
    data.frombytes(frames)
    if nch == 2:
        data = array.array('h', [data[i] for i in range(0, len(data), 2)])
    return data, sr


def write_wav(path, samples, sr):
    with wave.open(path, 'wb') as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(sr)
        out = array.array('h', samples)
        if sys.byteorder == 'big':
            out.byteswap()
        w.writeframes(out.tobytes())


def resample_ratio(samples, sr, ratio):
    """ratio<1 → 变慢且变低（同时改变时长与音高）。"""
    n_out = int(len(samples) * ratio)
    out = array.array('h', [0]) * n_out
    for i in range(n_out):
        src = i / ratio
        i0 = int(src)
        if i0 >= len(samples) - 1:
            out[i] = samples[-1]
            continue
        frac = src - i0
        out[i] = int(samples[i0] * (1 - frac) + samples[i0 + 1] * frac)
    return out


def one_pole_lowpass(samples, sr, cutoff):
    a = math.exp(-2 * math.pi * cutoff / sr)
    y = 0.0
    out = array.array('h', [0]) * len(samples)
    for i, x in enumerate(samples):
        y = (1 - a) * x + a * y
        out[i] = int(max(-32768, min(32767, y)))
    return out


def one_pole_highpass(samples, sr, cutoff):
    a = math.exp(-2 * math.pi * cutoff / sr)
    y = 0.0
    prev_x = 0.0
    out = array.array('h', [0]) * len(samples)
    for i, x in enumerate(samples):
        y = a * (y + x - prev_x)
        prev_x = x
        out[i] = int(max(-32768, min(32767, y)))
    return out


def band_boost(samples, sr, lo, hi, gain_db):
    """带通提升：先高通再低通，中间频段抬起来，避免声音过暗。"""
    hi_passed = one_pole_highpass(samples, sr, lo)
    band = one_pole_lowpass(hi_passed, sr, hi)
    g = 10 ** (gain_db / 20)
    mixed = array.array('h', [0]) * len(samples)
    for i in range(len(samples)):
        v = samples[i] * (1 - 0.35) + band[i] * 0.35 * g
        mixed[i] = int(max(-32768, min(32767, v)))
    return mixed


def apply_gain_db(samples, db):
    g = 10 ** (db / 20)
    return array.array('h', [int(max(-32768, min(32767, x * g))) for x in samples])


def soft_clip(samples, drive=1.0):
    out = array.array('h', [0]) * len(samples)
    for i, x in enumerate(samples):
        v = x * drive
        v = v / (1 + abs(v) / 32768 * 0.26)
        out[i] = int(max(-32768, min(32767, v)))
    return out


def early_reflections(samples, sr, taps):
    """极短早期反射：贴耳空间感，去掉播报腔。"""
    out = array.array('h', samples)
    for delay_ms, gain in taps:
        d = int(sr * delay_ms / 1000)
        if d <= 0 or d >= len(out):
            continue
        g = gain * 0.30
        for i in range(d, len(out)):
            out[i] = int(max(-32768, min(32767, out[i] + out[i - d] * g)))
    return out


def normalize(samples, target_peak=30000):
    peak = max((abs(x) for x in samples), default=1)
    if peak < 1:
        return samples
    g = target_peak / peak
    return array.array('h', [int(max(-32768, min(32767, x * g))) for x in samples])


def mix(a, b, ratio):
    """把 b 按 ratio 混入 a（长度已对齐）。"""
    n = min(len(a), len(b))
    out = array.array('h', [0]) * n
    for i in range(n):
        v = a[i] * (1 - ratio) + b[i] * ratio
        out[i] = int(max(-32768, min(32767, v)))
    return out


def synth_voice(text, rate=158, workdir='/tmp'):
    """生成两路声源并混合：低沉主声 + 少量清晰女声。"""
    aiff_low = os.path.join(workdir, '_vo_low.aiff')
    wav_low = os.path.join(workdir, '_vo_low.wav')
    aiff_clear = os.path.join(workdir, '_vo_clear.aiff')
    wav_clear = os.path.join(workdir, '_vo_clear.wav')

    subprocess.run(['say', '-v', VOICE_LOW, '-r', str(rate), '-o', aiff_low, text],
                   capture_output=True, timeout=300, check=True)
    subprocess.run(['afconvert', '-f', 'WAVE', '-d', 'LEI16@44100', '-c', '1',
                    aiff_low, wav_low], capture_output=True, timeout=180, check=True)

    if MIX_CLEAR > 0:
        subprocess.run(['say', '-v', VOICE_CLEAR, '-r', str(rate), '-o', aiff_clear, text],
                       capture_output=True, timeout=300, check=True)
        subprocess.run(['afconvert', '-f', 'WAVE', '-d', 'LEI16@44100', '-c', '1',
                        aiff_clear, wav_clear], capture_output=True, timeout=180, check=True)

    low, sr = read_wav(wav_low)
    if MIX_CLEAR > 0:
        clear, _ = read_wav(wav_clear)
        n = min(len(low), len(clear))
        low = low[:n]
        clear = clear[:n]
        low = mix(low, clear, MIX_CLEAR)

    for p in (aiff_low, wav_low, aiff_clear, wav_clear):
        if os.path.exists(p):
            os.remove(p)
    return low, sr


def process_samples(samples, sr, pitch_ratio=PITCH_RATIO):
    # 1) 降调变慢
    samples = resample_ratio(samples, sr, pitch_ratio)
    # 2) 塑形：低频清理 + 高频柔化 + 中频轻微抬升
    samples = one_pole_highpass(samples, sr, 85)
    samples = band_boost(samples, sr, 340, 3200, 4.5)
    samples = one_pole_lowpass(samples, sr, 7200)
    samples = apply_gain_db(samples, -0.6)
    # 3) 极短早期反射：贴耳空间感
    samples = early_reflections(samples, sr, [(9, 0.55), (17, 0.36), (28, 0.22)])
    # 4) 温和饱和 + 归一
    samples = soft_clip(samples, 1.05)
    samples = normalize(samples, 29500)
    return samples


def synthesize(text, dst, rate=158, pitch_ratio=PITCH_RATIO):
    raw, sr = synth_voice(text, rate)
    out = process_samples(raw, sr, pitch_ratio)
    write_wav(dst, out, sr)
    return len(out) / sr


if __name__ == '__main__':
    src, dst = sys.argv[1], sys.argv[2]
    ratio = float(sys.argv[3]) if len(sys.argv) > 3 else PITCH_RATIO
    d = synthesize(src, dst, pitch_ratio=ratio)
    print(f'{os.path.basename(dst)}  {d:.2f}s  pitch={ratio}')
