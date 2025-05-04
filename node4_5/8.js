const EventEmitter = require('events');

class NetworkMonitor extends EventEmitter {
    speedControl(speedMbs) {
        if (speedMbs < 10) {
            this.emit('slow', speedMbs);
        } else {
            console.log(`Speed ${speedMbs} Mb/s`);
        }
    }
}

const mySpeed = new NetworkMonitor();

mySpeed.on('slow', (speed) => {
    console.log(`Bad internet speed: ${speed} Mb/s`);
})

mySpeed.speedControl(5);
mySpeed.speedControl(20);
