//1. Return the Sum of Two Numbers
function addition(num1: number, num2: number): number {
  let sum = num1 + num2;
  return sum;
}

console.log(`3 + 5 = ${addition(3, 5)}`);
console.log(`-6 + 9 = ${addition(-6, 9)}`);

//2. Convert Minutes into Seconds
function convert(min: number): number {
  let secondd = min * 60;
  return secondd;
}

console.log(` 5 min = ${convert(5)}s`);
console.log(` 1 min = ${convert(1)}s`);

//3. Perimeter of a Rectangle
function findPerimeter(width: number, length: number): number {
  let perimeter = 2 * (width + length);
  return perimeter;
}

console.log(`Perimeter = ${findPerimeter(6, 7)}`);
console.log(`Perimeter = ${findPerimeter(20, 10)}`);

//4. Check Negative
function isNegative(negativeNumber: number) {
  if (negativeNumber < 0) {
    return true;
  } else {
    return false;
  }
}

console.log(`-23 is negative = ${isNegative(-23)}`);
console.log(`59 is negative = ${isNegative(59)}`);

//5. Can I Drive
function canDrive(name: string, age: number) {
  if (age >= 18) {
    return `${name}, ${age} years, is old enough to drive.`;
  } else {
    return `${name}, ${age} years, is not old enough to drive.`;
  }
}

console.log(canDrive("Jane", 22));
console.log(canDrive("June", 12));

//6. Largest Number
function findLargest(a: number, b: number, c: number): string {
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
