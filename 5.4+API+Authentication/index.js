import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "poronyo";
const yourPassword = "IAmTheBestEver";
let yourAPIKey = "64cbe2b1-bc73-46df-a0d2-f5d7fc4baa91";
let yourBearerToken = "b50a9463-68e1-48bc-9dbc-5e54c9444a10";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try{
    const result = await axios.get(API_URL+"random");
    console.log(result.data.id, result.data.secret)
    res.render("index.ejs", { content: JSON.stringify(result.data) });
    

  }
  catch{

  }
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  const result = await axios.get(API_URL+"all?page=2",{
    auth: {
      username: yourUsername,
      password: yourPassword,
    },
  });
  console.log(result.data)
  res.render("index.ejs",{content:JSON.stringify(result.data)})

  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey", async (req, res) => {
  try{ 
    const result = await axios.get(API_URL+"generate-api-key")
    yourAPIKey = result.data.apiKey
  
    console.log("New API Key : ", result.data.apiKey)
    res.render("index.ejs",{content:JSON.stringify(result.data.apiKey)})
  }
  catch(error){
    console.error("Error using the API key:", error);
    res.status(500).send("Error using the API key");
  }
  
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", async(req, res) => {

  try{
    const result = await axios.get(API_URL+"secrets/42",{
      headers: { 
      Authorization: `Bearer ${yourBearerToken} `},
    });
    console.log(result.data)
    res.render("index.ejs",{content:JSON.stringify(result.data)})
  }
  catch(error){
    console.log("Error when using API",error);
    res.status(500).send("Error using the API key");
  }

  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
