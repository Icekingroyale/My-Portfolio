import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer h-screen bg-slate-900 text-white">
        <h2 className="py-14 px-5"> SAY HELLO </h2>

        <nav className="flex flex-col gap-5 px-5">
          <a href="mailto:okehchimaobi@gmail.com">Hello@Chimaobi</a>
          <a href="https://wa.link/dfkzgj">+2349034777214</a>
        </nav>

        <nav>
          <ul className="flex flex-col gap-5 mx-2 my-16 px-5">
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
         
        <section>

        </section>

        <p className="px-5 my-20">&copy; Chimaobi Okeh 2025</p>
    </footer>
  );
};

export default Footer;
