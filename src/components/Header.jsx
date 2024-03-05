import React from "react";
import ReactDOM  from "react-dom/client";


export default function Header(){
   return ( <header className="header">
              <img src="./public/troll-face.png" className="header-image"/>
              <h2 className="header-title">Meme Generator</h2>
              <h4 className="header-project">Project 3</h4>
            </header>
   )
}