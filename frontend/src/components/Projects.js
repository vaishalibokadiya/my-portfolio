import React from "react";
import Project from "./Project";

const projects = [
  {
    index: 0,
    title: "DecorShop",
    subtitle: "An eccomerce website",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nobis, illo perspiciatis quo corrupti",
    techStack: ["javaScript", "ReactJS", "JWT", "mongodb", "CSS", "bootstrap"],
    github: "https://github.com/vaishalibokadiya/DecorShop",
    website: "https://decorshop.netlify.app/",
    imageUrl:
      "https://res.cloudinary.com/dvtv6edfp/image/upload/v1687162973/1_ixdoqd.png",
  },
  {
    index: 1,
    title: "Memories App",
    subtitle: "A photo sharing social media app",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nobis, illo perspiciatis quo corrupti",
    techStack: ["javaScript", "ReactJS", "JWT", "CSS"],
    github: "https://github.com/vaishalibokadiya/memories_app",
    website: "https://memories-app-bokadiya.netlify.app/",
    imageUrl:
      "https://res.cloudinary.com/dvtv6edfp/image/upload/v1687162984/3_nl78ms.png",
  },

  {
    index: 2,
    title: "Foodie Haven",
    subtitle: "A restuarant app",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi nobis, illo perspiciatis quo corrupti",
    techStack: ["HTML", "CSS"],
    github: "https://github.com/vaishalibokadiya/foodwebsite",
    website: "https://vaishalibokadiya.github.io/foodwebsite/",
    imageUrl:
      "https://res.cloudinary.com/dvtv6edfp/image/upload/v1687162982/2_rezw44.png",
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
