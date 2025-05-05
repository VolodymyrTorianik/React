const fs = require('fs');


const originalBuffer = Buffer.from('This is exemple of buffer text for JSON.');


const jsonData = JSON.stringify(originalBuffer);


fs.writeFileSync('buffer.json', jsonData, 'utf-8');
console.log('Buffer saved in buffer.json');


const jsonFromFile = fs.readFileSync('buffer.json', 'utf-8');
const parsed = JSON.parse(jsonFromFile);


const restoredBuffer = Buffer.from(parsed.data);


console.log('Update text:', restoredBuffer.toString());
