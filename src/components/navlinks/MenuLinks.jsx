import React from 'react'
import { NavLink } from "react-router-dom";


const MenuLinks = ({ onLinkClick }) => {
    return (
        <div className="bg-[#EFE9D5] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum-dark.png')] w-screen h-screen content-center md:hidden overflow-y-hidden" >
            <ul className='mx-auto flex flex-col gap-14 items-center text-2xl font-semibold mb-32'>
                <NavLink to='/' onClick={onLinkClick}>Home</NavLink>

                <NavLink to="/about" onClick={onLinkClick}><li>About</li> </NavLink>
                <a to="https://medium.com/@okehchimaobi" target="_blank">
                    <li>Articles</li></a>

                <a href="./myResume.pdf" download="myResume.pdf" draggable='true'><li>Resume</li></a>
            </ul>

            <div className='flex text-2xl font-semibold'>

                <NavLink to="/" className="px-3 py-2 mx-auto bg-green-500 border-2 border-gray-600 rounded-md hover:bg-green-800 hover:text-white " onClick={onLinkClick}>
                    Contact Me
                </NavLink>

            </div>


        </div>
    )
}

export default MenuLinks