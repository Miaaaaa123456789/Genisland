#!/usr/bin/env python3
"""Generate web film copies matching the first film, without re-encoding video."""
import concurrent.futures
import hashlib
import json
from pathlib import Path
import shutil
import subprocess

ROOT = Path(__file__).resolve().parents[1]
FILMS = ROOT / 'public/assets/films'
REFERENCE = '01-campus-with-audio'
NAMES = ['02-avatar', '03-emotion', '04-growth-corridor-4066', '05-roundtable',
         '06-branch-with-audio', '07-mirror', '08-report']
VERSION = 'balanced-v1'


def run(args):
    return subprocess.run(['ffmpeg', '-hide_banner', '-nostats', '-y', *args],
                          check=True, capture_output=True, text=True)


def measure(path):
    result = run(['-i', str(path), '-vn', '-af',
                  'loudnorm=I=-18:TP=-1.5:LRA=50:print_format=json', '-f', 'null', '-'])
    start = result.stderr.rfind('{')
    if start < 0:
        raise RuntimeError(f'{path.name}: missing audio')
    data = json.JSONDecoder().raw_decode(result.stderr[start:])[0]
    return {key: float(data[key]) for key in ['input_i', 'input_tp', 'input_lra']}


def video_hash(path):
    return run(['-i', str(path), '-map', '0:v:0', '-c', 'copy', '-f', 'hash', '-']).stdout.strip()


def balance(name, target):
    source = FILMS / f'{name}.mp4'
    output = FILMS / f'{name}-{VERSION}.mp4'
    before = measure(source)
    gain = target - before['input_i']
    # A fixed gain preserves the original dynamics and silence. Measure the AAC
    # output itself, since gating and encoder peaks may differ from the source.
    for attempt in range(5):
        run(['-i', str(source), '-map', '0:v:0', '-map', '0:a:0', '-c:v', 'copy',
             '-af', f'volume={gain:.4f}dB', '-c:a', 'aac', '-b:a', '192k',
             '-movflags', '+faststart', str(output)])
        after = measure(output)
        error = target - after['input_i']
        if abs(error) <= 0.15 and after['input_tp'] <= -1.0:
            break
        if after['input_tp'] > -1.0:
            raise RuntimeError(f'{name}: gain would exceed safe true peak: {after}')
        gain += error
    else:
        raise RuntimeError(f'{name}: failed to match reference loudness: {after}')
    assert video_hash(source) == video_hash(output), f'{name}: video stream changed'
    shutil.copyfile(FILMS / f'{name}.webp', FILMS / f'{name}-{VERSION}.webp')
    return {'film': name, 'source_sha256': hashlib.sha256(source.read_bytes()).hexdigest(),
            'gain_db': round(gain, 4), 'before': before, 'after': after,
            'video_stream_unchanged': True}


def main():
    if not shutil.which('ffmpeg'):
        raise SystemExit('ffmpeg is required to prepare balanced film audio. Install FFmpeg, then retry.')
    reference = measure(FILMS / f'{REFERENCE}.mp4')
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        results = list(pool.map(lambda name: balance(name, reference['input_i']), NAMES))
    report = {'reference': REFERENCE, 'reference_measurement': reference,
              'target_lufs': reference['input_i'], 'films': results}
    (FILMS / 'audio-balance-report.json').write_text(json.dumps(report, indent=2) + '\n')
    print(json.dumps(report, indent=2))


if __name__ == '__main__':
    main()
