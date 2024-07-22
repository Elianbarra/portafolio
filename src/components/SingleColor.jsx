import { useState } from "react";
import Clip from "/clipTransparent.png"

const SingleColor = ({ hexColor }) => {

    const [copy, setCopy] = useState(false);

    const handleCopy = (color) => () => {
        const colorNew = `#${color}`;
        navigator.clipboard.writeText(colorNew);
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 1500);
    }


    return (
        <div className="single-card" style={{ backgroundColor: `#${hexColor}` }}>
            <div className="Colorcontent">
                <p>#{ hexColor }</p>
                <button onClick={ handleCopy (hexColor)}>
                     <img src={Clip} alt="Copy" />
                </button>
                </div>
                {copy && <p className="copy">Copied!</p>}
            </div>
    );
}
export default SingleColor;
