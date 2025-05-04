import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact.jsx";
import Home from "./home.jsx";
import Project from "./Projects.jsx";
import AboutMe from "./AboutMe.jsx";
import "./poke.css";

export const HomePage = () => {
  return (
    <>
      <div className="Page">
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
            </div>

            </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Project />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}



export default HomePage;
