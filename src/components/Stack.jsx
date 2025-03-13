import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useMediaQuery } from "react-responsive"; //to conditional render the Carousel for mobile screens only






// 02-02-2025
//TODO - use scattered tech icons like I have on my github readme

// 13-02-2025
//TODO - use embla carousel to display the tech stack and tools 



const Stack = () => {


  const [emblaRef] = useEmblaCarousel();

  const isMobileScreen = useMediaQuery({maxWidth: 425})

  return isMobileScreen ? (
    <div className="min-h-screen bg-[#497D74] bg-[url('https://www.transparenttextures.com/patterns/diagonales-decalees.png')]">

      <h2 className="py-5 font-medium text-center"> Tech Stack & Tools </h2>

      <div className="border overflow-hidden" ref={emblaRef}>
        <div className="flex ">

          <section className="border-2 border-yellow-400 flex-none w-full min-w-0">
            <h2>Skills</h2>
            <h3>Frontend</h3>
            <ul>
              <li>TypeScript</li>
              <li>Next.js</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
            </ul>
            <h3>Backend</h3>
            <ul>
              <li>Express.js</li>
              <li>Flask</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>RESTful APIs</li>
            </ul>
          </section>

          <section className="border-4 border-blue-800 w-full flex-none min-w-0">
            <h2>Tools</h2>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Netlify</li>
              <li>Vercel</li>
              <li>VS Code</li>
              <li>Copilot</li>
              <li>WebStorm</li>
              <li>CodeSandbox</li>
              <li>Postman</li>
            </ul>
          </section>
        </div>
      </div>

    </div>
  ) : <div className="min-h-screen bg-[#497D74] bg-[url('https://www.transparenttextures.com/patterns/diagonales-decalees.png')]">

  <h2 className="py-5 font-medium text-center"> Tech Stack & Tools </h2>

  <div className="flex flex-col lg:flex-row justify-around" >
    

      <section className="border-2 border-yellow-400 ">
        <h2>Skills</h2>
        <h3>Frontend</h3>
        <ul>
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>React.js</li>
          <li>Tailwind CSS</li>
        </ul>
        <h3>Backend</h3>
        <ul>
          <li>Express.js</li>
          <li>Flask</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>RESTful APIs</li>
        </ul>
      </section>

      <section className="border-4 border-blue-800">
        <h2>Tools</h2>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>Netlify</li>
          <li>Vercel</li>
          <li>VS Code</li>
          <li>Copilot</li>
          <li>WebStorm</li>
          <li>CodeSandbox</li>
          <li>Postman</li>
        </ul>
      </section>
    </div>

</div>
  
};

export default Stack;
