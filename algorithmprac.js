const fs = require('fs'); 
// const input = fs.readFileSync('/dev/stdin').toString() //.split('\n'); 
const input = fs.readFileSync('제출.txt').toString().split(' ');

// console.log(input);

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a+b);