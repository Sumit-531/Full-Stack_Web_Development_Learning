// Async/Await = "async" keyword before a function makes the function return a promise.
// Await = makes an async function wait for a promise.

// Allows to write asynchronous code in a synchronous manner.
// Async doesn't have resolve or reject parameters.
// Everything after Await is placed in an event queue.



//========================================================================================================

//Example:
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



async function doChores(){

    try{
        // writing this code in a synchronous manner.
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOUtTrashResult = await takeOUtTrash();
    console.log(takeOUtTrashResult);

    console.log("You fininshed all the chores!");
    } catch(error){
        console.error(error);
    }
    
}

doChores();
