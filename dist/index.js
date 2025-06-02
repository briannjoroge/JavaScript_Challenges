"use strict";
function addition(num1, num2) {
  let sum = num1 + num2;
  return sum;
}
console.log(`3 + 5 = ${addition(3, 5)}`);
console.log(`-6 + 9 = ${addition(-6, 9)}`);
function convert(min) {
  let secondd = min * 60;
  return secondd;
}
console.log(` 5 min = ${convert(5)}s`);
console.log(` 1 min = ${convert(1)}s`);
