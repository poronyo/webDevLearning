import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [poke, setPoke] = useState(null);
  const [pokeID, setPokeID] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let abortController = new AbortController();

    const apiLoading = async () => {
      try {
        setLoading(true);
        let response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokeID}`,
          { signal: abortController.signal }
        );

        setPoke(response.data);
        console.log("poke : ", poke);
      } catch (error) {
        console.error("API Error : ", error);
        setError("Something went Wrong :", error);
      } finally {
        setLoading(false);
      }
    };

    apiLoading();
    return () => abortController.abort();
  }, [pokeID]);

  function nextOnClick() {
    setPokeID((prevNum) => {
      console.log(prevNum);
      return (prevNum += 1);
    });
  }
  function prevOnClick() {
    setPokeID((prevNum) => {
      console.log(prevNum);
      return (prevNum -= 1);
    });
  }

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div>
          <div>
            <h1>pokemon API testing</h1>
            <button> Add favorite </button>
            <br />
          </div>

          <div>
            <h2>{poke?.name}</h2>
            <img
              src={poke?.sprites?.other?.home.front_default}
              alt={poke?.name}
            />
          </div>

          <div>
            <ul>
              {poke?.ability?.map((item, index) => {
                return <li key={index}> {item.ability.name}</li>;
              })}
            </ul>
          </div>

          <div className="grid lg:grid-cols-5 gap-2 items-center justify-center text-center min-h-screen">
            <br />
            <button
              onClick={prevOnClick}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              previos{" "}
            </button>
            <br />
            <button
              onClick={nextOnClick}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              {" "}
              next
            </button>
            <br />

            <p className="text-center">
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
        </div>
        <div>
          <h3>Favorite pokemon</h3>
        </div>
      </div>
    </>
  );
}

export default App;
