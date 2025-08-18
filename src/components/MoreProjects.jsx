import React from 'react';
import project1 from "../assets/Project1.jpg";
import project2 from "../assets/Project2.jpg";
import project3 from "../assets/Project3.jpg";
import project4 from "../assets/Project4.jpg";
import project5 from "../assets/Project5.jpg";
import project6 from "../assets/Project6.jpg";
import { ScrollAnimation } from "./animations/ScrollAnimation";

const MoreProjects = () => {
  const projects = [
    { id: 1, title: 'Project 1', image: project1, demoUrl: '#', codeUrl: '#' },
    { id: 2, title: 'Project 2', image: project2, demoUrl: '#', codeUrl: '#' },
    { id: 3, title: 'Project 3', image: project3, demoUrl: '#', codeUrl: '#' },
    { id: 4, title: 'Project 4', image: project4, demoUrl: '#', codeUrl: '#' },
    { id: 5, title: 'Project 5', image: project5, demoUrl: '#', codeUrl: '#' },
    { id: 6, title: 'Project 6', image: project6, demoUrl: '#', codeUrl: '#' },
  ];

  return (
    <div className="bg-[#71BBB2] bg-[url('https://www.transparenttextures.com/patterns/diagonal-waves.png')] min-h-screen text-center py-16 px-4 md:px-8">
      <h2 className="text-4xl font-bold mb-16">All Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-4">
        {projects.map((project) => (
          <ScrollAnimation key={project.id} className="projects_img_div my-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-56 md:h-72 object-cover rounded-lg shadow-xl transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 rounded-lg flex items-center justify-center transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-200 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-transparent border-2 border-white text-white rounded hover:bg-white hover:text-gray-800 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </a>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  )
}

export default MoreProjects