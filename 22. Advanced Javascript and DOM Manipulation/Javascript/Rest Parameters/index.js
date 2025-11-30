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

const foodOne = "Chicken Biriyani";
const foodTwo = "Kacchi";
const foodThree = "Khichuri";
const foodFour = "Pizza";
const foodFive = "Fried Rice";

openFridge(foodOne, foodFour);
