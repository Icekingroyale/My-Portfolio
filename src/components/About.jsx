import React from 'react';
const gym = "/gympic.jpg";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isMobile = !useMediaQuery({ minWidth: 1024 });

  if (isMobile) {
    return (
      <div className="relative bg-gradient-to-br from-yellow-700 via-blue-900 to-indigo-900 min-h-screen w-full">
        <div className="max-w-5xl mx-auto flex flex-col gap-10 p-6 pt-24">
          {/* Text Section */}
          <div className="backdrop-blur-lg bg-white/5 border-white/10 border p-6 rounded-2xl shadow-2xl">
            <p className="leading-relaxed text-base text-gray-200">
              From the first time I saw the{" "}
              <span className="text-cyan-300 font-medium">Johny Castaway screensaver</span> 
              on my dad's old Windows PC, I was hooked. That quirky animation sparked a deep curiosity about computers and planted the seed for my journey into tech.
              <br /><br />
              Today, I focus on <span className="text-cyan-300 font-medium">web development</span> 
              but remain drawn to other areas like mobile apps, game development, and beyond. Each project is both a challenge and an opportunity to explore, experiment, and expand my skills. 
              The rise of <span className="text-cyan-300 font-medium">AI</span> has only fueled this drive—working with AI as a coding partner lets me move faster, think bigger, and push past limits.
              <br /><br />
              That same spirit of curiosity and innovation led me to create{" "}
              <span className="text-cyan-300 font-bold">ICEKING LABS</span>, 
              my personal tech brand inspired by Bell Labs.
            </p>
          </div>

          {/* Image */}
          <div className="w-full flex justify-center">
            <img 
              src={gym} 
              alt="about me" 
              className="rounded-2xl shadow-2xl w-full max-w-xl object-cover"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-yellow-700 via-blue-900 to-indigo-900 min-h-screen w-full flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 px-12 py-20 w-full">
        
        {/* Left Column - Text */}
        <div className="flex-1 flex items-center">
          <div className="backdrop-blur-lg bg-white/5 border-white/10 border p-10 rounded-3xl shadow-2xl">
            <p className="leading-relaxed text-lg text-gray-200">
              From the first time I saw the{" "}
              <span className="text-cyan-300 font-medium">Johny Castaway screensaver</span> 
              on my dad's old Windows PC, I was hooked. That quirky animation sparked a deep curiosity about computers and planted the seed for my journey into tech.
              <br /><br />
              Today, I focus on <span className="text-cyan-300 font-medium">web development</span> 
              but remain drawn to other areas like mobile apps, game development, and beyond. Each project is both a challenge and an opportunity to explore, experiment, and expand my skills. 
              The rise of <span className="text-cyan-300 font-medium">AI</span> has only fueled this drive—working with AI as a coding partner lets me move faster, think bigger, and push past limits.
              <br /><br />
              That same spirit of curiosity and innovation led me to create{" "}
              <span className="text-cyan-300 font-bold">ICEKING LABS</span>, 
              my personal tech brand inspired by Bell Labs.
            </p>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative group max-w-md xl:max-w-lg">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur opacity-40 group-hover:opacity-60 transition duration-700"></div>
            <img 
              src={gym} 
              alt="about me" 
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover max-h-[75vh] transform group-hover:scale-[1.02] transition duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
