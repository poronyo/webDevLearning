import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";



const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
let bandName = "";

app.use(logger);
app.use(bodyParser.urlencoded({extended: true}));

function logger(req,res,next){
  console.log(`request method :${req.method}`)
  console.log(`request URL :${req.url}`)
  next();
}


app.use(bandNameGenerator)


function bandNameGenerator(req, res,next){
  console.log(req.body);
  bandName = req.body["street"] +" "+ req.body["pet"];
  console.log(`brand name : ${bandName}`)
  next();
  
}




app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is : </h1> \n <h2>${bandName}</h2> `);
});


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  console.log("Page loading Done")
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
