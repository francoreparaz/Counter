import React from "react";
import {useState} from "react";
import "./Form.css"
import style from "react"

export default function FormCounter(){
    const [state,setState]=useState(0)
    if(state<0){
       var elem = document.getElementById("1")
       elem.style.color="red"
    }
    if(state>0){
        var elem = document.getElementById("1")
           elem.style.color="green"
    }
        
    
    return(
        <div className="Form">
            <form key="form" onSubmit={e=>e.preventDefault()}>
                <input 
                key="input"
                id="1"
                className="counter"
                type= "number"
                value={state}
                />
                <button key="button" className="botonMas" onClick={e=>{setState(state + 1)}}> + increment</button>
                <button  key="button2"  className="botonMenos" onClick={e=>{setState(state - 1)}}> - decrement</button>
            </form>
        </div>
    )
}