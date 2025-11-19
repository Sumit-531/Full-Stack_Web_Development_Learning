// Destructuring allows us to extract values from arrays and objects
// then assign them into variables in a convinient way
// [] = to perform array destructuring
// {} = to perform object destructuring

//**************************************************************************************************************
// ARRAY DESTRUCTURING

//****Swap The Values of Two Variables****/
// Example 1:

let a = 1;
let b = 2;

// Left side -> [a, b] -> Using destructuring
// Right side -> [b, a] -> Creating array
[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1

//****Swap Two Elements in An Array */
// Example 2:
const districts = ["Dhaka", "Chittagong", "Sylhet", "Mymensingh", "Barishal"];

// Dhaka, Barishal        Dhaka      Barishal
// Array Destructuring
[districts[0], districts[4]] = [districts[4], districts[0]]; // [ 'Barishal', 'Chittagong', 'Sylhet', 'Mymensingh', 'Dhaka' ]

console.log(districts);

//****Assign Array Elements to Variables */
// Example 2:
const colors = ["red", "green", "black", "yellow", "orange"];

// Array destructuring
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
