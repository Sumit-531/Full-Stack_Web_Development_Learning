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
