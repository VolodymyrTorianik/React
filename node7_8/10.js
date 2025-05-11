global.logs = [];


function logEvent(message) {

  const timestamp = new Date().toISOString();

  global.logs.push({ timestamp, message });

  console.log(`[${timestamp}]: ${message}`);
}



function printLogs() {

  if (global.logs.length === 0) {

    console.log('Logs are empty!');
    return;
  }

  console.log('History of logs:');
  global.logs.forEach((log, index) => {
    console.log(`${index + 1}. [${log.timestamp}] — ${log.message}`);
  });
}


function mainFunction() {
  const args = process.argv.slice(2);

  if (args.includes('--logs')) {

    printLogs();
    return;
  }


  logEvent('user logged in');
  logEvent('user created a new post');
  logEvent('user logged out');
}

mainFunction();
