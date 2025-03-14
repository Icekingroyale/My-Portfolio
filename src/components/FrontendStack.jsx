import React from 'react'
import tailwind from '../assets/techstack/tailwind.svg'
import react from '../assets/techstack/react.svg'
import typescript from '../assets/techstack/typescript.svg'
import next from '../assets/techstack/Next.svg'
import wordpress from '../assets/techstack/wordpress.svg'

const FrontendStack = () => {

    const technologies = [
        { icon: typescript, title: "TypeScript" },
        { icon: next, title: "Next.js" },
        { icon: react, title: "React.js" },
        { icon: tailwind, title: "Tailwind" },
        { icon: wordpress, title: "WordPress" }
      ];



      return (
       <div className="grid grid-cols-3 gap-2">
    {technologies.map((tech, index) => (
      <div key={index} className="flex items-center space-x-2 rounded-lg shadow-md p-1 my-2 bg-gray-600 text-white">
        <img src={tech.icon} alt={tech.title} className="w-8 h-8" />
        <span>{tech.title}</span>
      </div>
    ))}
  </div>
      );
    };

export default FrontendStack