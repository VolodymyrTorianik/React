const fs = require('fs').promises;
const path = require('path');

async function copyFiles() {
  const inputDir = path.join(__dirname, 'input');
  const outputDir = path.join(__dirname, 'output');

  try {

    await fs.mkdir(outputDir, { recursive: true });
    const files = await fs.readdir(inputDir);

    for (const file of files) {
      const srcPath = path.join(inputDir, file);
      const destPath = path.join(outputDir, file);


      await fs.copyFile(srcPath, destPath);
      console.log(`${file} скопійовано`);
    }

    console.log('Всі файли скопійовано!');
  } catch (err) {
    console.error('Помилка:', err.message);
  }
}

copyFiles();
