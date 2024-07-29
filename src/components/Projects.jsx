import { Routes, Route, Link, } from "react-router-dom";
import AboutMe from "./AboutMe.jsx";
import Contact from "./Contact.jsx";
import Home from "./home.jsx";
import Project from "./Projects.jsx";
import { useState } from "react";
import "./Project.css";
import "./Front-End.css";
import calculatorImage from "../assets/images/Calculadora.png";
import NinjaImage from "../assets/images/Ninja.png";
import LoginImage from "../assets/images/Login.png";
import Pacman from './pacman.jsx';
import AvionGame from "./avion.jsx";
import Calculadora from "./Calculadora.jsx";
import Login from "./Login.jsx";
import Pokedex from "./HomePage.jsx";
import Gift from "./Gift.jsx";
import gif from "../assets/images/gifs.png";
import Colors from "./Colors.jsx";
import colores from "../assets/images/Colores.png";
import Tictactoe from "./tictactoe.jsx";
import tictactoe from "../assets/images/tictactoe.jpg";
const Projects = () => {
const [showLogin, setShowLogin] = useState(false);
const [showCalculadora, setShowCalculadora] = useState(false);
const [showPacman, setShowPacman] = useState(false);
const [showGift, setShowGift] = useState(false);
const [showColors, setShowColors] = useState(false);
const [showTictactoe, setShowTictactoe] = useState(false);
  return (
    <div>
      <div className="projects">
        <div id="site-border-left"></div>
        <div id="site-border-right"></div>
        <div id="site-border-top"></div>
        <div id="site-border-bottom"></div>
        <header>
          <nav className="navbar  navbar-fixed-top navbar-default">
            <div className="container">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar-collapse"
                aria-expanded="false"
              ></button>
              <div className="collapse navbar-collapse" id="navbar-collapse">
                <ul className="nav navbar-nav ">
                  <li>
                    {" "}
                    <Link to="/">01 : Home</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/works">02 : Works</Link>
                  </li>

                  <li>
                    {" "}
                    <Link to="/about">03 : AboutMe</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/contact">04 : Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Project />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pacman" component={Pacman} />
          <Route path="/avion1942" component={AvionGame} />
          <Route path="/calculadora" component={Calculadora} />
          <Route path="/login" component={Login} />
          <Route path="/pokedex" component={Pokedex} />
        </Routes>
        <div className="section-container">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-sm-offset-2 section-container-spacer">
                <div className="text-center">
                  <h1 className="h2">02 : Works</h1>
                  <p>These are some of my projects that I work on.</p>
                </div>
              </div>

              <div className="col-md-12">
                <div
                  id="myCarousel"
                  className="carousel slide projects-carousel"
                >
                  <div className="carousel-inner">
                    <div className="item active">
                      <div className="row">
                        <div className="col-sm-4">
                          <Link
                            to="/pacman"
                            title=""
                            className="black-image-project-hover"
                          >
                            <img
                              src={NinjaImage}
                              alt="Work 1"
                              className="img-responsive"
                              onClick={() => setShowPacman(true)}
                            />
                          </Link>
                          <div className="card-container card-container-lg">
                            <h4>01/06</h4>
                            <h3>Pacman</h3>
                            <p>
                            The classic Pacman game where you have to eat all the points.
                            </p>
                            {showPacman && <Pacman />}
                          </div>
                        </div>
                        <div className="col-sm-4">
                        <Link
                            to="/login"
                            title=""
                            className="black-image-project-hover"
                          >
                            <img
                              src={LoginImage}
                              alt="Work 1"
                              className="img-responsive"
                              onClick={() => setShowLogin(true)}
                            />
                          </Link>

                        <div className="card-container card-container-lg">
                          <h4>02/06</h4>
                          <h3>Login</h3>
                          <p>Login to be able to implement it to some API</p>
                          {/* <Link to="/login" className="btn btn-default">
                            Ver
                          </Link> */}
                          {showLogin && <Login />}
                        </div>
                        </div>
                        <div className="col-sm-4">
                        <Link
                            to="/calculadora"
                            title=""
                            className="black-image-project-hover"
                          >
                            <img
                              src={calculatorImage}
                              alt="Work 1"
                              className="img-responsive"
                              onClick={() => setShowCalculadora(true)}
                            />
                          </Link>
                          <div className="card-container card-container-lg">
                            <h4>03/06</h4>
                            <h3>Calculadora</h3>
                            <p>Basic calculator with CSS</p>
                            {/* <Link to="/calculadora" className="btn btn-default">
                              Ver
                            </Link> */}
                            {showCalculadora && <Calculadora />}
                          </div>
                        </div>
                      </div>
                      
                     



                        <div className="col-sm-4">
                          
                        <Link
                            to="/gift"
                            title=""
                            className="black-image-project-hover"
                          >
                            <img
                              src={gif}
                              alt="Work 1"
                              className="img-responsive"
                              onClick={() => setShowCalculadora(true)}
                            />
                          </Link>
                          
                          
                          
          
                          <div className="card-container card-container-lg">
                            <h4>04/06</h4>
                            <h3>Gifs</h3>
                            <p>GIF search engine with API.</p>
                            {/* <Link to="/gift" className="btn btn-default">
                              Ver
                            </Link> */}
                            {showGift && <Gift />}
                          </div>
                        </div>


                        <div className="col-sm-4">
                        <Link
                            to="/colors"
                            title=""
                            className="black-image-project-hover"
                          >
                            <img
                              src={colores}
                              alt="Work 1"
                              className="img-responsive"
                              onClick={() => setShowCalculadora(true)}
                            />
                          </Link>
                            <div className="card-container card-container-lg">
                            <h4>05/06</h4>
                            <h3>Colors</h3>
                            <p>Colors search engine with API.</p>
                            {/* <Link to="/colors" className="btn btn-default">
                              Ver
                            </Link> */}
                            {showColors && <Colors />}
                          </div>
                        </div>






                          {/* GAME TIC TAC TOE */}
                        <div className="col-sm-4">
                          
                          <Link
                              to="/tictactoe"
                              title=""
                              className="black-image-project-hover"
                            >
                              <img
                                src={tictactoe}
                                alt="Work 1"
                                className="img-responsive"
                                onClick={() => setShowTictactoe(true)}
                              />
                            </Link>
                            
                            
                            
            
                            <div className="card-container card-container-lg">
                              <h4>06/06</h4>
                              <h3>Tic Tac Toe</h3>
                              <p>Tic Tac Toe game made with react.jsx</p>
                              {/* <Link to="/gift" className="btn btn-default">
                                Ver
                              </Link> */}
                              {showTictactoe && <Tictactoe />}
                            </div>
                          </div>





                          </div>
                        </div>
                        
                    </div>



                          




                    <div className="Comingsoon">

                    NEW PROJECTS COMING SOON...</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
  );
};

export default Projects;
