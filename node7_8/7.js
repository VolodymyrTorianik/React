 const crypto = require('crypto');

 global.myDataBase = {
    users: []
 };

 function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
 };
 
 function newUser(username, password) {
    const hashedPassword = hashPassword(password);
    global.myDataBase.users.push({  username, password: hashedPassword });
    console.log(`User "${username}" congratulation with successful registered!`);
 }

function checkPass (username, password) {
    const hashedPassword = hashPassword(password);
    const user = global.myDataBase.users.find(user => user.username === username && user.password === hashedPassword);
    
    if (user) {
        console.log(`Welcome back, ${username}!`);
    } else {
        console.log('Invalid username or password!');
    }
}

newUser('Alice', 'password123');

checkPass('Alice', 'password123');
checkPass('Alice', 'wrongpassword');