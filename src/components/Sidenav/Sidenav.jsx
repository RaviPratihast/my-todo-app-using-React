import React from "react";
import { NavLink } from "react-router-dom";
import { GrNotes } from "react-icons/gr";
// import { MdLabel } from "react-icons/md";
// import { IoArchive } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";

import "./Sidenav.css";
const Sidenav = () => {
  return (
    <div className="side-nav-container">
      <NavLink to="/notes" className="nav-link-routes">
        <li>
          {/* i will change this to landing page */}
          <GrNotes /> Notes
        </li>
      </NavLink>

      {/* <NavLink to="/label" className="nav-link-routes">
        <li>
          <MdLabel />
          Label
        </li>
      </NavLink> */}
      {/* <NavLink to="/archive" className="nav-link-routes">
        <li>
          <IoArchive />
          Archive
        </li>
      </NavLink> */}
      <NavLink to="/bin" className="nav-link-routes">
        <li>
          <RiDeleteBinFill />
          Bin
        </li>
      </NavLink>
    </div>
  );
};

export { Sidenav };
