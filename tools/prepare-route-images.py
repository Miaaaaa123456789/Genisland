import argparse
from pathlib import Path
from PIL import Image

parser = argparse.ArgumentParser(description='Convert supplied concept PNGs into web-ready route images.')
parser.add_argument('source', type=Path, help='Directory containing the original PNG files')
source = parser.parse_args().source
target = Path(__file__).resolve().parents[1] / 'assets' / 'route'
target.mkdir(parents=True, exist_ok=True)

images = {
    '01-avatar': '迎宾廊中的头像采集-1.png',
    '02-emotion': '举手触碰情绪光雾-2.png',
    '03-growth': '记忆长廊中的时间碎片-3.png',
    '04-roundtable': '青少年圆桌倾听空间-4.png',
    '05-fork': 'AI疗愈中心双路径交汇-6.png',
    '07-cocreation': '未来医疗共创大厅-8.png',
    '08-mirror': '镜室中的双重姿态-5.png',
    '09-cafe': '镜室后的温木咖啡角-9.png',
    '10-report-wall': '沉浸式数字报告长廊(1).png',
    '10-report-review': '未来医疗报告展廊-7.png',
}

for name, filename in images.items():
    with Image.open(source / filename) as image:
        image.convert('RGB').save(target / f'{name}.webp', 'WEBP', quality=86, method=6)
    print(f'{name}.webp')
