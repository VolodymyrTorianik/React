
global.dataBaseEx = {
    users: [
      { username: 'anna', password: '123' },
      { username: 'max', password: '456' }
    ]
  };
  

  function checkResetFlag() {
    const args = process.argv.slice(2); 
  
    if (args.includes('--reset')) {

      global.dataBaseEx.users = []; 

      console.log('The global user storage has been cleared.');

    } else {
      console.log('Users in the storage:', global.dataBaseEx.users);
    }
  }
  
 
  checkResetFlag();
  