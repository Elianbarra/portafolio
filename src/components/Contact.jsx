import  { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AboutMe from "./AboutMe.jsx";
import Home from "./home.jsx";
import Project from "./Projects.jsx";
import "./Contact.css";

export const Contact = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300); // Velocidad inicial
  const toRotate = ["CONTACT ME"];
  const period = 1500;

  useEffect(() => {
    const handleTick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(85);
      } else {
        setDelta(150 - Math.random() * 100);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period); // Pausa antes de borrar
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500); // Pausa antes de escribir
      }
    };

    const ticker = setTimeout(handleTick, delta);
    return () => clearTimeout(ticker);
  }, [text, delta, isDeleting, loopNum]);

  return (
    <h1 className="h2 animated-text">{text}</h1>
  );
};

const Contacts = () => {
  return (
    <div>
      <div className="contact">
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

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Project />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <div className="section-container">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="section-container-spacer text-center">
                  <Contact />
                </div>

                <div
                  className="contact-container"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <ul className="list-unstyled">
                    <li className="icon-text">
                      <span className="fa-icon">
                        <i className="fa fa-at" aria-hidden="true"></i>
                      </span>
                      <b>elianbarra@gmail.com</b>
                    </li>
                    <li className="icon-text">
                      <span className="fa-icon">
                        <i
                          className="fa fa-map-marker"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <b>Las amapolas #9628 La florida, Santiago, Chile</b>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
