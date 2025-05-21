//1. Return the Sum of Two Numbers
let num1, num2;
function addition(num1, num2) {
  let sum = num1 + num2;
  console.log(`${num1} + ${num2} = ${sum}`);
}

addition(3, 5);
addition(-6, 9);

//2. Convert Minutes into Seconds
let min;
function convert(min) {
  let secondds = min * 60;
  if (min === 1) {
    console.log(`${min} minute is equivalent to ${secondds} seconds`);
  } else {
    console.log(`${min} minutes is equivalent to ${secondds} seconds`);
  }
}

convert(5);
convert(1);

//3. Perimeter of a Rectangle
let width, length;
function findPerimeter(width, length) {
  let perimeter = 2 * (width + length);
  console.log(
    `Perimeter of rectangle of width ${width} and length ${length} is ${perimeter}`,
  );
}

findPerimeter(6, 7);
findPerimeter(20, 10);

//4. Check Negative
let negativeNumber;
function isNegative(negativeNumber) {
  if (negativeNumber < 0) {
    console.log(`true`);
  } else {
    console.log(`false`);
  }
}

isNegative(-23);
isNegative(55);

//5. Can I Drive
function canDrive(name, age) {
  if (age >= 18) {
    console.log(`${name} is old enough to drive.`);
  } else {
    console.log(`${name} is not old enough to drive.`);
  }
}

canDrive("Jane", 22);
canDrive("June", 12);

//6. Largest Number
function findLargest(a, b, c) {
  if (a > b || a > b) {
    console.log(`${a} is largest.`);
  } else if (b > a || b > c) {
    console.log(`${b} is largest.`);
  } else if (a === b && a === c) {
    console.log(`${a} is the largest.`);
  } else {
    console.log(`${c} is the largest.`);
  }
}

findLargest(5, 9, 3);
findLargest(10, 10, 10);
findLargest(-1, -5, -3);

//7. BMI Calculator BMI = weight / (height * height)
function calculateBMI(weight, height) {
  const bmiValue = weight / (height * height);
  if (bmiValue < 18.5) {
    console.log(`Your BMI is ${bmiValue} - underweight`);
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    console.log(`Your BMI is ${bmiValue} - Normal weight`);
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    console.log(`Your BMI is ${bmiValue} - Over weight`);
  } else {
    console.log(`Your BMI is ${bmiValue} - obese`);
  }
}

calculateBMI(68, 1.75);
calculateBMI(85, 1.8);

//8. Greeting Based On Time
function greetUser(name, hour) {
  // const xTime;
  if (hour >= 5 && hour <= 11) {
    console.log(`"Good morning, ${name}!"`);
  } else if (hour >= 12 && hour <= 12) {
    console.log(`"Good afternoon, ${name}!"`);
  } else if (hour >= 18 && hour <= 21) {
    console.log(`"Good evening, ${name}!"`);
  } else if ((hour >= 22 && hour <= 24) || (hour >= 0 && hour <= 4)) {
    console.log(`"Good night, ${name}!"`);
  }
}

greetUser("Bob", 1);
greetUser("Brian", 15);

//9. FizzBuzz
function fizzBuzzCheck(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  }
   else if (number % 3 === 0) 
    {
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
    console.log(`Perimeter of a square of side ${num} is ${squarePerimeter}`);
  } else if (leter === "c") {
    let circlePerimeter = 6.28 * num;
    console.log(`Perimeter of a circle of side ${num} is ${circlePerimeter}`);
  }
}

perimeter("s", 7);
perimeter("c", 4);

//11. Sum of Even Numbers
function sumEvenNumbers(n) {
  let SumEven = 0;
  for (i = 2; i <= n; i++) {
    if (i % 2 == 0) {
      SumEven = SumEven + i;
    } else {
      continue;
    }
  }
  console.log(`Sum of even numbers from 0 to ${n} is ${SumEven}`);
}

sumEvenNumbers(6);
sumEvenNumbers(10);
sumEvenNumbers(5);

//12. Multiply by Itself
function powerUp(num, times) {
  let numberPower = 1;
  for (i >= 0; (i = times); i++) {
    numberPower = num ** i;
    break;
  }
  console.log(numberPower);
}

powerUp(2, 3);
powerUp(5, 0);
powerUp(3, 4);
powerUp(0);

//13. Factorial Calculator
function factorial(n) {
  let factorialNumber = 1;
  for (i = 1; i <= n; i++) {
    factorialNumber *= i; 
  }
  console.log(factorialNumber);
}

factorial(4)
factorial(1)
factorial(6)

//14. Multiple Sum
function sumMultiples(n, divisor) {
  let SumEvenNumber = 0;
  for (i = 1; i <= n; i++) {
    if (i % divisor == 0) {
      SumEvenNumber = SumEvenNumber + i;
    } else {
      continue;
    }
  }
  console.log(`Sum of numbers divisible by ${divisor} from 0 to ${n} is ${SumEvenNumber}`);
}

sumMultiples(10, 2)

//15. Sum of Digits
const sumDigits = (num) => {
  sum = 0;
  for (let i = 0; num > 0; num = Math.floor(num / 10)) {
    sum += num % 10;
  }

  console.log(sum);
};

sumDigits(11111);
sumDigits(22);