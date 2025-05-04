const EventEmitter = require('events');

class RegistrationSystem extends EventEmitter {

    registerUser(name, email) {
        console.log(`User registered: ${name}, ${email}`);
        this.emit('userRegistered', { name, email });
    }
}


const registrationSystem = new RegistrationSystem();

registrationSystem.on ('userRegistered', ({name, email})=> {
    console.log(`Welcome ${name}! A confirmation email has been sent to ${email}.`);
});

registrationSystem.registerUser('User Name', 'user@gmail.com')


