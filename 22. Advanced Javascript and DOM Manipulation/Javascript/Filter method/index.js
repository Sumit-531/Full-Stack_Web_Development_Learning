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
