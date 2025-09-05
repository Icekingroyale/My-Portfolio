// import React from "react";
// import project1 from "../assets/image-hero.jpg";
// import project2 from "../assets/Project1.jpg";
// import project3 from "../assets/icon.jpg";
// import project4 from "../assets/Hero.jpeg";
// import { ScrollAnimation } from "./animations/ScrollAnimation";
// import { NavLink } from "react-router-dom";

// const Projects = () => {
//   const projects = [
//     { id: 1, title: "NUFL", image: project2, demoUrl: "https://fortune-block.netlify.app/", codeUrl: "https://github.com/Icekingroyale/nufl-football-league" },
//     { id: 2, title: "Portfolio Site", image: project4, demoUrl: "https://icekingroyale.vercel.app/", codeUrl: "https://github.com/Icekingroyale/My-Portfolio" },
//     { id: 3, title: "LoopStudio Landing Page", image: project1, demoUrl: "https://icekingroyale.github.io/LoopStudiosLandingPage/", codeUrl: "https://github.com/Icekingroyale/LoopStudiosLandingPage" },
//     { id: 4, title: "Humble Beginnings", image: project3, demoUrl: "https://icekingroyale.github.io/ChimaobiOkeh/", codeUrl: "https://github.com/Icekingroyale/ChimaobiOkeh" },
//   ];

//   return (
//     <div className="bg-[#71BBB2] bg-[url('https://www.transparenttextures.com/patterns/diagonal-waves.png')] min-h-screen text-center py-12">
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12">Recent Projects</h2>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
//           {projects.map((project) => (
//             <ScrollAnimation key={project.id} className="projects_img_div">
//               <a
//                 href={project.demoUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block relative group"
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full aspect-video object-cover rounded-lg shadow-xl transition-all duration-300 group-hover:scale-105"
//                 />
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-lg flex items-center justify-center transition-opacity duration-300">
//                   <div className="text-white text-center p-3 sm:p-4">
//                     <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
//                     <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
//                       <a
//                         href={project.demoUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="px-3 py-2 sm:px-4 bg-white text-gray-800 rounded hover:bg-gray-200 transition-colors text-sm sm:text-base"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         Live Demo
//                       </a>
//                       <a
//                         href={project.codeUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="px-3 py-2 sm:px-4 bg-transparent border-2 border-white text-white rounded hover:bg-white hover:text-gray-800 transition-colors text-sm sm:text-base"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         View Code
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             </ScrollAnimation>
//           ))}
//         </div>
//       </div>

//       {/* See More Button */}
//       <div className="mt-10">
//         <NavLink
//           to="/more-projects"
//           className="bg-gray-300 hover:bg-gray-600 hover:text-white rounded-lg px-6 py-3 transition-colors duration-300"
//         >
//           SEE MORE
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Projects;


import React from "react";
import { NavLink } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import project1 from "../assets/image-hero.jpg";
import project2 from "../assets/Project1.jpg";
import project3 from "../assets/project4.jpg";

const Projects = () => {
  const projects = [
    { id: 1, title: "NUFL", image: project2, demoUrl: "https://nufl.netlify.app/", codeUrl: "https://github.com/Icekingroyale/nufl-football-league" },
    { id: 2, title: "Educational Sentiment Analysis", image: project3, demoUrl: "https://educational-sentiment-analysis.netlify.app/", codeUrl: "https://github.com/Icekingroyale/Educational-Sentiment-Analysis" },
    { id: 3, title: "LoopStudio Landing Page", image: project1, demoUrl: "https://icekingroyale.github.io/LoopStudiosLandingPage/", codeUrl: "https://github.com/Icekingroyale/LoopStudiosLandingPage" },
    // { id: 4, title: "Humble Beginnings", image: project3, demoUrl: "https://icekingroyale.github.io/ChimaobiOkeh/", codeUrl: "https://github.com/Icekingroyale/ChimaobiOkeh" },
  ];

  return (
    <section id="projects-section" className="bg-[#71BBB2] lg:min-h-screen bg-[url('https://www.transparenttextures.com/patterns/diagonal-waves.png')] py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Recent Projects</h2>
      <div className="max-w-6xl  mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      <div className="text-center mt-12">
        <NavLink
          to="/more-projects"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          See More
        </NavLink>
      </div>
    </section>
  );
};

export default Projects;
