// let event = new Promise((resolve,reject)=>{
//     let name = "test";
//     if (name = "Pedro"){
//         resolve(name);
//     } 
//     else{
//         reject("Name was not Pedro, name was "+ name);
//     }
// });

// console.log(name);

// event
// .then((name)=>{
//     console.log(`${name}la la`)
// })
// .catch((err)=>{
//     console.log(err);
// })
// .finally(()=>{
//     console.log("promise finished ")
// }) 

// function callbackTest(){
//     setTimeout(()=>{
//         const data = {user : "Johnny"}
//         console.log(data)
//         setTimeout(()=>{
//             console.log("Data has been updated")
//         },1000)
//     },500)
// }

// callbackTest()


// async function getTodos(){
    // const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    // const data = await response.json()
    // console.log(1)
    // console.log(response)
    // console.log(2)
// }
// 
// 
// 
// getTodos()



import axios from "axios"


// async function getFact(){
//     const url = "https://api.aakhilv.me/fun/facts";
//     const result = await axios.get(url);
//     return result.data[0]
// }


// async function main(){
//     console.log("Begin")
//     const result = await getFact()
//     console.log( "result : ",result)

//     console.log("End")
//     // const secondresult = await getFact()
//     // console.log( "secondresult : ",secondresult)


// }


// main()

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req,res)=>{
    try{
        const response = await axios.get("https://bored-api.appbrewery.com/random");
        res.render("index.ejs",{activity: response.data});
    } catch (error){
        console.error("Failed to make request:",error.message);
        res.status(500).send("Failed to fetch activity,Please try again.");
    }
});


