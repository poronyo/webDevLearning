import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import FavoritePokemon from "./FavoritePokemon";

/* 12-01 progress   */
function App() {
  const [poke, setPoke] = useState(null);
  const [pokeID, setPokeID] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fav, setFav] = useState([]);

  useEffect(() => {
    setLoading(true);
    let abortController = new AbortController();

    const apiLoading = async () => {
      try {
        let response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokeID}`,
          {
            signal: abortController.signal,
          }
        );

        setPoke(response.data);
        console.log("poke :", poke);
        console.log("poke name :", poke.species.name);
        setError("");
        setLoading(false);
      } catch (error) {
        setError("Error fetching API :", error);
      } finally {
        setLoading(false);
      }
    };

    apiLoading();

    return () => abortController.abort();
  }, [pokeID]);

  function onChangeNext() {
    setPokeID((prevValue) => {
      // console.log("next click")
      return (prevValue += 1);
    });
  }

  function onChangePrev() {
    setPokeID((prevValue) => {
      // console.log("prev click")
      return (prevValue -= 1);
    });
  }

  function addFav() {
    setFav((prevFavArray) => {
      return [...prevFavArray, poke];
    });
  }

  function elementColor() {}

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-4">
        <div className="rounded-lg bg-gray-700">
          <h1>{poke?.name}</h1>
          <br />
          <button onClick={addFav}> Add favorite </button>

          {[poke && <img src={poke?.sprites?.other?.home.front_default} />]}
          <div className=" flex justify-around ">
            {poke?.abilities?.map((item, index) => {
              return <button key={index}>{item.ability.name}</button>;
            })}
          </div>
          <br />
          <div className="flex justify-around ">
            <button
              onClick={onChangePrev}
              className="bg-gradient-to-r from-green-400 to-blue-500"
            >
              Previous
            </button>
            <br />

            <button
              onClick={onChangeNext}
              className="bg-gradient-to-r from-green-400 to-blue-500"
            >
              Next{" "}
            </button>
          </div>
          <br />
        </div>
        <div className=" rounded-lg bg-gray-700">
          <h2>Favorite prokemon</h2>
          <br />
          <FavoritePokemon favArray={fav} />
        </div>
      </div>
    </>
  );
}

export default App;
