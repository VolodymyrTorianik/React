
const EventEmitter = require('events');

class ShoppingCart extends EventEmitter {
    constructor() {
        super();
        this.items = [];
        this.total = 0;
      }
      
    addItem(name, price) {
        this.items.push({ name, price });
        this.total += price;
        this.emit('itemAdded', name, this.total);
      }      
}

const myOrder = new ShoppingCart();
myOrder.on('itemAdded', (name, total) => {
    console.log(`Товар ${name} додано до кошика. Загальна сума: ${total} грн.`);
  });
myOrder.addItem('Яблуко', 20);
myOrder.addItem('Груша', 30);

