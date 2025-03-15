import React from 'react'
import tailwind from '../assets/techstack/Tailwind.svg'
import react from '../assets/techstack/React.svg'
import typescript from '../assets/techstack/TypeScript.svg'
import next from '../assets/techstack/Next.svg'
import wordpress from '../assets/techstack/wordpress-simple-brands.svg'

const FrontendStack = () => {

    const technologies = [
        { icon: typescript, title: "TypeScript" },
        { icon: next, title: "Next.js" },
        { icon: react, title: "React.js" },
        { icon: tailwind, title: "Tailwind" },
      ];



      return (
       <div className="grid grid-cols-2 gap-3">
    {technologies.map((tech, index) => (
      <div key={index} className="flex items-center space-x-2 p-1 my-2 bg-gray-600 text-white">
        <img src={tech.icon} alt={tech.title} className="w-6 h-6" />
        <span>{tech.title}</span>
      </div>
    ))}
  </div>
      );
    };

export default FrontendStack