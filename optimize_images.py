from pathlib import Path
from PIL import Image, ImageFile
import os

ImageFile.LOAD_TRUNCATED_IMAGES = True
root = Path(r'C:/Users/cahyadi/Documents/SCT-brochure/SCT-brochure')
paths = sorted([p for p in root.rglob('*') if p.suffix.lower() in {'.png','.jpg','.jpeg'}], key=lambda p: p.stat().st_size, reverse=True)
print('Found', len(paths), 'image files')
count = 0
for p in paths[:30]:
    size_before = p.stat().st_size
    try:
        with Image.open(p) as im:
            fmt = im.format
            if fmt == 'JPEG':
                im.save(p, format='JPEG', optimize=True, quality=85)
            elif fmt == 'PNG':
                if im.mode in ('RGBA', 'LA'):
                    im.save(p, format='PNG', optimize=True, compress_level=9)
                else:
                    im = im.convert('P', palette=Image.ADAPTIVE)
                    im.save(p, format='PNG', optimize=True, compress_level=9)
            else:
                continue
    except Exception as e:
        print('ERROR', p, e)
        continue
    size_after = p.stat().st_size
    diff = size_before - size_after
    print(f"{p.relative_to(root)}: {size_before/1024:.1f}KB -> {size_after/1024:.1f}KB (saved {diff/1024:.1f}KB)")
    count += 1
print('Optimized', count, 'images')
