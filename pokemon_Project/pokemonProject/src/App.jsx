import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [poke, setPoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let abortController = new AbortController();

    const loadPoke = async () => {
      try {
        setLoading(true);
        let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`, {
          signal: abortController.signal,
        });

        console.log("response : ", response);
        setPoke(response.data);
        setError("");
      } catch (error) {
        setError("Something went Wrong :", error);
      } finally {
        setLoading(false);
      }
    };
    loadPoke();

    return () => abortController.abort();
  }, []);

  console.log("poke: ", poke);

  return (
    <div>
      <h1>{poke?.name}</h1>

      
      <img src={poke?.sprites.other.home.front_default} alt={poke?.name} />
      <ul>
        {poke?.abilities.map((item, index) => {
          return <li key={index}>{item.ability.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
