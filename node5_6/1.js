const fs = require('fs');

function writeBuffer(string) {
    
    const buffer = Buffer.from(string, 'utf-8');

    fs.writeFile('buffer_output.txt', buffer, ()=> {
        console.log('Buffer written. Buffer length in bytes:', buffer.length);
    })
}

writeBuffer('My name is Vova');