// .filter() = creates new array by filtering our elements

//**************************************************************************************************************
// Example 1

let numbers = [1, 2, 3, 4, 5, 6, 7];

let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
}

console.log(evenNums); // Output -> [ 2, 4, 6 ]
console.log(oddNums); // Output -> [ 1, 3, 5, 7 ]

// Example 2

const ages = [11, 12, 13, 13, 18, 19, 33, 36, 82];

const adults = ages.filter(isAdult);
const child = ages.filter(isChild);

function isAdult(element) {
  return element >= 18;
}

function isChild(element) {
  return element < 18;
}

console.log(adults); // Output -> [ 18, 19, 33, 36, 82 ]
console.log(child); // Output -> [ 11, 12, 13, 13 ]
