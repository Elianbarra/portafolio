import React,{ useState, useEffect} from "react";
import "./avion.css";
import { Routes, Route, Link } from "react-router-dom";
import aboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import Home from "./home.jsx";
import Project from "./Projects.jsx";
import AboutMe from "./AboutMe.jsx";
import fondo2 from '../assets/images/Fondo2.png';
import Abion from './Abion.jsx';

function Avion() {
  return (
    <>
      <div className="avion">
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
                      <h1 className="h2">02: Avion 2D</h1>
                    </div>
                    <blockquote>
                      <p>
                        This project is called 2D airplane since it refers to
                        the mythical and classic game from 1942.
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <small>Elian Barra.(coding-dojo)</small>
                        <div style={{ marginTop: "55px" }}>
                          <Abion />
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Project />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/abion" element={<Abion />} />
      </Routes>
    </>
  );
}

export default Avion;