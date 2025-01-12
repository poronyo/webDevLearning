import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function LikePokemon() {
  const [like, setLike] = useState(false);

  function toggleLike() {
    setLike(!like);
  }

  return (
    <div>
      <button onClick={toggleLike}>
        {like ? <FaHeart color="red" /> : <FaHeart />}
      </button>
    </div>
  );
}

export default LikePokemon;
