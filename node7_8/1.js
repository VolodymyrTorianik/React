
global.callCount = 0;

function greetUser(name) {
  global.callCount++;
  console.log(`Hello, ${name}!`);
  console.log(`Function called ${global.callCount} times`);
}

greetUser("Alice");
greetUser("Bob");
greetUser("Charlie");
greetUser("David");
greetUser("Alice");