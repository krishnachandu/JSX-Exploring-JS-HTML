//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom";
var name = "KrishnaChanduAkula";
ReactDOM.render(
  <div>
    <h1>Created by {name}</h1>
    <ul>
      <li>BreakFast</li>
      <li>Lunch</li>
      <li>Dinner</li>
    </ul>
    <p>My Lucky Number is {Math.ceil(10 * Math.random())}</p>
  </div>,
  document.getElementById("root")
);
