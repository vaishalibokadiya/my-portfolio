import React from "react";
import logo from "../images/vblogo.png";
import { NavLink, Navbar } from "react-bootstrap";
import "../App.css";

const Header = () => {
  return (
    <div id="header sticky block ">
      <nav className="flex-1  ">
        <div className="flex w-80 mt-10px">
          <a href="#" className="navbar-brand">
            <div className="flex-2">
              <img className="mr-20px" src={logo} height="50px" width="50px" />

              <h2 className="logo">VAISHALI BOKADIYA</h2>
            </div>
          </a>
          <div className="links w-280px">
            <NavLink active="active" className="fw-400" href="home">
              HOME
            </NavLink>
            <NavLink href="#">RESUME</NavLink>
            <NavLink href="#">CONTACT</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
