import React, { useState } from "react";
import hero from "../assets/Hero.jpg";
import { motion, AnimatePresence } from 'framer-motion';
// Import the new set of 8 icons
import { FaReact, FaBootstrap, FaWordpress, FaLaravel } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiGit, SiExpress } from 'react-icons/si';

import {
  popupInitial,
  popupAnimate,
  popupExit,
  imageAnimationProps
} from "./animations/HeroAnimations";
import { ScrollAnimation } from "./animations/ScrollAnimation";

// --- Icon Data Arrays for Cleaner JSX ---
const iconSetOne = [
  { Icon: FaReact, position: 'absolute top-[15%] left-[10%] md:top-[20%] md:left-[25%]', color: 'bg-sky-500' },
  { Icon: SiExpress, position: 'absolute top-[15%] right-[10%] md:top-[20%] md:right-[25%]', color: 'bg-gray-800' },
  { Icon: FaWordpress, position: 'absolute bottom-[15%] left-[10%] md:bottom-[20%] md:left-[25%]', color: 'bg-gray-500' },
  { Icon: SiTailwindcss, position: 'absolute bottom-[15%] right-[10%] md:bottom-[20%] md:right-[25%]', color: 'bg-cyan-500' },
];

const iconSetTwo = [
  { Icon: FaBootstrap, position: 'absolute top-[30%] left-[5%] md:top-[35%] md:left-[15%]', color: 'bg-purple-600' },
  { Icon: SiMysql, position: 'absolute top-[30%] right-[5%] md:top-[35%] md:right-[15%]', color: 'bg-blue-600' },
  { Icon: FaLaravel,position: 'absolute bottom-[30%] left-[5%] md:bottom-[35%] md:left-[15%]', color: 'text-[#FF2D20] bg-white'},
  { Icon: SiGit, position: 'absolute bottom-[30%] right-[5%] md:bottom-[35%] md:right-[15%]', color: 'bg-red-500' },
];

const Hero = () => {
  const [isHoveredOne, setIsHoveredOne] = useState(false);
  const [isHoveredTwo, setIsHoveredTwo] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  // This handler triggers the bounce animation on all visible icons
  const handleTap = () => {
    setIsTapped(true);
    // Reset the tapped state after the animation duration
    setTimeout(() => setIsTapped(false), 500);
  };

  return (
    // The parent section needs 'relative' for absolute positioning of children
    <section className="relative bg-[#0f7481] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum-dark.png')] flex flex-col md:flex-row gap-6 lg:gap-20 items-center min-h-screen w-full justify-center md:p-10 py-20 overflow-hidden">

      {/* --- ICONS FOR FIRST HOVER --- */}
      <AnimatePresence>
        {isHoveredOne && iconSetOne.map(({ Icon, position, color }, index) => (
          <motion.div
            key={`icon-set-one-${index}`}
            initial={popupInitial}
            animate={popupAnimate(isTapped)}
            exit={popupExit}
            className={`${position} ${color} p-3 md:p-4 rounded-full shadow-lg text-white text-3xl md:text-4xl z-30`}
          >
            <Icon />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* --- ICONS FOR SECOND HOVER --- */}
      <AnimatePresence>
        {isHoveredTwo && iconSetTwo.map(({ Icon, position, color }, index) => (
          <motion.div
            key={`icon-set-two-${index}`}
            initial={popupInitial}
            animate={popupAnimate(isTapped)}
            exit={popupExit}
            className={`${position} ${color} p-3 md:p-4 rounded-full shadow-lg text-white text-3xl md:text-4xl z-30`}
          >
            <Icon />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* --- MAIN CONTENT --- */}
      <ScrollAnimation>
        <article className="text-center md:text-left z-20">
          <h1 className="">Hi I'm Chimaobi</h1>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-blue-300">I'm a Software Engineer</h2>
          <h2 className="mt-3 max-w-lg text-white"> {/* Increased max-width for better text flow */}
            I build simple, effective  <strong className="text-[#fa8fe8] lg:hover:underline cursor-pointer"
              onMouseEnter={() => setIsHoveredOne(true)}
              onMouseLeave={() => setIsHoveredOne(false)}
              onClick={handleTap}
            > software solutions </strong>
            that solve real problems for businesses, students, and <strong className="text-[#fa8fe8] lg:hover:underline cursor-pointer"
              onMouseEnter={() => setIsHoveredTwo(true)}
              onMouseLeave={() => setIsHoveredTwo(false)}
              onClick={handleTap}
            > everyday </strong>
            users. Let's get to work!!
          </h2>
        </article>
      </ScrollAnimation>

      <figure className="lg:w-[27%] w-2/3 z-10">
        <ScrollAnimation>
          <motion.div {...imageAnimationProps}>
            <img
              src={hero}
              alt="traditional man"
              className="w-full h-auto rounded-lg shadow-xl" // Added some style to the image
            />
          </motion.div>
        </ScrollAnimation>
      </figure>
    </section>
  );
};

export default Hero;
