import React, { useState, useEffect } from "react";
import LikePokemon from "./LikePokemon";

function FavoritePokemon({ favArray, a }) {
  //   console.log("favorite area :", props.favArray);
  console.log("a :",a)

  return (
    <div className=" rounded-lg bg-gray-700 flex flex-col justify-between gap-2 p-4">
      <h2>Favorite pokemon</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {favArray?.map((item, index) => (
          <div key={index}>
            <p>{item?.name}</p>
            <img src={item?.sprites?.other?.home.front_default} />
            <LikePokemon />
          </div>
        ))}
      </div>
      <div>--- </div>
    </div>
  );
}

export default FavoritePokemon;
