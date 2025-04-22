const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');

const logFile = path.join(__dirname, 'app.log');

function logMessage(lev, message) {
  const time = dayjs().format('YYYY-MM-DD HH:mm:ss');
  const logLine = `[${time}] [${lev.toUpperCase()}] ${message}\n`;

  fs.appendFile(logFile, logLine, (err) => {
    if (err) console.error('❌ Помилка при записі логів:', err.message);
  });
}

module.exports = {
  info: (msg) => logMessage('info', msg),
  warn: (msg) => logMessage('warn', msg),
  error: (msg) => logMessage('error', msg),
};
