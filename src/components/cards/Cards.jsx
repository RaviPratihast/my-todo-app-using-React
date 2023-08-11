import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import "./cards.css";

function Card(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="cards-container">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Card;
