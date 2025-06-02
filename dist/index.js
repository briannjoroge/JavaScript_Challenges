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
    }
    else {
        return false;
    }
}
console.log(`-23 is negative = ${isNegative(-23)}`);
console.log(`59 is negative = ${isNegative(59)}`);
//5. Can I Drive
function canDrive(name, age) {
    if (age >= 18) {
        return `${name}, ${age} years, is old enough to drive.`;
    }
    else {
        return `${name}, ${age} years, is not old enough to drive.`;
    }
}
console.log(canDrive("Jane", 22));
console.log(canDrive("June", 12));
//6. Largest Number
function findLargest(a, b, c) {
    if (a > b || a > b) {
        return `${a} is largest.`;
    }
    else if (b > a || b > c) {
        return `${b} is largest.`;
    }
    else if (a === b && a === c) {
        return `${a} is the largest.`;
    }
    else {
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
    }
    else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        return `Your BMI is ${bmiValue} - Normal weight`;
    }
    else if (bmiValue >= 25 && bmiValue <= 29.9) {
        return `Your BMI is ${bmiValue} - Over weight`;
    }
    else {
        return `Your BMI is ${bmiValue} - obese`;
    }
}
console.log(calculateBMI(68, 1.75));
console.log(calculateBMI(85, 1.8));
//8. Greeting Based On Time
function greetUser(name, hour) {
    if (hour >= 5 && hour <= 11) {
        return `"Good morning, ${name}!"`;
    }
    else if (hour >= 12 && hour <= 17) {
        return `"Good afternoon, ${name}!"`;
    }
    else if (hour >= 18 && hour <= 21) {
        return `"Good evening, ${name}!"`;
    }
    else if ((hour >= 22 && hour <= 24) || (hour >= 0 && hour <= 4)) {
        return `"Good night, ${name}!"`;
    }
    else {
        return "Input btwn 0 - 24 HRS";
    }
}
console.log(greetUser("Bob", 1));
console.log(greetUser("Brian", 15));
//9. FizzBuzz
function fizzBuzzCheck(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    }
    else if (number % 3 === 0) {
        return "Fizz";
    }
    else if (number % 5 === 0) {
        return "Buzz";
    }
    else {
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
    }
    else if (leter === "c") {
        let circlePerimeter = 6.28 * num;
        return `Perimeter of a circle of side ${num} is ${circlePerimeter}`;
    }
    else {
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
//12. Multiply by Itself
function powerUp(num, times = 0) {
    let numberPower = num ** times;
    return `${num}^${times} = ${numberPower}`;
}
console.log(powerUp(2, 3));
console.log(powerUp(5, 0));
console.log(powerUp(3, 4));
console.log(powerUp(0));
//13. Factorial Calculator
function factorial(n) {
    let factorialNumber = 1;
    for (let i = 1; i <= n; i++) {
        factorialNumber *= i;
    }
    return `${n}! = ${factorialNumber}`;
}
console.log(factorial(4));
console.log(factorial(1));
console.log(factorial(6));
//14. Multiple Sum
function sumMultiples(n, divisor) {
    let SumEvenNumber = 0;
    for (let i = 1; i <= n; i++) {
        if (i % divisor == 0) {
            SumEvenNumber = SumEvenNumber + i;
        }
    }
    return `Sum of numbers divisible by ${divisor} from 0 to ${n} is ${SumEvenNumber}`;
}
console.log(sumMultiples(10, 2));
//15. Sum of Digits
function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return `sum of each digit is ${sum}`;
}
console.log(sumDigits(11111));
console.log(sumDigits(22));
console.log(sumDigits(987));
console.log(sumDigits(0));
// Milestone 2 challenges
//1. Sum of Positives
function sumOfPositives(myArray) {
    let sum = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] >= 0) {
            sum = sum + myArray[i];
        }
    }
    return `sum of possitive numbers in the array is ${sum}`;
}
console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));
//2. Find Maximum Value
function findMax(bigger) {
    let big = bigger[0];
    for (let i = 0; i < bigger.length; i++) {
        if (bigger[i] >= big) {
            big = bigger[i];
        }
    }
    return `The maximum value is ${big}`;
}
console.log(findMax([2, 5, 8, 7, 6, 10]));
console.log(findMax([-3 - 7, 0, 9, 4, 9, 2]));
const candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 },
];
function findWinner(candidates) {
    let winner = candidates[0];
    for (let i = 0; i < candidates.length; i++) {
        if (candidates[i].votes > winner.votes) {
            winner = candidates[i];
        }
    }
    return winner;
}
console.log(findWinner(candidates));
//4. Longest word
function findLongestWord(longer) {
    let long = longer[0];
    for (let i = 1; i < longer.length; i++) {
        if (longer[i].length > longer[0].length) {
            long = longer[i];
        }
    }
    return long;
}
console.log(findLongestWord(["tom", "jerry", "hulk", "ian", "matatu"]));
//5. Count Properties
function countProperties(candidate) {
    let lengthKey = Object.keys(candidate).length;
    return lengthKey;
}
console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));
//6. Filter by Length
function filterByLength(arrString, minLength) {
    let wordContainer = [];
    for (let i = 0; i < arrString.length; i++) {
        if (arrString[i].length >= minLength) {
            wordContainer.push(arrString[i]);
        }
    }
    return wordContainer.length > 0 ? wordContainer : ["error!"];
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));
//7. Sum of Even Numbers
function sumEvenNumber(arrNumber) {
    let sumEvenArray = 0;
    for (let i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] % 2 == 0) {
            sumEvenArray = sumEvenArray + arrNumber[i];
        }
    }
    return `Sum of even numbers is ${sumEvenArray}`;
}
console.log(sumEvenNumber([1, 2, 3, 4, 5, 6]));
//8. Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(minusEvenOdd) {
    let minusEven = 0, minusOdd = 0;
    for (let i = 0; i < minusEvenOdd.length; i++) {
        if (minusEvenOdd[i] % 2 == 0) {
            minusEven = minusEven + minusEvenOdd[i];
        }
        else {
            minusOdd += minusEvenOdd[i];
        }
    }
    return minusEven - minusOdd;
}
console.log(`The difference Between Sum of the above Even and Odd Numbers is  ${differenceEvenOdd([1, 2, 3, 4, 5, 6])}`);
// 9. Count Truthy
function countTruthy(truthyObject) {
    let objectCount = 0;
    for (const key in truthyObject) {
        if (truthyObject[key]) {
            objectCount++;
        }
    }
    return objectCount;
}
console.log(`Truthy values are ${countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null })}`);
//10. Average of Numbers
function average(arrAverage) {
    let sumAverage = 0;
    for (let i = 0; i < arrAverage.length; i++) {
        if (arrAverage[i] >= 0) {
            sumAverage = sumAverage + arrAverage[i];
        }
    }
    return sumAverage / arrAverage.length;
}
console.log(`The average is ${average([2, 4, 6, 8])}`);
//11. Linear Search
function linearSearch(arrLinear, searchNumber) {
    for (let i = 0; i < arrLinear.length; i++) {
        if (arrLinear[i] == searchNumber) {
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([5, 3, 7, 1, 4], 7)); // returns: 2
console.log(linearSearch([5, 3, 7, 1, 4], 10)); // returns: -1
//12. Reverse Linear Search
function reverseLinearSearch({ arrReverse, numberSearch, }) {
    for (let i = arrReverse.length; i >= 0; i--) {
        if (arrReverse[i] == numberSearch) {
            return i;
        }
    }
    return -1;
}
console.log(`Position of first number is ${reverseLinearSearch({ arrReverse: [5, 3, 7, 1, 4, 7], numberSearch: 7 })}`); // returns: 5
console.log(`Position of first number is ${reverseLinearSearch({ arrReverse: [5, 3, 7, 1, 4, 7], numberSearch: 10 })}`); // returns -1
//13. Linear Search All Indices
function linearSearchAll({ arrayLinear, searchedNumber, }) {
    let arrayPosition = [];
    for (let i = 0; i < arrayLinear.length; i++) {
        if (arrayLinear[i] == searchedNumber) {
            arrayPosition.push(i);
        }
    }
    return arrayPosition;
}
console.log(linearSearchAll({ arrayLinear: [5, 3, 7, 1, 4, 7], searchedNumber: 7 })); // returns: [2, 5]
console.log(linearSearchAll({ arrayLinear: [5, 3, 7, 1, 4], searchedNumber: 10 })); //returns: []
//14. Count Occurrences
function countOccurrences({ arrCount, }) {
    let countArray = {};
    for (let i = 0; i < arrCount.length; i++) {
        let num = arrCount[i];
        countArray[num] = countArray[num] ? countArray[num] + 1 : 1;
    }
    return countArray;
}
console.log(countOccurrences({
    arrCount: ["apple", "banana", "apple", "orange", "banana", "apple"],
})); // returns: { apple: 3, banana: 2, orange: 1 }
// 15. Remove Duplicates
function removeDuplicates({ arr }) {
    return arr.filter(function (value, index) {
        return arr.indexOf(value) === index;
    });
}
console.log(removeDuplicates({ arr: [1, 2, 3, 2, 4, 1, 5] }));
// Outputs: [1, 2, 3, 4, 5]
//16. Most Frequent
function mostFrequent({ arrFrequent }) {
    const objectFrequent = {};
    let maxFrequency = 0;
    let freq = null;
    for (let i = 0; i < arrFrequent.length; i++) {
        let frequent = arrFrequent[i];
        if (objectFrequent[frequent]) {
            objectFrequent[frequent]++;
        }
        else {
            objectFrequent[frequent] = 1;
        }
    }
    for (let key in objectFrequent) {
        if (objectFrequent[key] > maxFrequency) {
            maxFrequency = objectFrequent[key];
            freq = Number(key);
        }
    }
    return freq;
}
console.log(mostFrequent({ arrFrequent: [1, 2, 2, 3, 3, 3, 4] })); // returns: 3
// console.log(
//   mostFrequent({
//     arrFrequent: ["apple", "banana", "apple", "orange", "banana", "apple"],
//   }),
// ); // returns: "apple"
//1. Sum of Positives
function sumOfPositives(myArray) {
  let sum = 0;
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] >= 0) {
      sum = sum + myArray[i];
    }
  }
  return `sum of possitive numbers in the array is ${sum}`;
}
console.log(sumOfPositives([1, -3, 5, -2, 9, -8]));
//2. Find Maximum Value
function findMax(bigger) {
  let big = bigger[0];
  for (let i = 0; i < bigger.length; i++) {
    if (bigger[i] >= big) {
      big = bigger[i];
    }
  }
  return `The maximum value is ${big}`;
}
console.log(findMax([2, 5, 8, 7, 6, 10]));
console.log(findMax([-3 - 7, 0, 9, 4, 9, 2]));
candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 },
];
function findWinner(candidates) {
  let winner = candidates[0];
  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i].votes > winner.votes) {
      winner = candidates[i];
    }
  }
  return winner;
}
console.log(findWinner(candidates));
//4. Longest word
function findLongestWord(longer) {
  let long = longer[0];
  for (let i = 1; i < longer.length; i++) {
    if (longer[i].length > longer[0].length) {
      long = longer[i];
    }
  }
  return long;
}
console.log(findLongestWord(["tom", "jerry", "hulk", "ian", "matatu"]));
//5. Count Properties
function countProperties(candidate) {
  let lengthKey = Object.keys(candidate).length;
  return lengthKey;
}
console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));
//6. Filter by Length
function filterByLength(arrString, minLength) {
  let wordContainer = [];
  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i].length >= minLength) {
      wordContainer.push(arrString[i]);
    }
  }
  return wordContainer.length > 0 ? wordContainer : ["error!"];
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));
//7. Sum of Even Numbers
function sumEvenNumbers(arrNumber) {
  let sumEvenArray = 0;
  for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 2 == 0) {
      sumEvenArray = sumEvenArray + arrNumber[i];
    }
  }
  return `Sum of even numbers is ${sumEvenArray}`;
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]));
//8. Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(minusEvenOdd) {
  let minusEven = 0,
    minusOdd = 0;
  for (let i = 0; i < minusEvenOdd.length; i++) {
    if (minusEvenOdd[i] % 2 == 0) {
      minusEven = minusEven + minusEvenOdd[i];
    } else {
      minusOdd += minusEvenOdd[i];
    }
  }
  return minusEven - minusOdd;
}
console.log(
  `The difference Between Sum of the above Even and Odd Numbers is  ${differenceEvenOdd([1, 2, 3, 4, 5, 6])}`,
);
