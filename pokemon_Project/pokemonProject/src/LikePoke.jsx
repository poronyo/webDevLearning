import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function LikePoke() {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike((check) => {
      return !check;
    });
  };

  return (
    <div>
      <button onClick={toggleLike}>
        {like ? <FaHeart color="red" /> : <FaRegHeart />}
      </button>
    </div>
  );
}

export default LikePoke;
