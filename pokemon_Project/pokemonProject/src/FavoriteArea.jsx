import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./FavoriteArea.css";
import axios from "axios";

function FavoriteArea(props) {
  console.log("import to component done: ", props.favArray);

  return (
    <div className='grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  gap-4'>
      
      {props.favArray?.map((data, index) => (
        <div key={index}>
          <h4>{data.name}</h4>
          <img src={data?.sprites?.other?.home.front_default} alt={data?.name} />

        </div>
      ))}
    </div>
  );
}

export default FavoriteArea;
