//The forEach() method calls a function for each element in an array.
//The forEach() method is not executed for empty elements.
// array.forEach(callback)

//=========================================================================

//Example 1:

let numbers = [1, 2, 3, 4, 5];

const display = (element) => console.log(element);

numbers.forEach(display);

//Example 2:
let numbers2 = [1, 2, 3, 4, 5];

function double(element, index, array){
    array[index] = element * 2;
}

const display2 = (element) => console.log(element);

numbers.forEach(double);
numbers.forEach(display2);

// Example 3:
numbers3 = [1, 2, 4, 9];

const square = (element, index, array) => {
    array[index] = Math.pow(element, 2);
}
const display3 = (element) => console.log(element);

numbers3.forEach(square);
numbers3.forEach(display3);

//Example 4:
let fruits = ["Mango", "Banana", "Licchi", "Jackfuit"];

const upperCaseFruits = (element, index, array) => {
    array[index] = element.toUpperCase();
}
const display4 = (element) => console.log(element);

fruits.forEach(upperCaseFruits);
fruits.forEach(display4);

// Example 5:
let fruitName = ["Mango", "Apple", "Strawberry"];

fruitName.forEach((fruit) => {
    console.log(fruit);
});
