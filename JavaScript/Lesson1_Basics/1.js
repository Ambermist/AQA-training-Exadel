let x = Math.floor(Math.random()*10+1);
console.log(`x = ${x}`);
let y = Math.floor(Math.random()*10+1);
console.log(`y = ${y}`);
let quotient = x/y;
quotient > y ? console.log("quotient is greater then y") : 
quotient === y ? console.log("quotient and y are equal") : 
console.log("y is greater then quotient");