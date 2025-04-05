import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useMediaQuery } from "react-responsive"; //to conditional render the Carousel for mobile screens only
import { MdOutlineSwipeVertical } from "react-icons/md";
import FrontendStack from "./FrontendStack"
import BackendStack from "./BackendStack"
import TechTools from "./TechTools";



// 02-02-2025
//TODO - use scattered tech icons like I have on my github readme

// 13-02-2025
//TODO - use embla carousel to display the tech stack and tools 



const Stack = () => {


  const [emblaRef] = useEmblaCarousel();

  const isMobileScreen = useMediaQuery({ maxWidth: 428 })

  return isMobileScreen ? (
    <div className="min-h-screen bg-[#497D74] bg-[url('https://www.transparenttextures.com/patterns/diagonales-decalees.png')] flex flex-col justify-center items-center">

      <h2 className="py-5 font-medium text-center"> Tech Stack & Tools </h2>

      <div className="overflow-hidden flex flex-col justify-center items-center" ref={emblaRef}>
        <div className="flex">

          <section className="flex-none w-full min-w-0 shadow-2xl p-5">

            <div className="flex flex-col gap-5">
            <h2 className="text-center">Frontend</h2>
            <FrontendStack/>

            <h2 className="text-center">Backend</h2>
            <BackendStack />
            </div>
          </section>

          <section className="w-full flex-none min-w-0 p-5 shadow-2xl">
            <h2 className="text-center">Tools</h2>
            <TechTools />
          </section>
        </div>
      <div className="flex flex-col items-center">
      <MdOutlineSwipeVertical className="w-16 h-16" />
      <p>Swipe</p>
      </div>
      </div>      

    </div>
  ) : <div className="min-h-screen bg-[#497D74] bg-[url('https://www.transparenttextures.com/patterns/diagonales-decalees.png')] flex flex-col justify-center ">

    <h2 className="font-medium text-center "> Tech Stack & Tools </h2>

    <div className="flex flex-col lg:flex-row justify-around w-[80%] mx-auto" >


      <section className="shadow-2xl p-5 lg:w-[40%]">
        <h2 className="">Frontend</h2>
        <FrontendStack />
        
        <h2 className="">Backend</h2>
        <BackendStack />
      </section>

      <section className="shadow-2xl p-5 lg:w-[40%] lg:mt-0 md:mt-5">
        <h2 className="">Tools</h2>
        <TechTools />
      </section>
    </div>

  </div>

};

export default Stack;
