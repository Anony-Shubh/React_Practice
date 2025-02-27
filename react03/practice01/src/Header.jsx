import React from "react";
import Image from "./Image.jsx";
import "./App.css"

export default function Header(){
    return (
        <header className="header"> 
        <Image />
        <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
        </nav>
        </header>
    );
  }