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
