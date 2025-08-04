import React, { useState } from "react";
import hero from "../assets/Hero.jpeg";
import { motion, AnimatePresence } from 'framer-motion'
import {
  popupInitial,
  popupAnimate,
  popupExit,
} from "./animations/Hero"
import { ScrollAnimation } from "./animations/ScrollAnimation";

const Hero = () => {
  const [isHoveredOne, setIsHoveredOne] = useState(false)
  const [isHoveredTwo, setIsHoveredTwo] = useState(false)
  const [isTapped, setIsTapped] = useState(false)


  const handleTap = () => {
    setIsTapped(true)
    setTimeout(() => setIsTapped(false), 300)
  }


  // 02-02-2025
  //TODO - find svg icons that will animate on screen when the word hover is hovered (check the hero design on my X liked page)
  //TODO - Implement oladev's tile scroll on the entire site using react-scroll, react fullpage or any related library _____ Implementation has alreadgy started on a codesandbox test app




  return (
    <section className="bg-[#EFE9D5] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum-dark.png')] flex flex-col md:flex-row gap-6 lg:gap-20 items-center min-h-screen w-full justify-center md:p-10 py-20 overflow-x-hidden">
      <ScrollAnimation>

        <article className="text-center md:text-left">
          <h1 className="text-blue-600">Hi I'm Chimaobi</h1>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 text-red-600">I'm Software Engineer</h2>
          <h2 className="mt-3 max-w-96"> I build simple, effective software solutions that solve real problems <strong className="text-blue-600 lg:hover:underline"
            onMouseEnter={() => setIsHoveredOne(true)}
            onMouseLeave={() => {
              setIsHoveredOne(false)
              setIsTapped(false)
            }
            }
            onClick={handleTap}
          >   HOVER
            <AnimatePresence>
              {isHoveredOne && (
                <>
                  <motion.div
                    key="popup1"
                    initial={popupInitial}
                    animate={popupAnimate(isTapped)}
                    exit={popupExit}
                    className="absolute top-10 left-10 bg-red-600 border p-3 rounded shadow-lg h-40 w-1/3 text-white"
                  >
                    <p>🛠 I build cool things</p>
                  </motion.div>
                  <motion.div
                    key="popup2"
                    initial={popupInitial}
                    animate={popupAnimate(isTapped)}
                    exit={popupExit}
                    className="absolute top-80 right-10 bg-yellow-600 border p-3 rounded shadow-lg h-40 w-1/3 text-white"
                  ><p>🛠 And maintain them</p>
                  </motion.div>
                </>


              )}
            </AnimatePresence></strong> for businesses, students, and everyday users. <strong className="text-blue-600 lg:hover:underline"
              onMouseEnter={() => setIsHoveredTwo(true)}
              onMouseLeave={() => {
                setIsHoveredTwo(false)
                setIsTapped(false)
              }
              }
              onClick={handleTap}
            >
              <AnimatePresence>
                {isHoveredTwo && (
                  <>
                    <motion.div
                      key="popup1"
                      initial={popupInitial}
                      animate={popupAnimate(isTapped)}
                      exit={popupExit}
                      className="absolute top-10 right-10 bg-blue-600 border p-3 rounded shadow-lg h-40 w-1/3 text-white"
                    ><p>🛠 I build cool stuffs</p>
                    </motion.div>
                    <motion.div
                      key="popup1"
                      initial={popupInitial}
                      animate={popupAnimate(isTapped)}
                      exit={popupExit}
                      className="absolute bottom-10 left-10 lg:top-96 bg-green-600 border p-3 rounded shadow-lg h-40 w-1/3 text-white"
                    ><p>🛠 And maintain them</p>
                    </motion.div>

                  </>
                )}
              </AnimatePresence>HOVER</strong> Let's get to work!
          </h2>
        </article>
      </ScrollAnimation>


      {/* // 06-04-2025 */}
      {/* //TODO - replace image hover animation with framer */}

      <figure className="w-52 md:w-60">
        <ScrollAnimation>

          <img src={hero} alt="traditional man" className="hover:rotate-6 hover:scale-105 transition-transform duration-300 ease-in-out" />
        </ScrollAnimation>
      </figure>
    </section>
  );
};

export default Hero;
