import React from "react";
import project1 from "../assets/image-hero.jpg";
import project2 from "../assets/form.png";
import project3 from "../../public/icon.jpg";
import project4 from "../assets/Hero.jpeg";

const Projects = () => {
  return (
    <div className="h-screen text-center bg-green-500">
      <h2 className="py-5">Recent Projects</h2>
      <div className="grid justify-center lg:px-40 grid-cols-1 md:grid-cols-2 gap-10 lg:my-10">
        <a href="" className="projects_img_div">
          <img src={project4} alt="" className="projects_img" />

          <p>Porfolio Site</p>
        </a>
        <a
          href="https://icekingroyale.github.io/LoopStudiosLandingPage/"
          target="_blank"
          className="projects_img_div"
        >
          <img src={project1} alt="" className="projects_img" />

          <p>LoopStudio Landing Page</p>
        </a>
        <a
          href="https://icekingroyale.github.io/ChimaobiOkeh/"
          target="_blank"
          className="projects_img_div |lg:mt-20"
        >
          <img src={project3} alt="" className="projects_img" />

          <p>Humble Beginnigns</p>
        </a>
        <a
          href="https://icekingroyale.github.io/contact-form/"
          target="_blank"
          className="projects_img_div"
        >
          <img src={project2} alt="" className="projects_img lg:mt-20" />

          <p>Contact Form</p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
