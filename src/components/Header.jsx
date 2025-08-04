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
    //    - (bonus) Keep the hamburger component even on pc Screens to display a Footer contents with unique styles and cool animations
    //    - Fix scroll issue when MenuLinks are open


    //03-02-25
    // TODO - The header is fixed and the background color is transparent, I want to make whatever that is scrolled into the space of the to be blur

    //12-02-25
    // TODO - Resolve the FullPageNav and LgMenuDropDown conflex

    //05-04-2-25
    // TODO - make the LgMenuDropDown disappers on arrow+down keypress & onClick anywhere on the hero and header

    let header = <>
        <header className='fixed bg-transparent w-full flex justify-between bg-[#EFE9D5] z-[1000]'>

            <NavLink to="/">
                <img src={Logo} alt="site logo" className="h-14" />
            </NavLink>


            <NavigationLinks />

            <div className={`${isToggled ? 'block' : 'hidden'}`}>
                <MenuLinks />
            </div>

            <button className="h-14 z-[1000] absolute right-0">
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
