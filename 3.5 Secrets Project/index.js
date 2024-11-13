//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express"
import bodyParser from "body-parser"

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const realPassword = "ILoveProgramming" 
let userPassword = ""


app.use(bodyParser.urlencoded({extended: true}));

app.use(checkPassword)

function checkPassword(req,res,next){
    console.log(`req.body : ${req.body}`);
    userPassword = req.body["password"];
    console.log(`userPassword : ${userPassword}`); 
    next();
}



app.post("/check", (req, res) => {
    console.log("password result", userPassword == realPassword);

    if (userPassword == realPassword){
        console.log("correct password");
        res.sendFile(__dirname + "/public/secret.html");}
    else{
        res.sendFile(__dirname + "/public/index.html");
        }
    
  });
  
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
    console.log("Page loading Done");
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})