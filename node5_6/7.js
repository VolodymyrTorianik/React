const fs = require('fs');
const { Transform } = require('stream');


const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');


const replaceFooWithBar = new Transform({

  transform(chunk, encoding, callback) {
    
    const inputText = chunk.toString();
    const outputText = inputText.replace(/foo/g, 'bar');
    callback(null, outputText);

  }
});


readStream
  .pipe(replaceFooWithBar)
  .pipe(writeStream)
  .on('finish', () => {
    console.log('Successfully transformed and saved to output.txt');
  });
