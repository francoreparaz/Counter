import React from "react";
import {useState} from "react";
import "./Form.css"

export default function FormCounter(){
    const [state,setState]=useState(0)
    return(
        <div className="Form">
            <form onSubmit={e=>e.preventDefault()}>
                <input 
                className="counter"
                type= "number"
                value={state}
                />
                <button className="botonMas" onClick={e=>{setState(state + 1)}}> + increment</button>
                <button className="botonMenos" onClick={e=>{setState(state - 1)}}> - decrement</button>
            </form>
        </div>
    )
}