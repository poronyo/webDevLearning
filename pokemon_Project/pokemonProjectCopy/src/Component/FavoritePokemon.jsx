import React, { useState, useEffect } from "react";
import LikePokemon from "./LikePokemon";
import { GrPowerReset } from "react-icons/gr";
import DeletePokemon from "./deletePokemon";

function FavoritePokemon({ favArray, setFavFunc }) {
  //   console.log("favorite area :", props.favArray);
  const reset = () => {
    setFavFunc([]);
  };

  const deletePoke = (id) => {
    const updatedArray = favArray.filter((item, index) => id != index);
    setFavFunc(updatedArray);
  };

  return (
    <div className=" rounded-lg bg-gray-700 flex flex-col justify-between gap-2 p-5">
      <h1>Poke dex</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {favArray?.map((item, index) => (
          <div key={index}>
            <p>{item?.name}</p>
            <img src={item?.sprites?.other?.home.front_default} />
            <div className="grid grid-cols-2 p-1">
              <LikePokemon />
              <DeletePokemon index={index} deletebut={deletePoke} />
            </div>
          </div>
        ))}
      </div>

      <div>
        <button onClick={reset}>
          <GrPowerReset />
        </button>
      </div>
    </div>
  );
}

export default FavoritePokemon;
