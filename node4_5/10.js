const EventEmitter = require('events');

  class TestPomodoroTimer extends EventEmitter {
    start() {
      setTimeout(() => {
        this.emit('workComplete');
        setTimeout(() => {
          this.emit('breakComplete');
        }, 5 * 60 * 1000); 
      }, 25 * 60 * 1000); 
    }
  }

class PomodoroTimer extends EventEmitter {
    start() {
      setTimeout(() => {
        this.emit('workComplete');
        setTimeout(() => {
          this.emit('breakComplete');
        }, 5 * 60 * 1000); 
      }, 25 * 60 * 1000); 
    }
  }
  

  const pomodoro = new PomodoroTimer();
  pomodoro.on('workComplete', () => {

    console.log('Work Completed')

});

  pomodoro.on('breakComplete', () => {

    console.log('Break Completed')
});
  pomodoro.start();
  