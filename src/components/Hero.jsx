import React from "react";
import hero from "../assets/Hero.jpeg";

const Hero = () => {
  return (
    <div className="h-screen lg:p-3 bg-blue-500 w-full  -my-1">
      <section className="flex flex-col md:flex-row gap-5 items-center">
        <article className="">
          <h1 className="text-red-600 ">Hi I'm Chimaobi</h1>
          <h2 className="text-yellow-300">
            I'm a skilled software engineer specializing in creating efficient
            and user-friendly web applications.
          </h2>
        </article>
        <figure className="">
          <img src={hero} alt="traditional man" className="w-52" />
        </figure>
      </section>
    </div>
  );
};

export default Hero;
