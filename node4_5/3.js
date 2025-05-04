const EventEmitter = require('events');

class FileDownloader extends EventEmitter {
    constructor() {
        super();
        this.progress = 0;
    }

    start() {
        const interval = setInterval(() => {
            this.progress += 10;
            this.emit('progress', this.progress);

            if (this.progress >= 100) {

                clearInterval(interval);
                this.emit('completed');
                
            }

        }, 500);   
    }
}

const myDowmLoader = new FileDownloader();

myDowmLoader.on('progress', (progress) => {
    console.log('Domwnload progress:', progress, '%');
})

myDowmLoader.on('completed', ()=>{
    console.log('Download completed!');
})

myDowmLoader.start();