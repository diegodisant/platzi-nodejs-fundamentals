console.log(global);

let currentInterval = 1;

let intervalLimit = 5;

let intervalId = global.setInterval(() => {
  if (currentInterval === intervalLimit) {
    clearInterval(intervalId);
  }

  console.log('Hello');

  currentInterval += 1;
}, 1000);

console.log(process);
console.log(__dirname);
console.log(__filename);
