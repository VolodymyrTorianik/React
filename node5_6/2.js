const fs = require('fs');

function buffersConcat () {

    const buff1= Buffer.from('This is example of ');
    const buff2= Buffer.from('buffers concatenation.');

    const buffConcat = Buffer.concat([buff1, buff2]);

    console.log('Concat buffers:', buffConcat.toString());
    
    fs.writeFileSync('buffer_concat.txt', buffConcat)
}

buffersConcat ();