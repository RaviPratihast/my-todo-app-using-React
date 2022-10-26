import React from "react";
import "./Input.css"

function Input(){
    return <div className="input-container">
        <input type="text" name="title" placeholder="Title"/>
        <textarea type="text" name="content" placeholder="Content..."/>
        <button>Add</button>
    </div>
}

export default Input;