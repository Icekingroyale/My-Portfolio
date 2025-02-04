import React from 'react'
import { NavLink, Link } from "react-router-dom";


//03-02-2025
// TODO - make navlinks active & add a hover animation


const NavigationLinks = () => {
    return (
        <div className='hidden md:flex md:flex-row md:items-center md:justify-center mx-auto '>

            <nav className=" gap-5 mx-4 my-4 flex" >
                <NavLink to='/'>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <Link to="https://medium.com/@okehchimaobi" target="_blank">
                    Articles</Link>
                <NavLink to="/resume">Resume</NavLink>
            </nav>
            <NavLink to="/contact" className="px-2 bg-green-500 border-2 border-gray-600 rounded-md hover:bg-green-800 hover:text-white h-10">Contact Me</NavLink>
        </div>
    )
}

export default NavigationLinks