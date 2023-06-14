import { Button } from "react-bootstrap";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="block p-2rem">
      <div className="flex flex-col">
        <h6>Hi, I am</h6>
        <h1>Vaishali Bokadiya</h1>
        <TypeAnimation
          sequence={["Developer", 1000, "Enthusiast", 1000, "Student", 1000]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        ></TypeAnimation>
        <p className="text-center">
          Hi there! I'm Vaishali Bokadiya, a frontend developer who loves
          building beautiful and user-friendly websites. I'm open to new
          opportunities and collaborations, feel free to get in touch.
        </p>
        <Button>My work</Button>
      </div>
    </div>
  );
};

export default Introduction;
