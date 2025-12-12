// Spread Operator is represented by three dots(...)
// Spread Operator allows an iterable such as an array or string to be expended
//                                                 into separate elements
//                                                 (unpack the elements)

//**************************************************************************************************************
// Example 1:

let numbers = [1, 2, 3, 4, 5];

//                      Spread operator -> unpack the elements
const maximum = Math.max(...numbers);
//                      Spread operator -> spread array into different elements
const minimum = Math.min(...numbers);

console.log(numbers); // Output -> [1, 2, 3, 4, 5]
console.log(maximum); // Output -> 5
console.log(minimum); // Output -> 1

// Example 2:

let username = "Sumit Chakraborty";

//                      Spread operator
let lettersOne = [...username];
let lettersTwo = [...username].join("-");

console.log(username); // Output -> Sumit Chakraborty
console.log(lettersOne); /* Output -> [
                                    'S', 'u', 'm', 'i', 't',
                                    ' ', 'C', 'h', 'a', 'k',
                                    'r', 'a', 'b', 'o', 'r',
                                    't', 'y'
                                    ] */
console.log(lettersTwo); // Output -> S-u-m-i-t- -C-h-a-k-r-a-b-o-r-t-y

// Example 3:
let fruits = ["Mango", "Lichi", "Banana"];
// Creating shalow copy -> Identical elements -> with Spread operator
let newFruits = [...fruits];

console.log(fruits); // Output -> [ 'Mango', 'Lichi', 'Banana' ]
console.log(newFruits); // Output -> [ 'Mango', 'Lichi', 'Banana' ]

// Combine two or more array
let vegetables = ["Carrots", "Potatoes", "Onion"];

let foods = [...fruits, ...vegetables, "eggs", "milk", "juice"];

console.log(foods);
/* [
  'Mango',    'Lichi',
  'Banana',   'Carrots',
  'Potatoes', 'Onion',
  'eggs',     'milk',
  'juice'
] */
