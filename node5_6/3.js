const fs = require('fs');

const buffA = fs.readFileSync('a.txt');
const buffB = fs.readFileSync('b.txt');

const bufferCompare = Buffer.compare(buffA, buffB);

if (bufferCompare === 0) {
    console.log('Файли однакові');
 } else if (bufferCompare < 0) {
     console.log('Файл a.txt менший за b.txt');
 } else if (bufferCompare > 0) {
     console.log('Файл a.txt більший за b.txt');
 }