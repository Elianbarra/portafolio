import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import aboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import Home from "./home.jsx";
import Project from "./Projects.jsx";
import AboutMe from "./AboutMe.jsx";
import fondo2 from "../assets/images/Fondo2.png";
import Abion from "./Abion.jsx";
import "./Calculadora.css";

function Calculadora() {
  const [display, setDisplay] = useState("");
  const [darkTheme, setDarkTheme] = useState(true);

  const handleButtonClick = (id) => {
    if (id === "clear") {
      setDisplay("");
    } else if (id === "backspace") {
      setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
    } else if (id === "equal") {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay("Error!");
        setTimeout(() => setDisplay(""), 2000);
      }
    } else {
      setDisplay((prevDisplay) => prevDisplay + id);
    }
  };

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <>
      <div className="Calculadoraa">
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

          <div className="section-container">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <img src={fondo2} className="img-responsive" alt="Avion 2D" />
                  <div className="card-container">
                    <div className="text-center">
                      <h1 className="h2">03: Calculadora</h1>
                    </div>
                    <blockquote>
                      <p>
                        This project is a normal calculator created with
                        javascript with the basic signs of mathematics.
                      </p>
                      <small className="pull-right">
                        Elian Barra.(coding-dojo)
                      </small>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            <div className="containerr">
              <div className={`Calculadora ${darkTheme ? "dark" : ""}`}>
                <div className="theme-toggler active" onClick={toggleTheme}>
                  <i className="toggler-icon"></i>
                </div>
                <div className="display-screen">
                  <div id="display">{display}</div>
                </div>

                <div className="buttons">
                  <table>
                    <tr>
                      <td>
                        <button
                          className="btn-operator"
                          id="clear"
                          onClick={() => handleButtonClick("clear")}
                        >
                          C
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn-operator"
                          id="/"
                          onClick={() => handleButtonClick("/")}
                        >
                          /
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn-operator"
                          id="*"
                          onClick={() => handleButtonClick("*")}
                        >
                          *
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn-operator"
                          id="backspace"
                          onClick={() => handleButtonClick("backspace")}
                        >
                          &#8592;
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <button
                          className="btn-number"
                          id="7"
                          onClick={() => handleButtonClick("7")}
                        >
                          7
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn-number"
                          id="8"
                          onClick={() => handleButtonClick("8")}
                        >
                          8
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn-number"
                          id="9"
                          onClick={() => handleButtonClick("9")}
                        >
                          9
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn-operator"
                          id="-"
                          onClick={() => handleButtonClick("-")}
                        >
                          -
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          className="btn-number"
                          id="4"
                          onClick={() => handleButtonClick("4")}
                        >
                          4
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn-number"
                          id="5"
                          onClick={() => handleButtonClick("5")}
                        >
                          5
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn-number"
                          id="6"
                          onClick={() => handleButtonClick("6")}
                        >
                          6
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn-operator"
                          id="+"
                          onClick={() => handleButtonClick("+")}
                        >
                          +
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          className="btn-number"
                          id="1"
                          onClick={() => handleButtonClick("1")}
                        >
                          1
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn-number"
                          id="2"
                          onClick={() => handleButtonClick("2")}
                        >
                          2
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn-number"
                          id="3"
                          onClick={() => handleButtonClick("3")}
                        >
                          3
                        </button>
                      </td>
                      <td rowspan="2">
                        <button
                          className="btn-equal"
                          id="equal"
                          onClick={() => handleButtonClick("equal")}
                        >
                          =
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button
                          className="btn-number"
                          id="0"
                          onClick={() => handleButtonClick("0")}
                        >
                          0
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn-operator"
                          id="("
                          onClick={() => handleButtonClick("(")}
                        >
                          (
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn-operator"
                          id="("
                          onClick={() => handleButtonClick(")")}
                        >
                          )
                        </button>
                      </td>
                    </tr>
                    <tr></tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculadora;