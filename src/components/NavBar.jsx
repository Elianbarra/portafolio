// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-fixed-top navbar-inverse">
      <div className="container">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar-collapse"
          aria-expanded="false"
        >
          <span className="sr-only"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav ">
            <li>
              <Link to="/" title="">
                01 : Home
              </Link>
            </li>
            <li>
              <Link to="/works" title="">
                02 : Works
              </Link>
            </li>
            <li>
              <Link to="/about" title="">
                03 : About me
              </Link>
            </li>
            <li>
              <Link to="/contact" title="">
                04 : Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
