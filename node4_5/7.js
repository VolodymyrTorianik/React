const EventEmitter = require('events');

class ChatRoom extends EventEmitter {

    sendMessage(user, message) {
        this.emit('message', user, message);}
}     

const chat = new ChatRoom();
chat.on('message', (user, message)=> {
    console.log(`${user}: ${message}`);
})

chat.sendMessage('Alex', 'Hello, everyone!');
chat.sendMessage('Anna', 'Happy to be here!');