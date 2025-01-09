import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import FavoriteArea from "./FavoriteArea";

function App() {
  const [count, setCount] = useState(0);
  const [poke, setPoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pokeId, setPokeId] = useState(1);
  const [fav, setFav] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();

    const loadPoke = async () => {
      try {
        setLoading(true);
        console.log("pokeId : ", pokeId);
        let response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokeId}`,
          {
            signal: abortController.signal,
          }
        );

        //console.log("response : ",response);
        setPoke(response.data);
        console.log("poke : ", poke);

        setError("");
      } catch (error) {
        console.error("API Error : ", error);
        setError("Something went Wrong :", error);
      } finally {
        setLoading(false);
      }
    };
    loadPoke();

    return () => abortController.abort();
  }, [pokeId]);

  // console.log("poke: ", poke);

  function nextOnClick() {
    return setPokeId((prevNum) => {
      return prevNum + 1;
    });
  }
  function prevOnClick() {
    return setPokeId((prevNum) => {
      return prevNum - 1;
    });
  }

  const prevOnClicked = () => {
    setPokeId((prevNum) => {
      return prevNum - 1;
    });
  };

  const nextOnClicked = () => {
    setPokeId((prevNum) => {
      return prevNum + 1;
    });
  };

  function addFavorite() {
    console.log("fav: ", fav);
    return setFav((prevArray) => {
      return [...prevArray, poke];
    });
  }

  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-4'>
      <div >
        
        <h1>{poke?.name}</h1>
        <button onClick={addFavorite}> Add favorite </button>
        <br />
        {poke && (
          <img
            src={poke?.sprites?.other?.home.front_default}
            alt={poke?.name}
          />
        )}
        <ul>
          {poke?.abilities?.map((item, index) => {
            return <li key={index}>{item.ability.name}</li>;
          })}
        </ul>
        <button onClick={prevOnClick}> previous </button>
        <button onClick={nextOnClick}> next </button>
      </div>
      <div>
        <h2>Favorite pokemon</h2>
        <FavoriteArea favArray={fav} />
      </div>
    </div>
  );
}

export default App;
