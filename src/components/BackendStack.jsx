import React from 'react'
import Express from '../assets/techstack/Express.svg'
import Flask from '../assets/techstack/Flask.svg'
import PostgreSQL from '../assets/techstack/PostgresSQL.svg'
import MongoDB from '../assets/techstack/MongoDB.svg'
import Node from '../assets/techstack/Node.js.svg'



const BackendStack = () => {

    const technologies = [
        { icon: Node, title: "Node.js" },
        { icon: Express, title: "Express" },
        { icon: Flask, title: "Flask" },
        { icon: PostgreSQL, title: "PostgreSQL" },
        { icon: MongoDB, title: "MongoDB" },
    ];



    return (
        <div className="grid grid-cols-2 gap-3">
            {technologies.map((tech, index) => (
                <div key={index} className="flex items-center space-x-2 bg-gray-600 text-white p-1 my-2">
                    <img src={tech.icon} alt={tech.title} className="w-6 h-6" />
                    <span>{tech.title}</span>
                </div>
            ))}
        </div>
    );
};

export default BackendStack