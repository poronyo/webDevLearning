import React from "react";
import { FiMinusCircle } from "react-icons/fi";

function DeletePokemon({ index, deletebut }) {
  return (
    <div>
      <button onClick={() => deletebut(index)}>
        <FiMinusCircle />
      </button>
    </div>
  );
}

export default DeletePokemon;
