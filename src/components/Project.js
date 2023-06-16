import React from "react";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

const Project = (props) => {
  const { title, subtitle, description, techStack, github, website, imageUrl } =
    props.project;
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
        <ul>
          {techStack.map((tech, index) => {
            return <li key={index}>{tech}</li>;
          })}
        </ul>
        <a href={github}>
          <FaGithub />
        </a>
        <a href={website}>
          <LuExternalLink />
        </a>
      </div>
      <div>
        <img src={imageUrl} height="500rem" width="1000rem" />
      </div>
    </div>
  );
};

export default Project;
