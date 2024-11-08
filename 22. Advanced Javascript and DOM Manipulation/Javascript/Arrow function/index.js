// arrow function is a concise way to write function expressions
// It is good for simple functions  that you use only once
// (parameters) => some code




//===================================================================================================================

// Example 1:
function hello(){
    console.log("Hello");
}
hello();


//Example 2:
const hi = function(){
    console.log("Hi");
}
hi();

//Example 3:
const hey = () => console.log("hey");
hey();

//Example 4:
const helloPerson = (name) => console.log(`Hello ${name}`);
helloPerson("Sumit");


//Example 5:
const helloFrom = (name, city) => {
    console.log(`Hello ${name}!`);
    console.log(`You are from ${city} city.`);
}
helloFrom("Sumit", "Dhaka");


//Example 6:
setTimeout(hello3,3000);

function hello3(){
    console.log("Hello!!!");
}

//Example 7:
setTimeout(function(){
    console.log("How are you?");
}, 5000);


//Example 8:
setTimeout(() => {
    console.log("Where are you from?");
}, 3000);

// Example 9:
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(`Odd numbers: ${oddNums}`);