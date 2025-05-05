const fs = require('fs');

function checkFileInfo(filePath) {
  fs.stat(filePath, (err, stats) => {
    if (err) {
      console.error('Error:', err.message);
      return;
    }

    if (stats.isFile()) {
      const sizeInKB = (stats.size / 1024).toFixed(2);
      console.log(`This is a file. Size: ${sizeInKB} Kb`);
    } else {
      console.log('This is not a file!');
    }
  });
}


checkFileInfo('buffer.json'); 
