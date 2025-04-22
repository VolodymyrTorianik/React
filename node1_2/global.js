const fs = require('fs');

const globalKeys = Object.keys(global);
const sortedKeys = globalKeys.sort((a, b) => a.length - b.length);

console.log('Ключі глобального об’єкта:');
console.log(sortedKeys);

fs.writeFile('globals.txt', sortedKeys.join('\n'), (err) => {

console.log('Ключі записані');
});
