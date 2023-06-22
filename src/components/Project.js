import React from "react";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

const Project = (props) => {
  const {
    index,
    title,
    subtitle,
    description,
    techStack,
    github,
    website,
    imageUrl,
  } = props.project;
  return (
    <div
      className={`${
        index % 2 ? "flex-row" : "flex-row-rev"
      } text-center flex-center sm-project`}
    >
      <div className="w-50 sm-w-90">
        <div className="">
          <h1 className="text-blue">{title}</h1>
          <p className="text-blue">{description}</p>
          <div className="flex-center text-grey flex-wrap tech-container">
            {techStack.map((tech, index) => {
              return (
                <span className="techs" key={index}>
                  {tech}
                </span>
              );
            })}
          </div>
          <div className="icons">
            <a className="icon text-grey" href={github}>
              <FaGithub />
            </a>
            <a className="icon text-grey" href={website}>
              <LuExternalLink />
            </a>
          </div>
        </div>
      </div>
      <div className="image flex-center mt-ve sm-image">
        <img src={imageUrl} width="90%" height="90%" />
      </div>
    </div>
  );
};

export default Project;
