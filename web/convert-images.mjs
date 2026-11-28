import fs from "fs";
import path from "path";
import sharp from "sharp";

const imagesDir = path.join(process.cwd(), "public", "images");
const files = fs.readdirSync(imagesDir);

for (const file of files) {
  if (path.extname(file).toLowerCase() !== ".png") continue;

  const inputPath = path.join(imagesDir, file);
  const outputName = `${path.parse(file).name}.webp`;
  const outputPath = path.join(imagesDir, outputName);

  const originalSize = (fs.statSync(inputPath).size / 1024).toFixed(0);

  await sharp(inputPath)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outputPath);

  const newSize = (fs.statSync(outputPath).size / 1024).toFixed(0);
  console.log(`${file} (${originalSize} KB) -> ${outputName} (${newSize} KB)`);
}

console.log("Done!");