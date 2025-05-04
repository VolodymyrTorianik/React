const { log } = require('console');
const EventEmitter = require('events');

class BankCard extends EventEmitter {
    constructor(correctPin) {
        super();
        this.correctPin = correctPin;
        this.attempts = 0;
    }

    enterPin (pin) {

        if (pin !== this.correctPin) {
            this.attempts++;
            console.log('Wrong Pin! Please try again.');

            if (this.attempts >= 3) {
                this.emit('blocked');
            }
        } else {
            console.log('Pin accepted! You can now access your account.');
            this.attempts = 0;
        }
    }
}


const myCard = new BankCard('0000');

myCard.on('blocked', () => {
    console.log('Your card is blocked!');
})

myCard.enterPin('1234');
myCard.enterPin('4444');
myCard.enterPin('9010');