import { useState, useEffect, Suspense } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import "./App.css";
import FavoritePokemon from "./Component/FavoritePokemon";

/* 12-01 progress   */
function App() {
  const [poke, setPoke] = useState(null);
  const [pokeID, setPokeID] = useState(700);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [fav, setFav] = useState([]);
  const [userinput, setUserInput] = useState(null);

  useEffect(() => {
    const storedFavArray = localStorage.getItem("favArray");
    if (storedFavArray) {
      setFav(JSON.parse(storedFavArray));
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    let abortController = new AbortController();

    const apiLoading = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokeID}`,
          {
            signal: abortController.signal,
          }
        );

        setPoke(response.data);
        console.log("poke :", poke);
        //console.log("poke name :", poke.species.name);
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

  const onChangeNextForLearning = (isAdd) => {
    console.log("isAdd :", isAdd);
    setPokeID((prevValue) => {
      console.log("prevValue :", prevValue);
      return isAdd ? (prevValue += 1) : (prevValue -= 1);
    });
  };

  const onChangeNext = (isAdd) => {
    setPokeID((prevValue) => {
      return isAdd ? (prevValue += 1) : (prevValue -= 1);
    });
  };

  const addFav = () => {
    setFav((prevFavArray) => {
      localStorage.setItem("favArray", JSON.stringify([...prevFavArray, poke]));
      return [...prevFavArray, poke];
    });
  };

  const getBackgroundClass = (types) => {
    switch (types) {
      case "fire":
        return "bg-red-500";
      case "water":
        return "bg-blue-500";
      case "grass":
        return "bg-green-500";
      case "electric":
        return "bg-yellow-500";
      case "psychic":
        return "bg-purple-500";
      case "rock":
        return "bg-gray-500";
      case "ground":
        return "bg-yellow-700";
      case "ice":
        return "bg-blue-300";
      case "dragon":
        return "bg-indigo-700";
      case "fairy":
        return "bg-pink-500";
      case "dark":
        return "bg-gray-800";
      default:
        return "bg-gray-200"; // Default background color
    }
  };

  const handleSearch = (event) => {
    setUserInput(event.target.value);
    console.log("input type : ", typeof event.target.value);

    return null;
  };

  const submitSearch = () => {
    if (!userinput || isNaN(userinput) || userinput.trim() === "") {
      console.error("Invalid input. Please enter a valid number.");
      return; // Prevent setting an invalid value
    }
    setPokeID((prevValue) => parseInt(userinput));
  };

  // old version function
  // function handleSearched(event) {
  //   // const{name,value} = target
  //   let a = event.target.value;
  //   setUserInput((prevName) => {
  //     console.log("prevName :", prevName);
  //     return a;
  //   });

  //   console.log("userinput :", userinput);
  // }

  // old version function
  // function submitClicked() {
  // setPokeID(userinput);
  // }

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div
          className={`p-4 rounded-lg shadow-md text-white ${getBackgroundClass(
            poke?.types?.[0]?.type?.name
          )}
          flex flex-col justify-around `}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <ReactLoading
                type="spin"
                color="blue"
                height={"20%"}
                width={"20%"}
              />
            </div>
          ) : (
            <>
              <div className="flex flex-col space-y-4 items-center ">
                <h1>
                  {poke?.name} {pokeID}
                </h1>

                <div>
                  <input
                    type="number"
                    value={userinput}
                    placeholder=" input pokemon ID"
                    onChange={handleSearch}
                    className="object-none bg-transparent text-center font-extrabold "
                  />
                  <button onClick={addFav} className="object-contain">
                    {" "}
                    Add to PokeDex{" "}
                  </button>
                </div>

                <button onClick={submitSearch}>Submit</button>
              </div>

              {[
                poke && (
                  <img
                    className=""
                    src={poke?.sprites?.other?.home.front_default}
                  />
                ),
              ]}
              <div className=" flex justify-around ">
                {poke?.abilities?.map((item, index) => {
                  return <button key={index}>{item.ability.name}</button>;
                })}
              </div>
              <br />
              <div className="flex justify-around ">
                <button
                  onClick={() => {
                    console.log("prev");
                    onChangeNext(false);
                  }}
                  className="bg-gradient-to-r from-green-400 to-blue-500"
                >
                  Previous
                </button>
                <br />

                <button
                  onClick={() => {
                    //console.log("next");
                    onChangeNext(true);
                  }}
                  className="bg-gradient-to-r from-green-400 to-blue-500"
                >
                  Next{" "}
                </button>
              </div>
            </>
          )}
        </div>

        <FavoritePokemon favArray={fav} setFavFunc={setFav} />
      </div>
    </>
  );
}

export default App;
