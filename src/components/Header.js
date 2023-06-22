import React from "react";
import logo from "../images/vblogo.png";
import { NavLink, Navbar } from "react-bootstrap";
import "../App.css";

const Header = () => {
  return (
    <nav id="header" className="flex-center letter-spacing">
      <div className="flex w-80">
        <div>
          <a href="#">
            <div className="flex">
              <img className="logo" src={logo} height="50px" width="50px" />

              <h2 className="text-blue brand">VAISHALI BOKADIYA</h2>
            </div>
          </a>
        </div>
        <div className="w-30 flex fw-400 header-links">
          <NavLink className="text-blue" href="#intro">
            HOME
          </NavLink>
          <NavLink
            className="text-grey"
            href="https://drive.google.com/file/d/1g9evJzBO5vMlPxlxoOndXaQfhvDx24pA/view"
          >
            RESUME
          </NavLink>
          <NavLink className="text-grey" href="#contact">
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
