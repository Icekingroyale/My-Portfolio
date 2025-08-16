import React, { useState } from "react";
import hero from "../assets/Hero.jpeg";
import { motion, AnimatePresence } from 'framer-motion'
import {
  popupInitial,
  popupAnimate,
  popupExit,
} from "./animations/HeroAnimations"
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
                    className="absolute top-10 left-10 bg-red-600 border p-3 rounded shadow-lg text-white"
                  >
                    <p>🛠 I build cool things</p>
                  </motion.div>
                  <motion.div
                    key="popup2"
                    initial={popupInitial}
                    animate={popupAnimate(isTapped)}
                    exit={popupExit}
                    className="absolute top-80 right-10 bg-yellow-600 border p-3 rounded shadow-lg text-white"
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
                      className="absolute top-10 right-10 bg-blue-600 border p-3 rounded shadow-lg text-white"
                    ><p>🛠 I build cool stuffs</p>
                    </motion.div>
                    <motion.div
                      key="popup1"
                      initial={popupInitial}
                      animate={popupAnimate(isTapped)}
                      exit={popupExit}
                      className="absolute left-10 lg:top-96 bg-green-600 border p-3 rounded shadow-lg text-white"
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
          <motion.div
            whileHover={{ rotate: 6, scale: 1.05 }}
            whileTap={{ 
              scale: 0.95,
              transition: { 
                type: "spring",
                stiffness: 400,
                damping: 10
              }
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <img 
              src={hero} 
              alt="traditional man" 
              className="w-full h-auto"
            />
          </motion.div>
        </ScrollAnimation>
      </figure>
    </section>
  );
};

export default Hero;
