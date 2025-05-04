import React from "react";
import "./Hero.css";
import F1Image from '../F1.jpg';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(130 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Computer engineering student.", //Error de traduccion con chrome "Cambiar"
    "Web Designer",
    "UI/UX Designer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };


  return (
    <>
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
                03 : AboutMe
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
    
    <div className="hero-full-container background-image-container white-text-container hero-background">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="hero-full-wrapper">
              <div className="text-content">
                
                <h1>
                  Hello
                  <br />
                  <span id="typed-strings">
                    <span>I'm Elian Barra. </span>
                  </span>
                  <br />
                  <span>I'm a {text}</span>
                  
                  <span id="typed"></span>


                </h1>

              </div>              
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Hero;
