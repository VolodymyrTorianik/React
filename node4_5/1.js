
const EventEmitter = require('events');

class AlarmClock extends EventEmitter {
    start() {
        setTimeout(() => {
          this.emit('ring');
        }, 5000);
      }
    }

const alarm = new AlarmClock();

alarm.on('ring', () => { 
    console.log('Прокидайся!')
});

alarm.start();
