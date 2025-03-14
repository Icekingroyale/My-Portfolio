import React from 'react'
import Express from '../assets/techstack/Express.svg'
import Flask from '../assets/techstack/Flask.svg'
import PostgresSQL from '../assets/techstack/PostgresSQL.svg'
import MongoDB from '../assets/techstack/MongoDB.svg'


const BackendStack = () => {

    const technologies = [
        { icon: Express, title: "Express" },
        { icon: Flask, title: "Next.js" },
        { icon: PostgresSQL, title: "React.js" },
        { icon: MongoDB, title: "MongoDB" },
    ];



    return (
        <div className="grid grid-cols-3 gap-2">
            {technologies.map((tech, index) => (
                <div key={index} className="flex items-center space-x-2 shadow-md bg-gray-600 text-white p-1 my-2">
                    <img src={tech.icon} alt={tech.title} className="w-8 h-8" />
                    <span>{tech.title}</span>
                </div>
            ))}
        </div>
    );
};

export default BackendStack