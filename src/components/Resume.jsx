
import React, { useState } from "react";
import { FaDownload, FaCode, FaDatabase, FaUsers, FaAward, FaEye } from "react-icons/fa";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("experience");

  const skills = [
    { name: "Web Development", icon: <FaCode /> },
    { name: "Ai Agentic Engineering", icon: <FaDatabase /> },
    { name: "Private Tutoring", icon: <FaAward /> },
    { name: "Team Collaboration", icon: <FaUsers /> }
  ];

  const sections = {
    experience: "Over the years, I've worked on diverse projects ranging from web development and data analysis to tutoring and software engineering. My experience blends technical expertise with problem-solving.",
    skills: "Proficient in modern web technologies, data analysis tools, and collaborative development practices. I take pride in creating impactful solutions that make a difference.",
    projects: "From full-stack applications to data visualization dashboards, I've built solutions that solve real-world problems and deliver meaningful user experiences."
  };

  return (
    <section className="min-h-screen bg-[#bcdee7] bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] flex flex-col justify-center items-center px-6 py-20">
      
      {/* Header */}
      <div className="text-center mb-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          My Professional Experience
        </h1>
        <p className="text-lg text-gray-600">
          Passionate about creating digital solutions and solving complex problems
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl w-full">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
          >
            <div className="text-blue-600 text-2xl mb-2 flex justify-center">
              {skill.icon}
            </div>
            <p className="text-sm text-gray-700 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Content Tabs */}
      <div className="w-full max-w-3xl mb-12">
        <div className="flex justify-center gap-4 mb-6">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 capitalize ${
                activeSection === section
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {section}
            </button>
            
          ))}

          <div className="hidden lg:block">
          <a
            href="/myResume.pdf"
            download="Chimaobi_Okeh_Resume.pdf"
            className="flex items-center gap-3 px-6 py-3 bg-teal-600 text-white rounded-lg shadow-lg hover:bg-teal-700 hover:shadow-xl transition-all duration-300 font-medium"
          >
            <FaDownload size={18} />
            Download Resume
          </a>       
        </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-md">
          <p className="text-gray-700 leading-relaxed">
            {sections[activeSection]}
          </p>
          
        </div>
      </div>

      {/* Download Section */}
      <div className="text-center lg:hidden">
         <p className="text-gray-600 mb-6 max-w-xl">
          Want to learn more? Download my complete resume for detailed information 
          about my projects, achievements, and technical expertise.
        </p>
                
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="/myResume.pdf"
            download="Chimaobi_Okeh_Resume.pdf"
            className="flex items-center gap-3 px-6 py-3 bg-teal-600 text-white rounded-lg shadow-lg hover:bg-teal-700 hover:shadow-xl transition-all duration-300 font-medium"
          >
            <FaDownload size={18} />
            Download Resume
          </a>       
        </div>

      </div>
    </section>
  );
};

export default Resume;