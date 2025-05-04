const EventEmitter = require('events');

class Newsletter extends EventEmitter {
    subscribe(email) {
        this.on ('newArticle', (title) => {
            console.log(`New article for ${email}: ${title}`);
        })    
    }

    publish(title) {
        this.emit('newArticle', title);
    }
}


const newsletter = new Newsletter();

newsletter.subscribe('user1@gmail.com');
newsletter.subscribe('user2@gmail.com');
newsletter.publish('How To Learn English');
newsletter.publish('5 best tips for slimming');

