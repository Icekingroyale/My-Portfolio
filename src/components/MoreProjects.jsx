// import React from 'react';
// import project1 from "../assets/Project1.jpg";
// import project2 from "../assets/Hero.jpeg";
// import project3 from "../assets/image-hero.jpg";
// import project4 from "../assets/smartUk.jpg";
// import project5 from "../assets/contactForm.jpg";
// import project6 from "../assets/icon.jpg";
// import { ScrollAnimation } from "./animations/ScrollAnimation";

// const MoreProjects = () => {
//   const projects = [
//     { id: 1, title: 'Project 1', image: project1, demoUrl: 'https://nufl.netlify.app/', codeUrl: 'https://github.com/Icekingroyale/nufl-football-league' },
//     { id: 2, title: 'Project 2', image: project2, demoUrl: 'https://icekingroyale.vercel.app/', codeUrl: 'https://github.com/Icekingroyale/My-Portfolio' },
//     { id: 3, title: 'Project 3', image: project3, demoUrl: 'https://loopstudio-landing-page.netlify.app/', codeUrl: 'https://github.com/Icekingroyale/LoopStudiosLandingPage' },
//     { id: 4, title: 'Project 4', image: project4, demoUrl: 'https://educational-sentiment-analysis.netlify.app/', codeUrl: 'https://github.com/Icekingroyale/Educational-Sentiment-Analysis' },
//     { id: 5, title: 'Project 5', image: project5, demoUrl: 'https://icekingroyale.github.io/contact-form/', codeUrl: 'https://github.com/Icekingroyale/contact-form' },
//     { id: 6, title: 'Project 6', image: project6, demoUrl: 'https://icekingroyale.github.io/ChimaobiOkeh/', codeUrl: 'https://github.com/Icekingroyale/ChimaobiOkeh' },
//   ];

//   return (
//     <div className="bg-[#71BBB2] bg-[url('https://www.transparenttextures.com/patterns/diagonal-waves.png')] min-h-screen text-center py-16 px-4 md:px-8">
//       <h2 className="text-4xl font-bold mb-16">All Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-4 min-h-[calc(100vh-4rem)] border">
//         {projects.map((project) => (
//           <ScrollAnimation key={project.id} className="projects_img_div my-4">
//             <a
//               href={project.demoUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block relative group"
//             >
//               <img 
//                 src={project.image} 
//                 alt={project.title} 
//                 className="w-full h-56 md:h-72 object-cover rounded-lg shadow-xl transition-all duration-300 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-lg flex items-center justify-center transition-opacity duration-300">
//                 <div className="text-white text-center p-4">
//                   <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                   <div className="flex justify-center space-x-4">
//                     <a 
//                       href={project.demoUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-200 transition-colors"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       Live Demo
//                     </a>
//                     <a 
//                       href={project.codeUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 bg-transparent border-2 border-white text-white rounded hover:bg-white hover:text-gray-800 transition-colors"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       View Code
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </a>
//           </ScrollAnimation>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default MoreProjects


// import React from 'react';
// import project1 from "../assets/Project1.jpg";
// import project2 from "../assets/Hero.jpeg";
// import project3 from "../assets/image-hero.jpg";
// import project4 from "../assets/project4.jpg";
// import project5 from "../assets/contactForm.jpg";
// import project6 from "../assets/icon.jpg";
// import { ScrollAnimation } from "./animations/ScrollAnimation";

// const MoreProjects = () => {
//   const projects = [
//     { id: 1, title: 'Project 1', image: project1, demoUrl: 'https://nufl.netlify.app/', codeUrl: 'https://github.com/Icekingroyale/nufl-football-league' },
//     { id: 2, title: 'Project 2', image: project2, demoUrl: 'https://icekingroyale.vercel.app/', codeUrl: 'https://github.com/Icekingroyale/My-Portfolio' },
//     { id: 3, title: 'Project 3', image: project3, demoUrl: 'https://loopstudio-landing-page.netlify.app/', codeUrl: 'https://github.com/Icekingroyale/LoopStudiosLandingPage' },
//     { id: 4, title: 'Project 4', image: project4, demoUrl: 'https://educational-sentiment-analysis.netlify.app/', codeUrl: 'https://github.com/Icekingroyale/Educational-Sentiment-Analysis' },
//     { id: 5, title: 'Project 5', image: project5, demoUrl: 'https://icekingroyale.github.io/contact-form/', codeUrl: 'https://github.com/Icekingroyale/contact-form' },
//     { id: 6, title: 'Project 6', image: project6, demoUrl: 'https://icekingroyale.github.io/ChimaobiOkeh/', codeUrl: 'https://github.com/Icekingroyale/ChimaobiOkeh' },
//   ];

//   return (
//     <div className="bg-[#71BBB2] bg-[url('https://www.transparenttextures.com/patterns/diagonal-waves.png')] min-h-screen text-center py-8">
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 mt-20">All Projects</h2>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:-ml-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 ">
//           {projects.map((project) => (
//             <ScrollAnimation key={project.id} className="projects_img_div">
//               <a
//                 href={project.demoUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block relative group"
//               >
//                 <img 
//                   src={project.image} 
//                   alt={project.title} 
//                   className="w-full aspect-video object-cover rounded-lg shadow-xl transition-all duration-300 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-lg flex items-center justify-center transition-opacity duration-300">
//                   <div className="text-white text-center p-3 sm:p-4">
//                     <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
//                     <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
//                       <a 
//                         href={project.demoUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="px-3 py-2 sm:px-4 bg-white text-gray-800 rounded hover:bg-gray-200 transition-colors text-sm sm:text-base"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         Live Demo
//                       </a>
//                       <a 
//                         href={project.codeUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="px-3 py-2 sm:px-4 bg-transparent border-2 border-white text-white rounded hover:bg-white hover:text-gray-800 transition-colors text-sm sm:text-base"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         View Code
//                       </a>
//                   </div>
//                   </div>
//                 </div>
//               </a>
//             </ScrollAnimation>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MoreProjects;


import React from "react";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/Project1.jpg";
import project2 from "../assets/Hero.jpeg";
import project3 from "../assets/image-hero.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/contactForm.jpg";
import project6 from "../assets/icon.jpg";

const MoreProjects = () => {
  const projects = [
    { id: 1, title: "Project 1", image: project1, demoUrl: "https://nufl.netlify.app/", codeUrl: "https://github.com/Icekingroyale/nufl-football-league" },
    { id: 2, title: "Project 2", image: project2, demoUrl: "https://icekingroyale.vercel.app/", codeUrl: "https://github.com/Icekingroyale/My-Portfolio" },
    { id: 3, title: "Project 3", image: project3, demoUrl: "https://loopstudio-landing-page.netlify.app/", codeUrl: "https://github.com/Icekingroyale/LoopStudiosLandingPage" },
    { id: 4, title: "Project 4", image: project4, demoUrl: "https://educational-sentiment-analysis.netlify.app/", codeUrl: "https://github.com/Icekingroyale/Educational-Sentiment-Analysis" },
    { id: 5, title: "Project 5", image: project5, demoUrl: "https://icekingroyale.github.io/contact-form/", codeUrl: "https://github.com/Icekingroyale/contact-form" },
    { id: 6, title: "Project 6", image: project6, demoUrl: "https://icekingroyale.github.io/ChimaobiOkeh/", codeUrl: "https://github.com/Icekingroyale/ChimaobiOkeh" },
  ];

  return (
    <section className="bg-[#71BBB2] bg-[url('https://www.transparenttextures.com/patterns/diagonal-waves.png')] py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">All Projects</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default MoreProjects;
