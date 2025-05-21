//1. Sum of Positives
function sumOfPositives(myArray) {
  let sum = 0;
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] >= 0) {
      sum = sum + myArray[i];
    }
  }
  console.log(`sum of possitive numbers in the array is ${sum}`);
}

sumOfPositives([1, -3, 5, -2, 9, -8]);
