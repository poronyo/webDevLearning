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
import fs from "fs";

inquirer
  .prompt([
    {
      name: "URL",
      message: "Type in your URL:",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const url = answers.URL;

    let qr_svg = qr.image(url, { size: 10 });
    qr_svg.pipe(fs.createWriteStream("my_qrImage.png"));
    console.log(qr_svg);

    fs.writeFile("URL_Message.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!! ");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
