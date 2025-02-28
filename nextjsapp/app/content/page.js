async function getBlog() {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error("can not fetch blog");
  }

  return response.json();
}
async function page() {
  const blogs = await getBlog();
  // console.log("blog", blogs);
  return (
    <div>
      <div className="font-bold text-2xl text-cyan-300">content pages</div>
      <ol>
        {blogs.map((blog, index) => (
          <li key={index}>
            {blog.title} : {blog.price}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default page;
