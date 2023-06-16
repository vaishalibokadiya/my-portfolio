import React from "react";
import Project from "./Project";

import decorshop from "../images/decorshop.png";
import memories from "../images/memories.png";
import foodiehaven from "../images/foodiehaven.jpg";
import dicegame from "../images/dicegame.png";

const pro = [1, 2, 3];
const projects = [
  {
    title: "DecorShop",
    subtitle: "An eccomerce website",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nobis, illo perspiciatis quo corrupti",
    techStack: ["javaScript", "ReactJS", "JWT", "mongodb", "CSS", "bootstrap"],
    github: "https://github.com/vaishalibokadiya/DecorShop",
    website: "https://decorshop.netlify.app/",
    imageUrl:
      "https://res.cloudinary.com/dvtv6edfp/image/upload/v1686824072/decorshop_r1rprv.png",
  },
  {
    title: "Memories App",
    subtitle: "A photo sharing social media app",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nobis, illo perspiciatis quo corrupti",
    techStack: ["javaScript", "ReactJS", "JWT", "CSS"],
    github: "https://github.com/vaishalibokadiya/memories_app",
    website: "https://memories-app-bokadiya.netlify.app/",
    imageUrl:
      "https://res.cloudinary.com/dvtv6edfp/image/upload/v1686824071/memories_j1nhkl.png",
  },
  {
    title: "Dice Game",
    subtitle: "A dice rolling game",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nobis, illo perspiciatis quo corrupti",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/vaishalibokadiya/piggame",
    website: "https://vaishalibokadiya.github.io/piggame/",
    imageUrl:
      "https://res.cloudinary.com/dvtv6edfp/image/upload/v1686824070/dicegame_ef4vh9.png",
  },
  {
    title: "Foodie Haven",
    subtitle: "A restuarant app",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nobis, illo perspiciatis quo corrupti",
    techStack: ["HTML", "CSS"],
    github: "https://github.com/vaishalibokadiya/foodwebsite",
    website: "https://vaishalibokadiya.github.io/foodwebsite/",
    imageUrl:
      "https://res.cloudinary.com/dvtv6edfp/image/upload/v1686824073/foodiehaven_fbefbj.jpg",
  },
];

const Projects = () => {
  return (
    <div>
      {projects.map((project, index) => {
        return (
          <div key={index}>
            <Project project={project} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
