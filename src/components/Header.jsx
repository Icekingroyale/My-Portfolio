import Logo from "../assets/Logo.png";
import React, { useState } from "react";
import NavigationLinks from './navlinks/NavigationLinks.jsx';
import MenuLinks from "./navlinks/MenuLinks.jsx";
import LgMenuDrop from "./LgMenuDrop.jsx";
import { Sling as Hamburger } from 'hamburger-react'
import { NavLink } from "react-router-dom";


const Header = () => {

    const [isToggled, setIsToggled] = useState(false);


    const handleToggle = () => {
        setIsToggled(!isToggled)

    }

    // 25-01-2025
    //TODO - Make the header stick on all pages but with different background and content colors
    //     - Make Active links have a different color
    //    - (bonus) Keep the/a hamburger component even on pc Screens to display a Footer contents with unique styles and cool animations
    //    - Fix scroll issue when MenuLinks are open


    //03-02-25
    // TODO - The header is fixed and the background color is transparent, I want to make whatever that is scrolled into the space of the to be blur

    let header = <>
        <header className="fixed bg-transparent w-full flex justify-between bg-[#EFE9D5] bg-[url('https://www.transparenttextures.com/patterns/brushed-alum-dark.png')]">

            <NavLink to="/">
                <img src={Logo} alt="site logo" className="h-14" />
            </NavLink>


            <NavigationLinks />

            <div className={`${isToggled ? 'block' : 'hidden'}`}>
                <MenuLinks />
            </div>

            <button className="h-14 z-50 absolute right-0">
                <Hamburger toggled={isToggled} toggle={handleToggle} />
            </button>

            <div className={`${isToggled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
                } transition-all duration-500 ease-in-out transform`}>
                <LgMenuDrop />
            </div>


            {/* <div className={`${isToggled ? 'block' : 'hidden'}`}>
                My code 02-02-2025
                <LgMenuDrop />
            </div> */}


        </header>
    </>;
    return header;
};

export default Header;
