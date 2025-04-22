let name = 'John';
name.toUpperCase()
console.log(name.toUpperCase())
let myArray = [5, 10, 15];
myArray
let summ = myArray.reduce((acc, value)=>acc+value,0)
console.log(summ)
const isEven = (n) => n%2 ===0; 
console.log(isEven(2))
console.log(isEven(3))
console.log(isEven(0))
console.log(isEven(-4))
const os = require('os')
console.log(os.userInfo().username)
const path = require('path')
const fullPath = path.join(process.cwd(), 'data.txt')
console.log(fullPath)
const fs = require('fs')
const myFiles = fs.readdirSync('.')
console.log (myFiles)
let  user = {name: 'John', age: 34}
console.log(user.name)
user.isAdmin = true;
console.log(user)
const double = x => x * 2
console.log(double(3))
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof NaN);
console.log(typeof []);
console.log(typeof {}); 
console.log(Array.isArray([]));