import React from "react";
import { TypeAnimation } from "react-type-animation";
import img from "../images/1.png";

const About = () => {
  return (
    <div>
      <div className="flex-center mb-20px">
        <div className="w-90">
          <h1 className="text-light-blue">About me</h1>

          <div className="flex">
            <div className="text-dark-grey w-60 sm-w-full">
              <TypeAnimation
                sequence={[
                  "FullStack Web Developer",
                  2000,
                  "Web Designer",
                  2000,
                  "Learner",
                  2000,
                ]}
                speed={50}
                className="text-light-blue"
                wrapper="h3"
                repeat={Infinity}
              />
              <p className="text-justify">
                Hi, I am{" "}
                <span className="text-blue">
                  <b>Vaishali Bokadiya</b>
                </span>
                , a full-stack developer equipped with a deep understanding of
                both front-end and back-end development, I possess a
                comprehensive understanding of the MERN stack. I specialize in
                creating robust and user-friendly solutions that seamlessly
                integrate functionality and aesthetics.
                <br />
                I firmly believe in writing clean, maintainable code that
                adheres to best practices, ensuring long-term scalability and
                extensibility.
                <br />
                <br />
                If you're seeking a skilled MERN developer to bring your web
                application vision to life, I would be delighted to connect.
                Please feel free to reach out to me, and let's discuss how we
                can work together to create impactful solutions.
              </p>
            </div>
            <div className="flex-center sm-img">
              <img src={img} width="450px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
