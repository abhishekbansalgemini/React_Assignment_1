import React, { useState } from "react";
import './input.css'

const Input = () => {
    const [inp_val, nextVal] = useState("");
    const [text_arr, updated_text_arr] = useState([]);
    const [err, upd_err] = useState("");

    const inputValue = (event) => {
        nextVal(event.target.value);
    }

    const show = (event) => {
        event.preventDefault();
        if (inp_val.trim() !== '') {
            text_arr.push(inp_val)
            updated_text_arr(text_arr);
            nextVal("");
            upd_err("");
        }
        else {
            upd_err("Please enter some text")
        }
    }
    return (
        <>
            <br></br>
            <h3>Second Task</h3>
            <div className="btn">
                <form onSubmit={show}>
                    <input onChange={inputValue} type="text" placeholder="Enter the text" value={inp_val} />
                    <div className="btn"> <small className="err">{err}</small></div>
                    <div className="btn"><button type="Submit">Add</button></div> <br></br>

                </form>

            </div>
            <div className="btn">
                <ul>
                    {text_arr.map((text, index) => (
                        <li>
                            <span key={index}
                                style={{ backgroundColor: (index + 1) % 5 === 0 ? 'blue' : 'inherit' }}
                            >
                                {text}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <hr></hr>
        </>
    )
}

export default Input;