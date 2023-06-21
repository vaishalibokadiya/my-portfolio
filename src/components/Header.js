import React from "react";
import logo from "../images/vblogo.png";
import { NavLink, Navbar } from "react-bootstrap";
import "../App.css";

const Header = () => {
  return (
    <nav id="header" className="flex-center">
      <div className="flex w-80">
        <div>
          <a href="#">
            <div className="flex">
              <img src={logo} height="50px" width="50px" />

              <h2>VAISHALI BOKADIYA</h2>
            </div>
          </a>
        </div>
        <div className="w-30 flex">
          <NavLink className="text-grey" href="home">
            HOME
          </NavLink>
          <NavLink className="text-grey" href="#">
            RESUME
          </NavLink>
          <NavLink className="text-grey" href="#">
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
