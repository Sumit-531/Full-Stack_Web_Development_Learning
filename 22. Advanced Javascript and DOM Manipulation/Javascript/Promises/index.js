//Promise is an object that manages asynchronous operations.
//The Promise object supports two properties: state and result

//While a Promise object is "pending" (working), the result is undefined.
//When a Promise object is "fulfilled", the result is a value.
//When a Promise object is "rejected", the result is an error object.

//Wrap a Promise object around {asynchronous code}
//new Promise ((reseolve, reject) => {asynchronous code})

//======================================================================================

//Example :

function walkDog(){

    return new Promise((resolve, reject) =>{
        setTimeout(() => {

            const walkedDog = true;

            if(walkedDog){
                //value
                resolve("You walk the dog!");
            } else{
                reject("You did not walk the dog!");
            }
            
        }, 1500);
    });
}

function cleanKitchen(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const cleanedKitchen = true;

            if(cleanedKitchen){
                resolve("You clean the kitchen!");
            } else{
                reject("You did not clean the kitchen!");
            }
            
        }, 2500);
    });
}

function takeOUtTrash(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashTakenOut = false;

            if(trashTakenOut){
                resolve("You take out the trash!");
            } else{
                reject("You did not take out the trash!");
            }
            
        }, 500);
    });
}


//method chaining
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOUtTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores!")})
         .catch(error => console.error(error));
