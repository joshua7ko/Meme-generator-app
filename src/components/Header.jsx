import React from "react";
import ReactDOM  from "react-dom/client";
import logoImg  from "/public/troll-face.png";


export default function Header(){
   return ( <header className="header">
              <img src={logoImg} className="header-image"/>
              <h2 className="header-title">Meme Generator</h2>
              <h4 className="header-project">Project 3</h4>
            </header>
   )
}