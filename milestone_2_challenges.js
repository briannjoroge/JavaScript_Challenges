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

//2. Find Maximum Value
function findMax(bigger) {
  let big = bigger[0];
  for (let i = 0; i < bigger.length; i++) {
    if (bigger[i] >= big) {
      big = bigger[i];
    }
  }
  console.log(`The maximum value is ${big}`);
}

findMax([2, 5, 8, 7, 6, 10]);
findMax([-3 - 7, 0, 9, 4, 9, 2]);

//3. Election winner
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
  let long = longer[0].length;
  for (let i = 1; i < longer.length; i++) {
    if (longer[i].length > longer[0].length) {
      long = longer[i];
    }
  }
  console.log(long);
}

findLongestWord(["tom", "jerry", "hulk", "ian", "matatu"]);
