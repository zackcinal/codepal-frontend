import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";


function Navbar({ user, handleLogout, profile }) {
  const navigate = useNavigate();

  const navbarBtn = () => {

    if (user) {
      return (
        <>
            <button onClick={() =>  navigate(`/userprofile/${profile.id}`)}className="navbarBtn">Welcome {user.first_name}</button>
          <button onClick={handleLogout} className="navbarBtn">
            Sign Out
          </button>
        </>
      );
    } else {
      return (
        <>
          <Link to="/signin">
            <button className="navbarBtn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="navbarBtn">Sign Up</button>
          </Link>
        </>
      );
    }
  };
  return (
    <div className="navbarContainer">
      <button
        onClick={() => {
          navigate('/home');
        }}
        className="navbarBtn"
      >
        code.Pal
      </button>
      <div className="navbarOptions">
        {navbarBtn()}
        <Link to="/help">
          <button className="navbarBtn">Help</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
