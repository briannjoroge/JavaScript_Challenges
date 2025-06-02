"use strict";
//1. Return the Sum of Two Numbers
function addition(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
console.log(`3 + 5 = ${addition(3, 5)}`);
console.log(`-6 + 9 = ${addition(-6, 9)}`);
//2. Convert Minutes into Seconds
function convert(min) {
    let secondd = min * 60;
    return secondd;
}
console.log(` 5 min = ${convert(5)}s`);
console.log(` 1 min = ${convert(1)}s`);
//3. Perimeter of a Rectangle
function findPerimeter(width, length) {
    let perimeter = 2 * (width + length);
    return perimeter;
}
console.log(`Perimeter = ${findPerimeter(6, 7)}`);
console.log(`Perimeter = ${findPerimeter(20, 10)}`);
//4. Check Negative
function isNegative(negativeNumber) {
    if (negativeNumber < 0) {
        // console.log(`true`);
        return true;
    }
    else {
        // console.log(`false`);
        return false;
    }
}
console.log(`-23 is negative = ${isNegative(-23)}`);
console.log(`59 is negative = ${isNegative(59)}`);
