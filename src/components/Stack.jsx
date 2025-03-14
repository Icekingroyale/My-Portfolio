import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useMediaQuery } from "react-responsive"; //to conditional render the Carousel for mobile screens only
import FrontendStack from "./FrontendStack"
import BackendStack from "./BackendStack"
import TechTools from "./TechTools";



// 02-02-2025
//TODO - use scattered tech icons like I have on my github readme

// 13-02-2025
//TODO - use embla carousel to display the tech stack and tools 



const Stack = () => {


  const [emblaRef] = useEmblaCarousel();

  const isMobileScreen = useMediaQuery({ maxWidth: 425 })

  return isMobileScreen ? (
    <div className="min-h-screen bg-[#497D74] bg-[url('https://www.transparenttextures.com/patterns/diagonales-decalees.png')]">

      <h2 className="py-5 font-medium text-center"> Tech Stack & Tools </h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">

          <section className="flex-none w-full min-w-0 p-5">
            <h2>Skills</h2>
            <h3>Frontend</h3>
            <FrontendStack />

            <h3>Backend</h3>
            <BackendStack />
          </section>

          <section className="w-full flex-none min-w-0 p-5">
            <h2>Tools</h2>
            <TechTools />
          </section>
        </div>
      </div>

    </div>
  ) : <div className="min-h-screen bg-[#497D74] bg-[url('https://www.transparenttextures.com/patterns/diagonales-decalees.png')]">

    <h2 className="py-5 font-medium text-center"> Tech Stack & Tools </h2>

    <div className="flex flex-col lg:flex-row justify-around" >


      <section className="border shadow-lg p-5 ">
        <h2>Skills</h2>
        <h3>Frontend</h3>
        <FrontendStack />
        
        <h3>Backend</h3>
        <BackendStack />
      </section>

      <section className="border shadow-lg p-5">
        <h2>Tools</h2>
        <TechTools />
      </section>
    </div>

  </div>

};

export default Stack;
