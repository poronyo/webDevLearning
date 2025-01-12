import React, { useState, useEffect } from "react";

function FavoritePokemon(props) {
  console.log("favorite area :", props.favArray);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      {props.favArray?.map((item, index) => (
        <div key={index}>
          <p>{item?.name}</p>
          <img src={item?.sprites?.other?.home.front_default} />
          <button>like</button>
        </div>
      ))}
    </div>
  );
}

export default FavoritePokemon;
