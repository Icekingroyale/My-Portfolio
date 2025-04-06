import React, { useState } from "react";
import hero from "../assets/Hero.jpeg";
import { motion, AnimatePresence } from 'framer-motion'


const Hero = () => {
  const [isHoveredOne, setIsHoveredOne] = useState(false)
  const [isHoveredTwo, setIsHoveredTwo] = useState(false)


  // 02-02-2025
  //TODO - find svg icons that will animate on screen when the word hover is hovered (check the hero design on my X liked page)
  //TODO - Implement oladev's tile scroll on the entire site using react-scroll, react fullpage or any related library _____ Implementation has alreadgy started on a codesandbox test app




  return (
    <section className="bg-[#EFE9D5] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum-dark.png')] flex flex-col md:flex-row gap-6 lg:gap-20 items-center min-h-screen w-full justify-center md:p-10 py-20">
      <article className="text-center md:text-left">
        <h1 className="text-blue-600">Hi I'm Chimaobi</h1>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 text-red-600">Site Under Construction</h2>
        <h2 className="mt-3 max-w-96"> Lorem ipsum dolor sit amet<strong className="text-blue-600 lg:hover:underline"
            onMouseEnter={() => setIsHoveredOne(true)}
            onMouseLeave={() => setIsHoveredOne(false)}>   HOVER
            <AnimatePresence>
              {isHoveredOne && (
                <motion.div
                  key="popup"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-40 right-30 bg-red-600 border p-3 rounded shadow-lg h-40 w-1/3 "
                ><p>🛠 I build cool things</p>
                </motion.div>

              )}
            </AnimatePresence></strong> consectetur adipisicing elit. Dolorem neque impedit facere aspernatur <strong className="text-blue-600 lg:hover:underline"
             onMouseEnter={() => setIsHoveredTwo(true)}
             onMouseLeave={() => setIsHoveredTwo(false)}>
              <AnimatePresence>
               {isHoveredTwo && (
                 <motion.div
                   key="popup"
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.2 }}
                   className="absolute top-100 left-80 bg-green-600 border p-3 rounded shadow-lg h-40 w-1/3 "
                 ><p>🛠 And maintain them</p>
                 </motion.div>
                 
               )}
             </AnimatePresence>HOVER</strong> libero quo minus eveniet tempora porro, fugit quod.
        </h2>
      </article>
      <figure className="w-52 md:w-60">
        <img src={hero} alt="traditional man" className="hover:rotate-6 hover:scale-105 transition-transform duration-300 ease-in-out" />
      </figure>
    </section>
  );
};

export default Hero;
