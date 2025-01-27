import { Routes, Route, Link } from "react-router-dom";
import "./Gift.css";
import AddCategory from "./AddCategory";
import { useState } from "react";
import DisplayGifs from "./DisplayGifs";
function Gift(){
    const [category, setCategory] = useState("");

    return(
        <div className="pokedexx">
        <div>
          <div id="site-border-left"></div>
          <div id="site-border-right"></div>
          <div id="site-border-top"></div>
          <div id="site-border-bottom"></div>
          <header>
            <nav className="navbar  navbar-fixed-top navbar-default">
              <div className="container">
                <div className="collapse navbar-collapse" id="navbar-collapse">
                  <ul className="nav navbar-nav ">
                    <li>
                      <Link to="/">01 : Home</Link>
                    </li>
                    <li>
                      <Link to="/works">02 : Works</Link>
                    </li>
                    <li>
                      <Link to="/about">03 : AboutMe</Link>
                    </li>
                    <li>
                      <Link to="/contact">04 : Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        <div className="bodygift">
        <div className="gift">
                <h2>Gif Search</h2>
                <AddCategory setCategory={setCategory}/>
                <DisplayGifs category={category}/>
            </div>
            </div>
            </div>
            </div>
            )
    
}
export default Gift;