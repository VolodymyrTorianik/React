const crypto = require('crypto');

global.exempleDb = {
  users: [],
};

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}   

function listOfUsers() {

    global.exempleDb.users.push({
        username: 'alex',
        password: hashPassword('12345')
    });

    global.exempleDb.users.push({
        username: 'john',
        password: hashPassword('qwerty123')
    });

}

function loginCheck () {

    const args = process.argv.slice(2);

    if (args.length < 2) {

        console.log('Please enter your username and password in the form: node 3.js username password');
        return;
    }

    const [usernameInput, passwordInput] = args;
    const hashedInputPassword = hashPassword(passwordInput);

    const user = global.exempleDb.users.find(user => user.username === usernameInput && user.password === hashedInputPassword); 
    
    if (user) {
        console.log(`Welcome back, ${usernameInput}!`);
    }
    else {
        console.log('Invalid username or password!');
    }


}


listOfUsers();
loginCheck();