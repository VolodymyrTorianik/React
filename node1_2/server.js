


const fs = require('fs');
const path = require('path');


const args = process.argv.slice(2);
const command = args[0];
const directory = args[1] || process.cwd();


if (command === 'create-log') {
  const filePath = path.join(directory, 'log.txt');
  fs.writeFile(filePath, 'Лог створено', (err) => {
    if (err) {
      console.error('Помилка при створенні файлу:', err.message);
    } else {
      console.log(`Файл log.txt успішно створено в ${filePath}`);
    }
  });
} else {
  console.log('Невідома команда. Використовуйте: create-log [шлях]');
}