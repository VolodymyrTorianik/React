const fs = require('fs');
const path = require('path');


const args = process.argv.slice(2);


function getArgValue(flag) {
  const index = args.indexOf(flag);
  return index !== -1 && index + 1 < args.length ? args[index + 1] : null;
}

const srcPath = getArgValue('--src');
const destPath = getArgValue('--dest');

if (!srcPath || !destPath) {
  console.log('Вкажіть аргументи --src [файл] і --dest [файл]');
  process.exit(1);
}


fs.readFile(srcPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Помилка при читанні файлу:', err.message);
    return;
  }
  const processedText = data.replace(/test/gi, 'exam');

  fs.writeFile(destPath, processedText, () => {
      console.log(`Файл успішно збережено у: ${destPath}`);
  });
});
