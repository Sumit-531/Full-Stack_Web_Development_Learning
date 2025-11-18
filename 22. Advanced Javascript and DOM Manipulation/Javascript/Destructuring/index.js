// Destructuring allows us to extract values from arrays and objects
// then assign them into variables in a convinient way
// [] = to perform array destructuring
// {} = to perform object destructuring

//**************************************************************************************************************
// ARRAY DESTRUCTURING

// Example 1: Swap The Values of Two Variables

let a = 1;
let b = 2;

// Left side -> [a, b] -> Using destructuring
// Right side -> [b, a] -> Creating array
[a, b] = [b, a];

console.log(a);
console.log(b);
