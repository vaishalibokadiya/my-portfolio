import React from "react";
import { Navbar } from "react-bootstrap";
import "../App.css";

const Header = () => {
  return (
    <>
      <Navbar bg="primary " variant="dark" className="flex block w-full">
        <a href="#" className="navbar-brand">
          Vaishali
          <br />
          Bokadiya
        </a>
        <button>Contact Me</button>
      </Navbar>
    </>
  );
};

export default Header;
