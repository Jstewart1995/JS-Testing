var Calculator = require("./Calculator.js");//.js is optional
var calc = new Calculator();
let addResult = calc.add(2,1);
let divideResult = calc.divide(8,0);
let output = `2+1=${addResult}, 8/0=${divideResult}`;
console.log(output);
