const fs = require('fs');
const path = require('path');


const storagePath = path.join(__dirname, 'storage.json');


function saveToStorage(data) {
  fs.writeFileSync(storagePath, JSON.stringify(data, null, 2), 'utf-8');
}


function readFromStorage() {

  if (!fs.existsSync(storagePath)) {
    
    return null
};

  const raw = fs.readFileSync(storagePath, 'utf-8');

  try {
    return JSON.parse(raw);
  } catch (error) {

    return null;
  }
}

function main() {
    
  const storage = readFromStorage();

  if (storage && storage.username) {
    console.log(`Hi, ${storage.username}!`);
    return;
  }

  console.log('Enter your Name:');

  process.stdin.setEncoding('utf-8');

  process.stdin.on('data', (input) => {

    const username = input.trim();

    if (!username) {
      console.log('Name can not be empty, try again:');
      return;
    }

    global.username = username; 

    saveToStorage({ username });

    console.log(`Your name "${username}" saved!`);

    process.exit();
  });
}

main();
