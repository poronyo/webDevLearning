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
      <div>
        <div className="font-bold text-2xl text-cyan-300">content pages</div>
        <ol>
          {blogState.map((blog, index) => (
            <li key={index}>
              {blog.id}. {blog.title} : {blog.price}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
