const crypto = require('crypto');

global.fakeDb = {
  users: [],
};

global.sessions = [];

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function testUsers() {
  global.fakeDb.users.push({
    username: 'anton',
    password: hashPassword('54321')
  });

  global.fakeDb.users.push({
    username: 'sveta',
    password: hashPassword('030201qqq')
  });
}

function loginProcess(username, password) {

    const hashedPass = hashPassword(password);
    const user = global.fakeDb.users.find(user => user.username === username && user.password === hashedPass);

    if(!user) {
        console.log('Invalid username or password!');
        return;
    }

    const sessionId = crypto.randomUUID();
    global.sessions.push({ username, sessionId });

    console.log(`User ${username} logged in!`);
    console.log(`Active sessions:`, global.sessions);

    return sessionId;
}

function logoutProcess(sessionId) {
    const sessionIndex = global.sessions.findIndex(session => session.sessionId === sessionId);

    if (sessionIndex === -1) {
        console.log('Session not found!');
        return;
    }

    global.sessions.splice(sessionIndex, 1);
    console.log(`User logged out!`);
    console.log(`Active sessions:`, global.sessions);
}

testUsers();

const session = loginProcess('anton', '54321');

if (session) {
    logoutProcess(session); 
}