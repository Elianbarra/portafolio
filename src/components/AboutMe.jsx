import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Contact from "./Contact.jsx";
import Home from "./home.jsx";
import Project from "./Projects.jsx";
import "./Aboutme.css";
import HTMLimage from "../assets/images/HTML5_logo_and_wordmark.svg.png";
import Javaimage from "../assets/images/js-logo.webp.png";
import Pythonimage from "../assets/images/Python_logo_51.svg.png";
import react from "../assets/images/React.gif";
import css from "../assets/images/css.png";
import Java from "../assets/images/java-4.svg";

const AnimatedText = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300); 
  const toRotate = ["03 : About Me"];
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
        setDelta(period); 
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500); 
      }
    };

    const ticker = setTimeout(handleTick, delta);
    return () => clearTimeout(ticker);
  }, [text, delta, isDeleting, loopNum]);

  return <h1 className="h2 animated-text">{text}</h1>;
};

const AboutMe = () => {
  return (
    <div>
      <div className="about-me">
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
            <div className="rowss">
              <div className="col-xs-12">
                <div className="section-container-spacer text-center">

                  <AnimatedText />
                </div>
                <div className="rowss">
                  <div className="col-md-10 col-md-offset-1">
                    <div className="rowss">
                      <div className="col-xs-12 col-md-6">
                        <h3>About Me</h3>
                        <p>
                          <strong>
                            Student with a great interest in learning, starting
                            my first year of the career as a computer engineer,
                            motivated to use my skills as a programmer. I am
                            very focused on learning and positively applying my
                            skills.
                          </strong>
                        </p>
                        <h3>Education</h3>
                        <p>
                          <strong>
                            Secondary education completed in Liceo Arturo Matte
                            Larrain, Professional programming technician
                            (2022-2023) (practice completed secondary
                            education).
                          </strong>
                        </p>
                        <p>
                          <strong>
                            I did the practice in Pulso Escolar in which I
                            learned Python (pandas) to automate functions and
                            thus simplify codes making them automatic in order
                            to upload them to the HubSpot platform, I also
                            learned to use Retool having a basic database
                            knowledge
                          </strong>
                        </p>
                        <p>
                          <strong>
                            I am studying my first year of computer engineering
                            (Duoc UC) to learn and gain more experience in the
                            programming environment, with a great desire to
                            learn new things and implement them when necessary.
                          </strong>
                        </p>
                      </div>
                      <div className="image-container">
                        <h3>Programming languages</h3>
                        <img
                          src={Javaimage}
                          className="img-responsive2"
                          alt="JavaScript logo"
                          width={120}
                          height={100}
                        />
                        <img
                          src={Pythonimage}
                          className="img-responsive2"
                          alt="Python logo"
                          width={120}
                          height={100}
                        />
                        <img
                          src={HTMLimage}
                          className="img-responsive2"
                          alt="HTML5 logo"
                          width={120}
                          height={100}
                        />
                        <img
                          src={react}
                          className="img-responsive2"
                          alt="React logo"
                          width={120}
                          height={120}
                        />
                        <img
                          src={css}
                          className="img-responsive2"
                          alt="css logo"
                          width={120}
                          height={100}
                        />
                        <img
                          src={Java}
                          className="img-responsive2"
                          alt="Java logo"
                          width={120}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
