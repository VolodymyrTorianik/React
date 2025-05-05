const fs = require('fs');
const path = 'log.txt';

function log(message) {

    const now = new Date();
    const timestamp = now.toLocaleString();

    const logInfo = `[${timestamp}] - ${message}\n`;

    if (!fs.existsSync(path)) {
        console.log('File does not exist. Creating new file...');
    }

    fs.appendFile(path, logInfo, (err) => {
        if (err) {
          console.error('Error added message to log.txt:', err.message);
        } else {
          console.log('Message added to log.txt successfully!');
        }
      });
}


log('This is a log message.');
log('This is another log message.');
log('This is yet another log message.');