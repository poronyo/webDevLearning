import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const handleResize = () => console.log("Window resized!");
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // ✅ Proper cleanup
    };
  }, []);

  return <h1>Hello, Strict Mode!</h1>;
};

export default App;
