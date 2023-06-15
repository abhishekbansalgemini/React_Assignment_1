import React, { useState } from "react";
import './Toggle.css'

const Toggle = () => {
    const [visible, setVisible] = useState(false);
    const [para, showpara] = useState("");
    const [count, incCount] = useState(0);
    const Paragraph = "Hooks solve a wide variety of seemingly unconnected problems in React that we’ve encountered over five years of writing and maintaining tens of thousands of components. Whether you’re learning React, use it daily, or even prefer a different library with a similar component model, you might recognize some of these problems."
    const show = () => {
        if (visible) {
            showpara("");
        } else {
            showpara(Paragraph);
        }
        setVisible(!visible);
        incCount(count + 1);
    }
    return (
        <>
            <h3>First Task</h3>
            <div className="btn">
                <strong>Click On The Button To Know Something About Hooks...</strong> </div>
            <div className="btn">
            <button onClick={show}> Hooks </button>
            </div>
            
            <div className="btn"><p> {para} </p></div>
            <div className="btn"><strong>No. of Times the above button Clicked: </strong> <i>{count}</i></div> <br></br> <br></br>
            <hr></hr>
        </>
    )
}

export default Toggle;