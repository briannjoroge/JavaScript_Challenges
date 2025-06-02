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
