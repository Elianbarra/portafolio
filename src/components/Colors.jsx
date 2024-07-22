import react from 'react';
import { useState } from 'react';
import "./Colors.css";
import { Link } from "react-router-dom";
import Values from 'values.js'
import FormColor from './FormColor';
import DisplayColors from './DisplayColors';
function Colors(){
    const [list, setList] = useState(new Values('red').all(5));
    console.log(list);






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


        {/* DE ACA PARA ABAJO ES EL CODE GIFT */}

        <div className="bodycolor">
        <div className="color">
                <FormColor setList={setList}/>
                <DisplayColors list={list}/>
            </div>
            </div>
            </div>
            </div>
    )
}
export default Colors;