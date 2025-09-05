import React from "react";
import { NavLink } from "react-router-dom";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import X from "../assets/x.svg";
import { ScrollAnimation } from "./animations/ScrollAnimation";




// 03-02-2025
// TODO - fix the issues with the inverted social icons and the menuLink background color
//  replace the inverted svg with a white one or change to a new background that'll match the original black




const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="min-h-screen text-white footer bg-[#27445D] bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')]">
      <h2 className="px-5 py-14"> SAY HELLO </h2>

      <ScrollAnimation>

        <nav className="flex flex-col gap-5 px-5 w-fit">
          <a href="mailto:okehchimaobi@gmail.com">okehchimaobi@gmail.com</a>
          <a href="https://wa.link/dfkzgj">+2349034777214</a>
        </nav>

      </ScrollAnimation>

      <ScrollAnimation>

        <nav>
          <ul className="flex flex-col px-5 mx-2 my-16 gap-5 w-fit">
            <NavLink to="/about">
              <li>About</li>{" "}
            </NavLink>
            <NavLink to="/contact">
              {" "}
              <li>Contact</li>
            </NavLink>
            <NavLink to="/resume">
              <li>Resume</li>
            </NavLink>
          </ul>
        </nav>

        <hr className="mx-5 my-20" />
      </ScrollAnimation>

      <ScrollAnimation>

        <section className="flex flex-col-reverse gap-10 md:flex-row md:justify-between">
          <p className="px-5 mx-auto md:mx-0">&copy; Chimaobi Okeh {year}</p>
          <figure className="gap-16 px-5 flex">
            <a href="https://www.linkedin.com/in/chimaobiokeh" target="_blank">
              <img src={linkedin} alt="linkedin logo" className="h-10 invert" />
            </a>
            <a href="https://github.com/Icekingroyale" target="_blank">
              <img src={github} alt="github logo" className="h-10 invert" />
            </a>
            <a href="https://x.com/Icekingroyale" target="_blank">
              <img src={X} alt="X logo" className="h-10 invert" />
            </a>
            <a href="https://www.facebook.com/Icekingroyale/" target="_blank">
              <img src={facebook} alt="facebook logo" className="h-10 invert" />
            </a>
          </figure>
        </section>
      </ScrollAnimation>
    </footer>
  );
};

export default Footer;
