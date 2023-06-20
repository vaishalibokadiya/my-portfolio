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
    <div className={`${index % 2 ? "flex-row" : "flex-row-reverse"} w-100`}>
      <div className="project-description w-35 flex-1 flex-col">
        <div className="block">
          <h1>{title}</h1>
          <p className="color">{description}</p>
          <div className="techs">
            {techStack.map((tech, index) => {
              return (
                <span className="span" key={index}>
                  {tech}
                </span>
              );
            })}
          </div>
          <div className="links-icon">
            <a className="icon" href={github}>
              <FaGithub />
            </a>
            <a className="icon" href={website}>
              <LuExternalLink />
            </a>
          </div>
        </div>
      </div>
      <div className="w-45">
        <img src={imageUrl} width="90%" height="90%" />
      </div>
    </div>
  );
};

export default Project;
