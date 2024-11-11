// this = reference to the object where THIS is used
// (the object depends on the immediate context)
// person.name = this.name

// this keyword does not work with arrow function.


//============================================================================================

// Example:

const person1 = {
    name : "Jhon",
    favFood: "Hamburger",
    sayHello: function() {
        console.log(`Hi, I am ${this.name}.`);
    },
    eat: function() {console.log(`${this.name} is eating ${this.favFood}.`)}
}

const person2 = {
    name : "Akash",
    favFood: "Kacchi Biriyani",
    sayHello: function() {
        console.log(`Hi, I am ${this.name}.`);
    },
    eat: function() {console.log(`${this.name} is eating ${this.favFood}.`)}
}


person1.sayHello();
person1.eat();
person2.eat();