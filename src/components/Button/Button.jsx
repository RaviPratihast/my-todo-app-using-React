import React from "react";
import "./Button.css";
const Button = ({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ...restProps
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`base-button ${className}`}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};
export { Button };
