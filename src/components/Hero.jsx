import React, { useState } from "react";
import hero from "../assets/Hero.jpeg";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseOver = () => {
    // setIsHovered(!isHovered)
    console.log('Mouse hovered')
  }


  // 02-02-2025
  //TODO - find svg icons that will animate on screen when the word hover is hovered (check the hero design on my X liked page)



  return (
    <section className="flex flex-col md:flex-row gap-6 items-center min-h-screen w-full justify-center md:p-10">
      <article className="text-center md:text-left">
        <h1 className="text-red-600">Hi I'm Chimaobi</h1>
        <h2 className="text-yellow-300 mt-3 max-w-96">
          Lorem ipsum dolor sit amet <strong onMouseOver={handleMouseOver} className="text-red-400 lg:hover:underline">HOVER</strong> consectetur adipisicing elit. Dolorem neque impedit facere aspernatur <strong onMouseOver={handleMouseOver} className="text-red-400 lg:hover:underline">HOVER</strong> libero quo minus eveniet tempora porro, fugit quod.
        </h2>
      </article>
      <figure className="w-52">
        <img src={hero} alt="traditional man" className="hover:rotate-6 hover:scale-105 transition-transform duration-300 ease-in-out"/>
      </figure>
    </section>
  );
};

export default Hero;
