// Error is an object that is created to represent a problem that occurs
// Error occurs often with user input or establishing a connection


// Errors can be generated for various issues
    // Network Errors
    // Promise rejection
    // Security Error


// Error Handling:
// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. 
//               Used mostly for clean up ex. close files, close connectinos, release resources


//=======================================================================================================

// Example 1:

try {
    console.lag(x);
} catch(error) {
    console.error(error);
}
console.log("You have reached the end!");

// Example 2:

try {
    console.lag("Hello");
} catch(error){
    console.error(error);
} finally{
    console.log("This always executes.");
}
console.log("You have reached the end!");

// Example 3:
// Accept input from the command line in Node.js
import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

try{
    rl.question(`Enter a dividend : `, dividend => {
        rl.question(`Enter a divisor : `, divisor => {

            if (divisor == 0){
                throw new Error("You can't divide by zero!");
            }

            const result = Number(dividend)/Number(divisor);
            console.log(result);
    
            rl.close();
        });
        
      });
} catch(error){
    console.error(error);
}






