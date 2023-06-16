import { Button } from "react-bootstrap";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="block mtb p-2rem">
      <div className="flex flex-col">
        <div className="intro">
          <h1 className="other-lines ">Hello! I am Vaishali,</h1>
          <h1 className="center-line mt-ve">a Front-end Developer</h1>
          <h1 className="other-lines mt-ve">based in India.</h1>
        </div>

        <p className="text-center text-grey fw-600 fs-10px ">
          Welcome to my world
        </p>
      </div>
    </div>
  );
};

export default Introduction;
