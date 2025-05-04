const EventEmitter = require('events');

class Tournament extends EventEmitter {
    constructor() {
        super();
        this.wins = {};
    }

    playerWin(playerName) {

        if (!this.wins[playerName]) {
            this.wins[playerName] = 1;
        }
        else {
            this.wins[playerName]++;
        }
        this.emit('playerWin', playerName, this.wins[playerName]);
    }
}


const tournament = new Tournament();
tournament.on('playerWin', (playerName, wins)=> {
    console.log(`Player ${playerName} wins ${wins} times`);
})

tournament.playerWin('Alex');
tournament.playerWin('Alex');
tournament.playerWin('Alex');
tournament.playerWin('Monica');
tournament.playerWin('Alex');
tournament.playerWin('Monica');
tournament.playerWin('Sarah');
