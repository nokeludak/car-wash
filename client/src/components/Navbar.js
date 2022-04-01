import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="center">
        <h1 className="navbar-title">Car Wash</h1>
      </div>
      <div className="right">
        <div className="menuItem">REGISTER</div>
        <div className="menuItem">SIGN IN</div>
      </div>
    </div>
  );
};

export default Navbar;
