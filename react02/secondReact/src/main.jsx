import React from "react";
import {createRoot} from "react-dom/client";
import Shubham, {Image} from "./App";

const root = createRoot(document.getElementById("root"))
root.render(
  <div>
    <Shubham />
    <Image />
  </div>
);