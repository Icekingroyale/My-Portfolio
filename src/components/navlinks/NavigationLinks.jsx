import React from 'react'
import { NavLink } from "react-router-dom";

//03-02-2025
// TODO - make navlinks active & add a hover animation

const NavigationLinks = () => {
    // Active link style function
    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? '' : 'inherit',
        fontWeight: isActive ? '600' : '400',
        position: 'relative',
        padding: '0.5rem 0',
        transition: 'all 0.3s ease',
        '&:hover': {
            color: '#3b82f6',
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: isActive ? '100%' : '0',
            height: '2px',
            backgroundColor: '#3b82f6',
            transition: 'width 0.3s ease',
        },
        '&:hover::after': {
            width: '100%',
        }
    });

    return (
        <div className='hidden md:flex md:flex-row md:items-center md:justify-center mx-auto'>
            <nav className="gap-8 mx-4 my-4 flex items-center">
                <NavLink 
                    to='/' 
                    // style={navLinkStyle}
                    className={({ isActive }) =>    
                        `px-2 py-1 rounded transition-colors duration-300 ${isActive ? 'font-semibold underline hover:text-blue-600' : 'hover:text-blue-600 hover:font-semibold'}`
                    }   
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                        `px-2 py-1 rounded transition-colors duration-300 ${isActive ? 'font-semibold underline hover:text-yellow-600' : 'hover:text-yellow-600 hover:font-semibold'}`
                    }   
                >
                    About
                </NavLink>
               
                <NavLink 
                    to="/resume" 
                    className={({ isActive }) => 
                        `px-2 py-1 rounded transition-colors duration-300 ${isActive ? 'font-semibold underline hover:text-red-600' : 'hover:text-red-600 hover:font-semibold'}`
                    }
                >
                    Resume
                </NavLink>
            </nav>
            <NavLink 
                to="/contact"
                className="px-2 bg-green-500 border-2 border-gray-600 rounded-md hover:bg-green-800 hover:text-white h-10 flex items-center transition-colors duration-300"
            >
                Contact Me
            </NavLink>
        </div>
    )
}

export default NavigationLinks