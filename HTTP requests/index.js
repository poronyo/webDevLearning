import express from "express";

const app = express()
const port = 3000;

app.get("/" ,(req,res)=>{
    console.log(req.rawHeaders);
    res.send("<h1>Hello world!</h1>")
});
app.get("/about" ,(req,res)=>{
    res.send("<h1>About me</h1>")
});

app.get("/contact" ,(req,res)=>{
    res.send("<h1>huhuhu</h1>")
});


app.listen(3000,()=>{
    console.log(`server running on port ${port}.`);
    
})

