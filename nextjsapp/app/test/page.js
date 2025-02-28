"use client";

import { useState, useEffect } from "react";

async function getBlog() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error("can't fetch blog");
  }
  return response.json();
}

export default function Page() {
  const [blogState, setBlogState] = useState([]);

  const initBlog = async () => {
    try {
      const result = await getBlog();
      setBlogState(result);
      console.log("blogState : ", result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initBlog();
  }, []);

  return (
    <div>
      <div>Hello world pages test2</div>
      <div>{blogState.length}</div>
    </div>
  );
}
