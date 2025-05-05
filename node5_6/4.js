const fs = require('fs');

const readStream = fs.createReadStream('big.txt');

readStream.on('data', (chunk) => {
    const upperChunk = chunk.toString().toUpperCase();
  console.log(upperChunk);
});

