import React from "react";
import "./Button.css";
const Button = ({ children, className, onClick }) => {
  return (
    <button className={`base-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
export { Button };
