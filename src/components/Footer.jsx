import React from "react";
import { NavLink } from "react-router-dom";
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import X from "../assets/x.svg";


const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="h-screen text-white footer bg-slate-900">
      <h2 className="px-5 py-14"> SAY HELLO </h2>

      <nav className="flex flex-col gap-5 px-5 w-fit">
        <a href="mailto:okehchimaobi@outlook.com">okehchimaobi@outlook.com</a>
        <a href="https://wa.link/dfkzgj">+2349034777214</a>
      </nav>

      <nav>
        <ul className="flex flex-col px-5 mx-2 my-16 gp-5 w-fit">
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

      <section className="flex flex-row justify-between">
        <p className="px-5">&copy; Chimaobi Okeh {year}</p>
        <figure className="hidden gap-6 px-5 sm:flex">
         <a href="https://www.linkedin.com/in/chimaobi-okeh" target="_blank">
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
    </footer>
  );
};

export default Footer;
