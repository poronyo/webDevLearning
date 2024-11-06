// import testing from "superheroes"  assert { type: 'json' };


//  let heroName = testing.random()

// console.log(`my name is ${heroName}`) 

// import superheroes from 'superheroes';

// ---------------------

// import testingFunction from "sillyname";
// 
// let randomName = testingFunction();
// 
// console.log(`My name is ${randomName}`)

// ---------------------

// import superheroes from "superheroes";
// import testingFunction from "superheroes" ;
// 
// const randomSuperhero = superheroes.random();
// 
// console.log(`My name is ${randomSuperhero}`);
// 
// ---------------------


import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs"
inquirer
  .prompt([{
    message : "Type in your URL:",
    name: "URL"}
    /* Pass your questions in here */
  ])
  .then((answers) => {
    const url = answer.URL;
    var qr_svg = qr.image(URL);
    qr_svg.pipe(require('fs').createWriteStream('qr-image_png'));
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });