import React from "react";
import { Header, Sidenav, Card } from "../../components/index-component";
import "./Archive.css";

const Archive = () => {
  return (
    <>
      <Sidenav />
      <div className="archive-container">
        <div className="empty-container-message">
          <p>No Notes in Archive</p>
        </div>
      </div>
    </>
  );
};

export { Archive };
