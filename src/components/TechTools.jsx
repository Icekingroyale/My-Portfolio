import React from 'react'
import Git from '../assets/techtool/Git.svg'
import GitHub from '../assets/GitHub.svg'
import Postman from '../assets/techtool/Postman.svg'
import Vercel from '../assets/techtool/Vercel.svg'
import WebStorm from '../assets/techtool/WebStorm.svg'

const TechTools = () => {

     const tools = [
            { icon: Git, title: "Git" },
            { icon: GitHub, title: "GitHub" },
            { icon: Vercel, title: "Vercel" },
            { icon: Postman, title: "Postman" },
            { icon: WebStorm, title: "WebStorm" }
            // { icon: wordpress, title: "Copilot" }
            // { icon: Netlify, title: "Netlify" },
            // { icon: wordpress, title: "WebStorm" }
            // { icon: wordpress, title: "CodeSandbox" }
          ];



  return (
    <div className="grid grid-cols-3 gap-2">
    {tools.map((tech, index) => (
        <div key={index} className="flex items-center space-x-2 shadow-md bg-gray-600 text-white p-1 my-2">
            <img src={tech.icon} alt={tech.title} className="w-8 h-8" />
            <span>{tech.title}</span>
        </div>
    ))}
</div> 
)
}

export default TechTools