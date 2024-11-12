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


import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });