import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
console.log("Working!");



// inquirer
//   .prompt([
//     /* Pass your questions in here */
//     "Type your url: ",
//     "what is your name? :"
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//     "Sumit";
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

//   import inquirer from 'inquirer';

// const questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's your name?",
//   },
// ];

// inquirer.prompt(questions).then((answers) => {
//   console.log(`Hello, ${answers.name}!`);
// });


inquirer
  .prompt([
    {
        "message": "Type in your url: ",
        "name": "URL",
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));

    fs.writeFile("userInput.txt", url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
