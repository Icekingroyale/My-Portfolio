import React from "react";
import project1 from "../assets/image-hero.jpg";
import project2 from "../assets/fb.png";
import project3 from "../assets/icon.jpg";
import project4 from "../assets/Hero.jpeg";
import { ScrollAnimation } from "./animations/ScrollAnimation";
import { NavLink } from "react-router-dom";



const Projects = ({ }) => {

  //02-02-2025
  //TODO - Add a button to view more projects
  //TODO - Use an eye icon and a fragment tag icon to link to the project code and live app respectively


  return (
    <div className="bg-[#71BBB2] bg-[url('https://www.transparenttextures.com/patterns/diagonal-waves.png')] min-h-screen text-center place-content-center place-items-center">
      <h2 className="py-5 mb-5">Recent Projects</h2>
      <div className="grid justify-center grid-cols-1 lg:grid-cols-2 gap-8 md:gap-24 lg:my-10 mb-14">
        <ScrollAnimation className="projects_img_div">

          <a
            href="https://fortune-block.netlify.app/"
            target="_blank"

          >
            <img src={project2} alt="" className="projects_img" />

            <p>Fortune Block</p>
          </a>
        </ScrollAnimation>
        <ScrollAnimation className="projects_img_div">

          <a href="" className="projects_img">
            <img src={project4} alt="" className="projects_img" />

            <p>Porfolio Site</p>
          </a>
        </ScrollAnimation>
        <ScrollAnimation className="projects_img_div" >

          <a
            href="https://icekingroyale.github.io/LoopStudiosLandingPage/"
            target="_blank"
            className="projects_img_div"
          >
            <img src={project1} alt="" className="projects_img" />

            <p>LoopStudio Landing Page</p>

          </a>
        </ScrollAnimation>
        <ScrollAnimation className="projects_img_div">

          <a
            href="https://icekingroyale.github.io/ChimaobiOkeh/"
            target="_blank"
            className="projects_img_div"
          >
            <img src={project3} alt="" className="projects_img" />

            <p>Humble Beginnigns</p>
          </a>
        </ScrollAnimation>
      </div>
      <NavLink to="/more-projects" className="bg-gray-300 hover:bg-gray-600 hover:text-white rounded-lg px-5 py-2 mb-5 md:mt-10 ">
        SEE MORE
      </NavLink>
    </div>
  );
};

export default Projects;
