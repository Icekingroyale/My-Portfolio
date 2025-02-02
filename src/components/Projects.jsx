import React from "react";
import project1 from "../assets/image-hero.jpg";
import project2 from "../assets/form.png";
import project3 from "../../public/icon.jpg";
import project4 from "../assets/Hero.jpeg";

const Projects = () => {
  return (

    <div className="min-h-screen text-center place-content-center place-items-center">
      <h2 className="py-5">Recent Projects</h2>
      <div className="grid justify-center grid-cols-1 lg:grid-cols-2 gap-8 md:gap-24 lg:my-10">
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
          <img src={project2} alt="" className="projects_img" />

          <p>Contact Form</p>
        </a>
      </div>
    </div>
  );
};

export default Projects;
