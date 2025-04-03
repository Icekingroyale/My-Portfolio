import React from 'react'
import Git from '../assets/techtool/Git.svg'
import GitHub from '../assets/techtool/GitHub.svg'
import Postman from '../assets/techtool/Postman.svg'
import Vercel from '../assets/techtool/Vercel.svg'
import WebStorm from '../assets/techtool/WebStorm.svg'
import VsCode from '../assets/techtool/Visual Studio Code (VS Code).svg'
import wordpress from '../assets/techstack/wordpress-simple-brands.svg'
import Shopify from '../assets/techtool/shopify-icon.svg'
import Netlify from '../assets/techtool/netlify-icon.svg'
import MaterialUi from '../assets/techtool/material-ui-1.svg'   
import FramerMotion from '../assets/techtool/framer-icon.svg'
import copilot from '../assets/techtool/github_copilot-icon.svg'

const TechTools = () => {

     const tools = [
         { icon: VsCode, title: "VS Code" },
         { icon: WebStorm, title: "WebStorm" },
         { icon: wordpress, title: "Wordpress" },
         { icon: Shopify, title: "Shopify" },
         { icon: Git, title: "Git" },
         { icon: GitHub, title: "GitHub" },
         { icon: Vercel, title: "Vercel" },
         { icon: Netlify, title: "Netlify" },
         { icon: Postman, title: "Postman" },
         { icon: FramerMotion, title: "Framer Motion" },
         { icon: MaterialUi, title: "MaterialUi" },
            { icon: copilot, title: "GitHub Copilot" },
          ];



  return (
    <div className="grid grid-cols-2 gap-3">
    {tools.map((tech, index) => (
        <div key={index} className="flex items-center space-x-2 bg-gray-600 text-white p-1 my-2 w-44">
            <img src={tech.icon} alt={tech.title} className="w-6 h-6" />
            <span>{tech.title}</span>
        </div>
    ))}
</div> 
)
}

export default TechTools