const { get } = require("http");

const storage = {
    _data: {},

    setItem(key, value) {

        this._data[key] = String(value); 
    },

    getItem(key) {

       return this._data.hasOwnProperty(key) ? this._data[key] : null;
    },

    removeItem(key) {
        delete this._data[key];
    },

    printAll() {
        console.log(this._data);
    }
}

storage.setItem('username', 'anton');
storage.setItem('isLoggedIn', true);
storage.setItem('age', 25);

console.log(storage.getItem('username'));
console.log(storage.getItem('isLoggedIn'));
console.log(storage.getItem('age'));
console.log(storage.getItem('nonExistentKey'));

storage.removeItem('isLoggedIn');

storage.printAll();