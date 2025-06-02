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
    return true;
  } else {
    return false;
  }
}
console.log(`-23 is negative = ${isNegative(-23)}`);
console.log(`59 is negative = ${isNegative(59)}`);
//5. Can I Drive
function canDrive(name, age) {
  if (age >= 18) {
    return `${name}, ${age} years, is old enough to drive.`;
  } else {
    return `${name}, ${age} years, is not old enough to drive.`;
  }
}
console.log(canDrive("Jane", 22));
console.log(canDrive("June", 12));
//6. Largest Number
function findLargest(a, b, c) {
  if (a > b || a > b) {
    return `${a} is largest.`;
  } else if (b > a || b > c) {
    return `${b} is largest.`;
  } else if (a === b && a === c) {
    return `${a} is the largest.`;
  } else {
    return `${c} is the largest.`;
  }
}
console.log(findLargest(5, 9, 3));
console.log(findLargest(10, 10, 10));
console.log(findLargest(-1, -5, -3));
//7. BMI Calculator BMI = weight / (height * height)
function calculateBMI(weight, height) {
  const bmiValue = Number((weight / (height * height)).toFixed(3));
  if (bmiValue < 18.5) {
    return `Your BMI is ${bmiValue} - underweight`;
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    return `Your BMI is ${bmiValue} - Normal weight`;
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    return `Your BMI is ${bmiValue} - Over weight`;
  } else {
    return `Your BMI is ${bmiValue} - obese`;
  }
}
console.log(calculateBMI(68, 1.75));
console.log(calculateBMI(85, 1.8));
//8. Greeting Based On Time
function greetUser(name, hour) {
  if (hour >= 5 && hour <= 11) {
    return `"Good morning, ${name}!"`;
  } else if (hour >= 12 && hour <= 17) {
    return `"Good afternoon, ${name}!"`;
  } else if (hour >= 18 && hour <= 21) {
    return `"Good evening, ${name}!"`;
  } else if ((hour >= 22 && hour <= 24) || (hour >= 0 && hour <= 4)) {
    return `"Good night, ${name}!"`;
  } else {
    return "Input btwn 0 - 24 HRS";
  }
}
console.log(greetUser("Bob", 1));
console.log(greetUser("Brian", 15));
//9. FizzBuzz
function fizzBuzzCheck(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number.toString();
  }
}
console.log(fizzBuzzCheck(3));
console.log(fizzBuzzCheck(10));
console.log(fizzBuzzCheck(15));
console.log(fizzBuzzCheck(7));
//10. Perimeter 2
function perimeter(leter, num) {
  if (leter === "s") {
    let squarePerimeter = 4 * num;
    return `Perimeter of a square of side ${num} is ${squarePerimeter}`;
  } else if (leter === "c") {
    let circlePerimeter = 6.28 * num;
    return `Perimeter of a circle of side ${num} is ${circlePerimeter}`;
  } else {
    return "Enter valid letter";
  }
}
console.log(perimeter("s", 7));
console.log(perimeter("c", 4));
//11. Sum of Even Numbers
function sumEvenNumbers(n) {
  let sumEven = 0;
  for (let i = 2; i <= n; i++) {
    if (i % 2 == 0) {
      sumEven = sumEven + i;
    }
  }
  return `Sum of even numbers from 0 to ${n} is ${sumEven}`;
}
console.log(sumEvenNumbers(6));
console.log(sumEvenNumbers(10));
console.log(sumEvenNumbers(5));
