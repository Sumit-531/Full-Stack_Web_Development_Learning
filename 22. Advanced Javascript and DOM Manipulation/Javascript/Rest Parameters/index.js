// rest parameter is a parameter prefixed with three dots
// rest parameters = (...rest) allow a function work with a variable number of arguments by building them into an array
// spread = expands an array into seperate elements
// rest = bundles separate elements into an array

//**************************************************************************************************************
// Example 1

//               //Rest parameters
function openFridge(...foods) {
  console.log(foods);
  //        // Spread Operator
  console.log(...foods);
}

// use rest parameters -> stick all elements in array
function getFood(...foods) {
  return foods;
}

const foodOne = "Chicken Biriyani";
const foodTwo = "Kacchi";
const foodThree = "Khichuri";
const foodFour = "Pizza";
const foodFive = "Fried Rice";

// openFridge(foodOne, foodFour);

const foods = getFood(foodOne, foodTwo, foodThree, foodFour, foodFive);

// rest parameter -> bundle item into array
console.log(foods); // Output -> [ 'Chicken Biriyani', 'Kacchi', 'Khichuri', 'Pizza', 'Fried Rice' ]

// Example 2
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

const total = sum(1, 9, 11);

console.log(`Your total is ${total} ৳`);

function getAverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const totalTwo = getAverage(9, 214, 53, 232);
console.log(totalTwo);

// Example 3
// Combine strings together
function combineStrings(...name) {
  return name.join(" ");
}

const fullName = combineStrings("Mr.", "Sumit", "Chakraborty");

console.log(fullName);
