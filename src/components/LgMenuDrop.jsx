import React from 'react'
import { motion } from 'framer-motion'
import facebook from "../assets/facebook.svg";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import X from "../assets/x.svg";

// Updated modern animations
const menuContainer = {
    hidden: {
        scale: 0.8,
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
            when: "afterChildren",
            staggerChildren: 0.03,
            staggerDirection: -1
        }
    },
    visible: {
        scale: 1,
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0, 0, 0.2, 1],
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    },
    exit: {
        scale: 0.95,
        opacity: 0,
        y: -15,
        transition: {
            duration: 0.3,
            ease: [0.4, 0, 1, 1],
            when: "afterChildren",
            staggerChildren: 0.03,
            staggerDirection: -1
        }
    }
};

const socialLinks = {
    hidden: {
        scale: 0.8,
        opacity: 0,
        y: 15,
        x: 10,
        transition: {
            duration: 0.25,
            ease: [0.4, 0, 1, 1]
        }
    },
    visible: {
        scale: 1,
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            type: "spring",
            damping: 20,
            stiffness: 300,
            duration: 0.4
        }
    },
    exit: {
        scale: 0.9,
        opacity: 0,
        y: 10,
        x: 5,
        transition: {
            duration: 0.2,
            ease: [0.4, 0, 1, 1]
        }
    }
};

const menuItemHover = {
    rest: { 
        scale: 1, 
        x: 0,
        transition: {
            duration: 0.2,
            ease: "easeOut"
        }
    },
    hover: { 
        scale: 1.1, 
        x: 8,
        transition: {
            duration: 0.2,
            ease: "easeOut"
        }
    }
};

const LgMenuDrop = () => {
    const socialMediaLinks = [
        { href: "https://www.linkedin.com/in/chimaobiokeh", img: linkedin, alt: "linkedin logo" },
        { href: "https://github.com/Icekingroyale", img: github, alt: "github logo" },
        { href: "https://x.com/Icekingroyale", img: X, alt: "X logo" },
        { href: "https://www.facebook.com/Icekingroyale/", img: facebook, alt: "facebook logo" }
    ];

    return (
        <motion.div 
            className='bg-gray-600/90 backdrop-blur-sm w-60 fixed top-0 right-10 hidden md:flex md:flex-col items-center py-10 gap-16 rounded-b-2xl shadow-2xl border-gray-500/30'
            variants={menuContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {socialMediaLinks.map((link, index) => (
                <motion.a 
                    key={index}
                    href={link.href} 
                    target="_blank"
                    variants={socialLinks}
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    className="relative group"
                >
                    <motion.img 
                        src={link.img} 
                        alt={link.alt} 
                        className="h-10 invert transition-all duration-200 group-hover:invert-0 group-hover:brightness-200" 
                        variants={menuItemHover}
                    />
                    {/* Hover glow effect */}
                    <motion.div 
                        className="absolute inset-0 bg-white/20 rounded-full blur-md -z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                    />
                </motion.a>
            ))}
            
            {/* Background decoration */}
            <motion.div 
                className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            />
        </motion.div>
    );
};

export default LgMenuDrop;