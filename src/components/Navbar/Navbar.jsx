import React from "react";
// import { LiaFilterSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
// import { MdDarkMode } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
// import { FiltersWindow } from "../index-component";
import "./Navbar.css";
import { useAuth } from "../../Context/AuthContext";
import { toast } from "react-toastify";
const Navbar = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const { stateAuth, dispatchAuth } = useAuth();

  // const isNotes = location.pathname === "/notes";
  function getInitials(name) {
    if (!name) {
      return "U";
    }
    const segments = name.trim().split(/\s+/);
    const initials = segments
      .slice(0, 2)
      .map((segment) => segment.charAt(0).toUpperCase())
      .join("");
    return initials || "U";
  }

  function HandleLogout() {
    if (!stateAuth.loggedIn) {
      navigate("/login");
      return;
    }

    dispatchAuth({ type: "USER_LOGOUT", payload: { loggedIn: false } });
    navigate("/");
    toast.success("Successfully logged out", { autoClose: 500 });
  }
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        {/* {isNotes && (
          <li>
            <LiaFilterSolid className="icon filter-icon" />
          </li>
        )} */}

        {stateAuth.loggedIn ? (
          <li className="avatar-list-item">
            <div className="navbar-avatar" title={stateAuth.currentUser || "User"}>
              {getInitials(stateAuth.currentUser)}
            </div>
          </li>
        ) : null}
        <li onClick={() => HandleLogout()}>
          {!stateAuth.loggedIn ? (
            <CiLogin className="icon" />
          ) : (
            <CiLogout className="icon" />
          )}
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
