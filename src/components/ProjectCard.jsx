import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, image, demoUrl, codeUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative group rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-md"
    >
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
        <h3 className="text-lg md:text-xl font-bold text-white mb-3">{title}</h3>
        <div className="flex gap-3">
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white text-gray-900 font-medium rounded-lg shadow hover:scale-105 hover:bg-gray-200 transition-transform duration-300"
          >
            Live Demo
          </a>
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-white text-white font-medium rounded-lg hover:scale-105 hover:bg-white hover:text-gray-900 transition-transform duration-300"
          >
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
