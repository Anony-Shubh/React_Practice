import React from "react";
import { createRoot } from "react-dom/client";
import ShubhamInfo, {ShubhamCollege, MainContent} from "./App";
import "./index.css"; // Ensure styles are imported

const root = createRoot(document.getElementById("root"));

root.render(
  <div>
    <ShubhamInfo />
    <ShubhamCollege />
    <MainContent />
  </div>
);

// //Imparative coding
// const h1 = document.createElement("h1")
// h1.textContent = "This is Emperative Coding"
// h1.className = "header"
// document.getElementById("root").appendChild(h1)