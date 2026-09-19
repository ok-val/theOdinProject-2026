import os from 'node:os';

console.log(os == globalThis.os);

// setTimeout(() => {
//   console.log('Time out!');
//   clearInterval(interval);
//   x = 0;
// }, 3000);

// let x = 1;

// const interval = setInterval(() => {
//   console.log(`Interval ${x}`);
//   x++;
// }, 1000);

console.log(os.platform());
console.log(os.homedir());

console.log(import.meta.dirname);
console.log(import.meta.filename);
