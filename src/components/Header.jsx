import Logo from "../assets/logo.png";
import React, { useState } from "react";
import NavigationLinks from './navlinks/NavigationLinks.jsx';
import MenuLinks from "./navlinks/MenuLinks.jsx";
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

    let header = <>
        <header className="w-full flex justify-between">

            <NavLink to="/">
                <img src={logo} alt="site logo" className="h-14" />
            </NavLink>


            <NavigationLinks />

            <div className={`${isToggled ? 'block' : 'hidden'}`}>
                <MenuLinks />
            </div>

            <button className="h-14 z-50 absolute right-0" >
                <Hamburger toggled={isToggled} toggle={handleToggle}/>
            </button>
        </header>
    </>;
    return header;
};

export default Header;
