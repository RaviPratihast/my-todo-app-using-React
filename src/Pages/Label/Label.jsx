import React from "react";
import { Header, Sidenav, Card } from "../../components/index-component";
import "./Label.css";

const Label = () => {
  return (
    <>
      <Sidenav />
      <div className="label-container">
        <div className="empty-container-message">
          <p>No Notes in Label</p>
        </div>
      </div>
    </>
  );
};

export { Label };
