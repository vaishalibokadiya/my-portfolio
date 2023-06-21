import { Button } from "react-bootstrap";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="h-82vh flex-center m-ve">
      <div className="text-center flex-1 h-100">
        <div className="intro">
          <h1 className="text-blue m-0">Hello! I am Vaishali,</h1>
          <h1 className="text-light-blue m-0">a Front-end Developer</h1>
          <h1 className="text-blue m-0">based in India.</h1>
        </div>

        <p className="text-grey m-2rem text-large">Welcome to my world</p>
      </div>
    </div>
  );
};

export default Introduction;
