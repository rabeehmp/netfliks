import React from "react";
import "./NavBar/NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="netfliks.png"
        alt=""
      />
      <Link to="/login">
        <img
        className="avatar"
        src="https://i.imgur.com/fXJosY6.jpeg"
        alt="Avatar"
        style={{borderRadius:"3px"}}
        />
      </Link>
      
    </div>
  );
}

export default NavBar;
