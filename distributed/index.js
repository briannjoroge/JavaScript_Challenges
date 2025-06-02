"use strict";
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
console.log(
  mostFrequent({
    arrFrequent: ["apple", "banana", "apple", "orange", "banana", "apple"],
  }),
); // returns: "apple"
