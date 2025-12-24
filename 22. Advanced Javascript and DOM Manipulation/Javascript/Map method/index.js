// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array

//**************************************************************************************************************
// Example 1

const numbers = [1, 2, 3, 9, 19];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

function square(element) {
  return Math.pow(element, 2);
}

function cube(element) {
  return Math.pow(element, 3);
}

console.log(squares); // Output -> [ 1, 4, 9, 81, 361 ]
console.log(cubes); // Output -> [ 1, 8, 27, 729, 6859 ]

// Example 2

const names = ["Goku", "Vegeta", "Gohan", "Goten", "Trunks", "Picolo"];

const namesWithUpperCase = names.map(upperCase);
const namesWithLowerCase = names.map(lowerCase);

function upperCase(element) {
  return element.toUpperCase();
}

function lowerCase(element) {
  return element.toLowerCase();
}

console.log(namesWithUpperCase); // Output -> [ 'GOKU', 'VEGETA', 'GOHAN', 'GOTEN', 'TRUNKS', 'PICOLO' ]
console.log(namesWithLowerCase); // Output -> [ 'goku', 'vegeta', 'gohan', 'goten', 'trunks', 'picolo' ]
