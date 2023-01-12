import React from "react";

function Nav(){
    return(
       <header>
        <h2 className="header-title"> 
            <a data-testid="link" href="/">
                <span role= "img" aria-label="camera"> 📸 Darbys React Portfolio</span>
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className="mx-3">
                    <a href="#about">About Me</a>
                </li>
                <li className="mx-3">
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li className="mx-3">
                    <a href="#contact">Contact</a>
                </li>
                <li className="mx-3">
                    <a href="#resume">Resume</a>
                </li>
            </ul>
        </nav>
       </header>
    )
}

export default Nav