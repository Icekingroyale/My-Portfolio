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
  //TODO - Implement oladev's tile scroll on the entire site using react-scroll, react fullpage or any related library _____ Implementation has alreadgy started on a codesandbox test app



  return (
    <section className="bg-[#EFE9D5] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum-dark.png')] flex flex-col md:flex-row gap-6 lg:gap-20 items-center min-h-screen w-full justify-center md:p-10 py-20">
      <article className="text-center md:text-left">
        <h1 className="text-red-600">Hi I'm Chimaobi</h1>
        <h2 className="mt-3 max-w-96">
          Lorem ipsum dolor sit amet <strong onMouseOver={handleMouseOver} className="text-blue-600 lg:hover:underline">HOVER</strong> consectetur adipisicing elit. Dolorem neque impedit facere aspernatur <strong onMouseOver={handleMouseOver} className="text-blue-600 lg:hover:underline">HOVER</strong> libero quo minus eveniet tempora porro, fugit quod.
        </h2>
      </article>
      <figure className="w-52 md:w-60">
        <img src={hero} alt="traditional man" className="hover:rotate-6 hover:scale-105 transition-transform duration-300 ease-in-out"/>
      </figure>
    </section>
  );
};

export default Hero;
