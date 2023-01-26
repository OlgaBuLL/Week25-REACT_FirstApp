import "./App.css";
import React, { useState } from "react";
import { SwatchesPicker } from "react-color";
import { SketchPicker } from "react-color";

function App() {
  const [background, setBackgroundColor] = useState("#BD10E0");
  const [color, setColor] = useState("#FFFFFF");
  return (
    <div className="App">
      <SwatchesPicker
        color={color}
        onChangeComplete={(color) => {
          setColor(color.hex);
        }}
      />
      <SketchPicker
        color={background}
        onChangeComplete={(color) => {
          setBackgroundColor(color.hex);
        }}
      />
      <div
        style={{
          background: background,
          height: "300px",
          transition: "ease all 500ms",
          padding: "2rem",
        }}
      >
        <h1 style={{ color: color }}>HELLO WORLD!</h1>
        <p>This is my 1st REACT App !</p>
        <p>So exciting!</p>
        <br></br>
        <p style={{ fontSize: "small", color: "#C9C4CA" }}>
          Here U can change the color of the Title and the background
        </p>
        <p>Let's try😉</p>
      </div>
    </div>
  );
}

export default App;
