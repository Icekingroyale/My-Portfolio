import React from "react";
import Hero from "../assets/Hero.jpeg";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="w-full h-screen bg-blue-500 ">
      <div className="flex">
        <img src={logo} alt="site logo" className="sticky h-16" />
      </div>
      <div className="grid gap-6 main-hero-div">
        <div className="hero-text w-96">
          <h1 className="text-red-600 text-7xl text">Hi I'm Chimaobi</h1>
          <p className="text-3xl text-yellow-300">
            I'm a skilled software engineer specializing in creating fficient
            and user-friendly web applications.
          </p>
        </div>
        <figure className="">
          <img src={Hero} alt="traditional man" className="h-96 rounded" />
        </figure>
      </div>
    </div>
  );
};

export default Header;
