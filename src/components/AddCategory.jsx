import React from "react";
import { useState } from "react";
const AddCategory = ({ setCategory}) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);


    const searchGif = e => {
        e.preventDefault();
        if(value === ""){
            setError(true);
            return;
        }
        setError(false);
        setCategory(value);
        setValue("");
        console.log("enter Form")
    }
    return (
        <>
        <div className="gift">
        <div className="gift_container">
            <form onSubmit={searchGif}>
                <input type="text" placeholder="search..." 
                onChange={e => setValue(e.target.value)}
                value = {value}
                />
            </form>
            { error ? <p className="error">El campo no puede estar vacio...</p> : ""}
        </div>
        </div>
        </>
    );
    }
export default AddCategory;