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

//5. Count Properties
function countProperties(candidate) {
  let lengthKey = Object.keys(candidate).length;
  console.log(lengthKey);
}

countProperties({ name: "Alice", age: 25, city: "Paris" });

//6. Filter by Length
function filterByLength(arrString, minLength) {
  for (i = 0; i < arrString.length; i++) {
    if (arrString[i].length >= minLength) {
      console.log(arrString[i]);
    }
  }
}

filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5);

//7. Sum of Even Numbers
function sumEvenNumbers(arrNumber) {
  let sumEvenArray = 0;
  for (i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] % 2 == 0) {
      sumEvenArray = sumEvenArray + arrNumber[i];
    }
  }
  console.log(`Sum of even numbers is ${sumEvenArray}`);
}

sumEvenNumbers([1, 2, 3, 4, 5, 6]);

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

// 9. Count Truthy
function countTruthy(truthyObject) {
  let objectCount = 0;
  for (key in truthyObject) {
    if (truthyObject[key]) {
      objectCount++;
    }
  }
  return objectCount;
}

console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));

//10. Average of Numbers
function average(arrAverage) {
  let sumAverage = 0;
  for (i = 0; i < arrAverage.length; i++) {
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
function reverseLinearSearch(arrReverse, numberSearch) {
  for (let i = arrReverse.length; i >= 0; i--) {
    if (arrReverse[i] == numberSearch) {
      return i;
    }
  }
  return -1;
}

console.log(
  `Position of first number is ${reverseLinearSearch([5, 3, 7, 1, 4, 7], 7)}`,
); // returns: 5
console.log(
  `Position of first number is ${reverseLinearSearch([5, 3, 7, 1, 4], 10)}`,
);

//13. Linear Search All Indices
function linearSearchAll(arrayLinear, searchedNumber) {
  let arrayPosition = [];
  for (let i = 0; i < arrayLinear.length; i++) {
    if (arrayLinear[i] == searchedNumber) {
      arrayPosition.push(i);
    }
  }
  return arrayPosition;
}

console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7)); // returns: [2, 5]
console.log(linearSearchAll([5, 3, 7, 1, 4], 10)); // returns: []

//14. Count Occurrences
function countOccurrences(arrCount) {
  let countArray = {};
  for (let i = 0; i < arrCount.length; i++) {
    let num = arrCount[i];
    countArray[num] = countArray[num] ? countArray[num] + 1 : 1;
  }
  return countArray;
}

console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]),);
// returns: { apple: 3, banana: 2, orange: 1 }
