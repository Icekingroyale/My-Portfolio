import Logo from "../assets/Logo.png";
import React, { useEffect, useState } from "react";
import NavigationLinks from './navlinks/NavigationLinks.jsx';
import MenuLinks from "./navlinks/MenuLinks.jsx";
import LgMenuDrop from "./LgMenuDrop.jsx";
import { Sling as Hamburger } from 'hamburger-react'
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ hasScrollableContent = false }) => {
    const [isToggled, setIsToggled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Only run if menu is open
            if (isToggled) {
                // Get the hamburger button element
                const hamburgerButton = document.querySelector('.hamburger-button');
                // Check if click is outside hamburger
                if (!hamburgerButton?.contains(event.target)) {
                    setIsToggled(false);
                }
            }
        };

        // Handle keyboard events
        const handleKeyDown = (event) => {
            if (isToggled) {
                // Close menu on Escape key or Arrow Down key
                if (event.key === 'Escape' || event.key === 'ArrowDown') {
                    setIsToggled(false);
                }
            }
        };

        // Add event listeners
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup function
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isToggled]);

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

    return (
        <header className={`fixed w-full flex justify-between z-[1000] transition-all duration-300 ${hasScrollableContent ? 'lg:backdrop-blur-md lg:bg-[#EFE9D5]/30' : ''} backdrop-blur-md bg-[#EFE9D5]/30 lg:bg-transparent lg:backdrop-blur-0`}>
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

            {/* Mobile Menu Links */}
            <AnimatePresence>
                {isToggled && (
                    <motion.div 
                        className="md:hidden"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                    >
                        <MenuLinks />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hamburger Button */}
            <button className="h-14 z-[1000] absolute right-0 lg:right-10 bg-transparent hamburger-button">
                <Hamburger toggled={isToggled} toggle={handleToggle} />
            </button>

            {/* Desktop Menu Drop - Fixed positioning and AnimatePresence */}
            <AnimatePresence mode="wait">
                {isToggled && <LgMenuDrop key="lg-menu" />}
            </AnimatePresence>
        </header>
    );
};

export default Header;