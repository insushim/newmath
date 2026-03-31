import sharp from 'sharp';
import { readFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const svgPath = join(root, 'public/icons/icon.svg');
const outDir = join(root, 'public/icons');
const svg = readFileSync(svgPath);

const sizes = [16, 32, 48, 72, 96, 128, 144, 152, 180, 192, 384, 512];

mkdirSync(outDir, { recursive: true });

for (const size of sizes) {
  await sharp(svg).resize(size, size).png().toFile(join(outDir, `icon-${size}.png`));
  console.log(`Generated icon-${size}.png`);
}

// Apple touch icon
await sharp(svg).resize(180, 180).png().toFile(join(outDir, 'apple-touch-icon.png'));
console.log('Generated apple-touch-icon.png');

// Favicon sizes bundled as individual PNGs (Next.js uses favicon.ico from app dir)
await sharp(svg).resize(32, 32).png().toFile(join(root, 'src/app/icon.png'));
console.log('Generated src/app/icon.png');

// OG image (1200x630) with purple background
const ogWidth = 1200;
const ogHeight = 630;
const iconSize = 200;
const iconBuf = await sharp(svg).resize(iconSize, iconSize).png().toBuffer();

const ogSvg = `<svg width="${ogWidth}" height="${ogHeight}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6C5CE7"/>
      <stop offset="100%" style="stop-color:#a29bfe"/>
    </linearGradient>
  </defs>
  <rect width="${ogWidth}" height="${ogHeight}" fill="url(#bg)"/>
  <text x="${ogWidth/2}" y="280" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="80" font-weight="bold" fill="white">매쓰버스</text>
  <text x="${ogWidth/2}" y="360" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="32" fill="white" opacity="0.8">MathVerse - 적응형 초등 수학 학습</text>
  <text x="${ogWidth/2}" y="440" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="24" fill="white" opacity="0.6">모든 아이의 수학 우주를 열어주는 학습 플랫폼</text>
  <text x="${ogWidth/2}" y="540" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="120">🧮</text>
</svg>`;

await sharp(Buffer.from(ogSvg)).resize(ogWidth, ogHeight).png().toFile(join(root, 'public/og-image.png'));
console.log('Generated og-image.png');

console.log('All icons generated!');
