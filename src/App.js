import React from "react";
import "./App.css";

export default function App() {
  function handleClick() {
    console.log("I was clicked!");
  }
  function hover() {
    console.log("I was hovered");
  }

  return (
    <div className="container">
      <img onMouseOver={hover} src="https://picsum.photos/640/360" />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
