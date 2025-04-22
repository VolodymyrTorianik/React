const fs = require('fs');

fs.readFile('package.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Не вдалося прочитати package.json:', err.message);
    return;
  }

  try {
    const packageData = JSON.parse(data);
    const author = packageData.projectAuthor;

    if (author) {
      console.log(`Привіт, ${author}!`);
    } else {
      console.log('Поле projectAuthor не знайдено у package.json');
    }
  } catch (parseError) {
    console.error('Помилка при розборі JSON:', parseError.message);
  }
});
