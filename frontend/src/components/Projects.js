import React from "react";
import Project from "./Project";

const projects = [
  {
    index: 0,
    title: "DecorShop",
    description:
      "DecorShop is an fully functional eccomerce website, where people can buy home decor and pay using paypal. It also has admin panel to manage products, orders and accounts.",
    techStack: ["ReactJS", "JWT", "mongodb", "bootstrap", "paypal"],
    github: "https://github.com/vaishalibokadiya/DecorShop",
    website: "https://decorshop.netlify.app/",
    imageUrl:
      "https://res.cloudinary.com/dvtv6edfp/image/upload/v1687162973/1_ixdoqd.png",
  },
  {
    index: 1,
    title: "Memories App",
    description:
      "Memories App is a photo sharing social media website, where anyone can view, create, comment and like a post.",
    techStack: ["javaScript", "ReactJS", "JWT", "CSS"],
    github: "https://github.com/vaishalibokadiya/memories_app",
    website: "https://memories-app-bokadiya.netlify.app/",
    imageUrl:
      "https://res.cloudinary.com/dvtv6edfp/image/upload/v1687162984/3_nl78ms.png",
  },

  {
    index: 2,
    title: "Foodie Haven",
    description:
      "Foodie Haven is a static website, designed for a restuarant. It includes menu, contact and reviews of the restuarant.",
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
      <div className="flex-center">
        <div className="w-90">
          <h1 className="text-light-blue mb-0">My Projects</h1>
        </div>
      </div>
      <div className="">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <Project project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
