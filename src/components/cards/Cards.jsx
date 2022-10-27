import React from "react";
import "./cards.css"

function Card(props) {

    function handleClick(){
        props.onDelete(props.id);

    }
    return(
        <div className="cards-container">
            {/* <h3>topic of the</h3>
            <p>motion of the sun is going down,what is your name of the cat and do you thing it would go like that</p> */}
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button onClick={handleClick}>X</button>
        </div>
    )

}

export default Card;