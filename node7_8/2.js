const crypto = require('crypto');

global.db = {
  users: [],
};

function hashPassword(password) {

  return crypto.createHash('sha256').update(password).digest('hex');

}   

function addUser(username, password) {

    const hashedPassword = hashPassword(password);

    const user = {

      username,
      password: hashedPassword

    };
  
    global.db.users.push(user);
  
    console.log(`User "${username}" added!`);
    console.log(global.db.users); 
}


addUser("Alice", "password123");
addUser("Bob", "securepassword");