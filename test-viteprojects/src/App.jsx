import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [seconds, setSeconds] = useState(0); // State to keep track of seconds
  const [name, setName] = useState("test");

  useEffect(() => {
    const handleResize = () => {
      setSeconds((prevValue)=>{
        const newSeconds = prevSeconds + 1;
        console.log("window Resize", newSeconds);
        return newSeconds;
      })
      
   
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
      <h1>{name} </h1>

      <button
        onClick={() => {
          setSeconds(seconds + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setName("pae");
        }}
      >
        setName
      </button>
      <button
        onClick={() => {
          setSeconds(seconds - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

useEffect(()=>{
  let abortController = new AbortController();


  const LoadPoke = async () =>{
    try{
      let response = await axios.get(``,{signal: abortController.signal})
      console.log("response :",response)
      
    }
    catch(error)
    {
      console.log("API Error :",error)
      setError("somehing wentwrong :",error)
    }
    finally{}
  }
  LoadPoke();
  return () => abortController.abort();
},[])

console.log("poke: ", poke);













export default App;
