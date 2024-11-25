import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// In-memory data store
let posts = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "2023-08-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Green",
    date: "2023-08-10T09:15:00Z",
  },
];

let lastId = 3;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Write your code here//

//CHALLENGE 1: GET All posts
app.get("/posts", (req,res)=>{
  try{
    console.log("all posts :",posts);
    res.json(posts);

  }
  catch(error){
    console.log("Error while using an api",error);
    res.json("Error while using an api",error);
  }
});

//CHALLENGE 2: GET a specific post by id
app.get("/posts/:id", (req,res)=>{
  try{
    // console.log("parameter id :",req.params.id[1]);
    const idResult =  parseInt(req.params.id);
    // console.log(typeof(idResult));
    const postResult = posts.find((A)=>A.id === idResult);
    // console.log("target Result :",postResult);
    res.json(postResult)


  }
  catch(error){
    console.log("Error while using an api",error);
    res.json("Error while using an api",error);
  }
})

//CHALLENGE 3: POST a new post
app.post("/posts", (req,res)=>{
  try{
    // console.log(req.body);
    let result = {
      id: (posts.length)+1,
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    };
    // console.log("new post result :",result)
    console.log(`post length before post: ${posts.length}`);
    posts.push(result)
    console.log(`post length after post: ${posts.length}`);
    res.json(result)

    
  }
  catch(error){
    console.log("Error while using an api",error);
    res.json("Error while using an api",error);
  }
})


//CHALLENGE 4: PATCH a post when you just want to update one parameter

app.patch("/posts/:id", (req,res)=>{
  try{
    const postsIndex = parseInt(req.params.id);
    console.log("postIndex : ",postsIndex);
    const targetPosts = posts.find((A)=> A.id === postsIndex);
    if(!targetPosts) return res.status(404).json({message: "post not found"});
    console.log("target posts :",targetPosts);

   

    const result = {
      id: postsIndex,
      title: req.body.title || targetPosts.title ,
      content: req.body.content || targetPosts.content ,
      author: req.body.author || targetPosts.author ,
    };
    
    posts[postsIndex-1] = result

    console.log("updated posts look like : ",posts[postsIndex-1]);
    res.json(result)
    // res.json("Hello world");


  }
  catch(error){

  }
})

//CHALLENGE 5: DELETE a specific post by providing the post id.
app.delete("/posts/:id", (req,res)=>{
  try{
    const postsIndex = parseInt(req.params.id);
    const targetIndex = posts.findIndex((A)=>A.id === postsIndex);
    console.log("target post :",posts[targetIndex]);
    posts.splice(targetIndex,1);
    res.json({message :`Deleted post${targetIndex+1} succesfully` });
    console.log({message :`Deleted post${targetIndex+1} succesfully` });


  }
  catch(error){

  }
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
