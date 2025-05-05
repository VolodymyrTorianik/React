const fs = require('fs');
const path = require('path');

const tempDir = './temp';

fs.readdir(tempDir, (err, files) => {
    if (err) {
      return console.error('Error reading files:', err.message);
    }
  
    files.forEach(file => {
      const filePath = path.join(tempDir, file);
  
      fs.stat(filePath, (err, stats) => {
        if (err) {
          return console.error(`Error reading info in the file ${file}:`, err.message);
        }
  
        const now = Date.now();
        const modifiedTime = stats.mtime.getTime();
        const ageInMs = now - modifiedTime;
  
        const isOlderThan2Minutes = ageInMs > 2 * 60 * 1000;
  
        if (isOlderThan2Minutes && stats.isFile()) {
          fs.unlink(filePath, (err) => {
            if (err) {
              console.error(`Cannot reading file ${file}:`, err.message);
            } else {
              console.log(`File ${file} deleted successfully!`);
            }
          });
        }
      });
    });
  });