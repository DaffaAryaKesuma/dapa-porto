const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const loaderDir = path.join(__dirname, '../public/images/loader');
const files = ['heart.jpg', 'piston.jpg', 'star.jpg', 'smiley.jpg'];

async function processImages() {
  for (const file of files) {
    const inputPath = path.join(loaderDir, file);
    const outputPath = path.join(loaderDir, file.replace('.jpg', '.png'));

    if (!fs.existsSync(inputPath)) {
      console.log(`File not found: ${inputPath}`);
      continue;
    }

    const { data, info } = await sharp(inputPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { width, height, channels } = info;
    const outputBuffer = Buffer.from(data);

    for (let i = 0; i < outputBuffer.length; i += channels) {
      const r = outputBuffer[i];
      const g = outputBuffer[i + 1];
      const b = outputBuffer[i + 2];

      // Calculate luminance / max RGB
      const maxVal = Math.max(r, g, b);
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

      // Thresholding for pure clean black background removal
      // If luminance is very low (< 8), alpha = 0
      // If between 8 and 28, smoothly feather alpha
      if (maxVal < 8) {
        outputBuffer[i + 3] = 0;
      } else if (maxVal < 28) {
        const factor = (maxVal - 8) / 20;
        outputBuffer[i + 3] = Math.round(255 * factor);
      } else {
        outputBuffer[i + 3] = 255;
      }
    }

    await sharp(outputBuffer, {
      raw: {
        width,
        height,
        channels,
      },
    })
      .png({ quality: 100, compressionLevel: 9 })
      .toFile(outputPath);

    console.log(`Processed & saved transparent PNG: ${outputPath}`);
  }
}

processImages()
  .then(() => console.log('All loader images processed with transparent backgrounds!'))
  .catch((err) => console.error(err));
