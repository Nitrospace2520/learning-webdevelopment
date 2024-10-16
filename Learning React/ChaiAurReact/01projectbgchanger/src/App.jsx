import { useState } from "react";
import "./App.css";
// import { useEffect } from "react";

function App() {
  const [color, setColor] = useState("#000");
  // useEffect(() => {
  //   if (color === "") {
  //     let col = "#";
  //     for (let i = 0; i < 6; i++) {
  //       col += Math.floor(Math.random() * 10);
  //     }
  //     setColor(col);
  //   }
  //   body.style.backgroundColor = color;
  // }, [color]);
  const createColor = () => {
    let col = "#";
    for (let i = 0; i < 6; i++) col += Math.floor(Math.random() * 10);
    return col;
  };

  return (
    <div
      style={{ backgroundColor: color }}
      className="w-screen h-screen text-white flex flex-col justify-end  text-center"
    >
      <h1 /* style={{ color: createColor() }} */ className="text-yellow-700">
        Change BackGround
      </h1>
      <div className="bg-white ring my-3 mx-7 py-1 rounded-xl">
        <button className="bg-red-700 m-1" onClick={() => setColor("#700")}>
          RED
        </button>
        <button className="bg-green-700 m-1" onClick={() => setColor("#070")}>
          GREEN
        </button>
        <button className="bg-blue-700 m-1" onClick={() => setColor("#007")}>
          BLUE
        </button>
        <button className="bg-black-700 m-1" onClick={() => setColor("BLACK")}>
          BLACK
        </button>
        <button
          className="bg-white  text-black ring-1 m-1"
          onClick={() => setColor("WHITE")}
        >
          WHITE
        </button>
        <button
          className="bg-yellow-700 m-1"
          onClick={() => setColor(createColor())}
          style={{ borderColor: color }}
        >
          RANDOM
        </button>
      </div>
    </div>
  );
}

export default App;
