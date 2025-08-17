import Logo from "../assets/Logo.png";
import React, { useState } from "react";
import NavigationLinks from './navlinks/NavigationLinks.jsx';
import MenuLinks from "./navlinks/MenuLinks.jsx";
import LgMenuDrop from "./LgMenuDrop.jsx";
import { Sling as Hamburger } from 'hamburger-react'
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";


const Header = () => {

    const [isToggled, setIsToggled] = useState(false);
    const location = useLocation();



    const handleToggle = () => {
        setIsToggled(!isToggled)
    }

//handle logo click
const handleLogoClick = (e) => {
    if (location.pathname === "/") {
        e.preventDefault(); // prevent reload/reroute
        window.scrollTo({
            top: 0,
            behavior: "smooth", // smooth scroll animation
        });
    }
}

    // 25-01-2025
    //TODO - Make the header stick on all pages but with different background and content colors
    //     - Make Active links have a different color
    //    - (bonus) Keep the hamburger component even on pc Screens to display a Footer contents with unique styles and cool animations
    //    - Fix scroll issue when MenuLinks are open


    //03-02-25
    // TODO - The header is fixed and the background color is transparent, I want to make whatever that is scrolled into the space of the to be blur

    //12-02-25
    // TODO - Resolve the FullPageNav and LgMenuDropDown conflict

    //05-04-2-25
    // TODO - make the LgMenuDropDown disappers on arrow+down keypress & onClick anywhere on the hero and header

    //16-08-25
    // TODO - when I tap on my image for 20 times, it should show a firework like animation and say "Ah you found the easter egg. Just contact me already ^_^"

    // TODO - When on MenuLinks, clicking any link/button should close the menuLink

    //17-08-25
    // TODO - The crown logo should animate on initial page load and any reload


    let header = <>
        <header className='fixed w-full flex justify-between z-[1000] backdrop-blur-md md:backdrop-blur-sm bg-[#EFE9D5]/30 transition-all duration-300 lg:bg-transparent lg:backdrop-blur-0'>

            <NavLink to="/" onClick={handleLogoClick} className="block">
                <motion.img 
                    src={Logo} 
                    alt="site logo" 
                    className="h-14"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ 
                        duration: 0.8,
                        ease: "easeInOut",
                      
                    }}
                />
            </NavLink>


            <NavigationLinks />

            <div className={`${isToggled ? 'block' : 'hidden'}`}>
                <MenuLinks />
            </div>

            <button className="h-14 z-[1000] absolute right-0 bg-transparent">
                <Hamburger toggled={isToggled} toggle={handleToggle} />
            </button>

            <div className={`${isToggled ? 'block translate-y-0' : 'hidden -translate-y-full'
                } transition-all duration-500 ease-in-out transform`}>
                <LgMenuDrop />
            </div>

        </header>
    </>;
    return header;
};

export default Header;
