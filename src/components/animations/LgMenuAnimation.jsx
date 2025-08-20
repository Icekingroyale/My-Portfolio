// export const menuContainer = {
//     hidden: {
//         x: "100%",
//         opacity: 0
//     },
//     visible: {
//         x: 0,
//         opacity: 1,
//         transition: {
//             duration: 0.3,
//             ease: "easeOut",
//             staggerChildren: 0.1
//         }
//     },
//     exit: {
//         x: "100%",
//         opacity: 0,
//         transition: {
//             duration: 0.3,
//             ease: "easeIn",
//             when: "afterChildren",
//             staggerChildren: 0.05
//         }
//     }
// };

// export const socialLinks = {
//     hidden: {
//         y: 20,
//         opacity: 0
//     },
//     visible: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             duration: 0.3,
//             ease: "easeOut"
//         }
//     },
//     exit: {
//         y: 20,
//         opacity: 0,
//         transition: {
//             duration: 0.2,
//             ease: "easeIn"
//         }
//     }
// };




export const menuContainer = {
    hidden: {
        scale: 0.8,
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for smooth acceleration
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
            ease: [0, 0, 0.2, 1], // Material Design cubic-bezier
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

export const socialLinks = {
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

// Bonus: Additional modern animation variants you can use

export const menuItemHover = {
    rest: { 
        scale: 1, 
        x: 0,
        transition: {
            duration: 0.2,
            ease: "easeOut"
        }
    },
    hover: { 
        scale: 1.02, 
        x: 8,
        transition: {
            duration: 0.2,
            ease: "easeOut"
        }
    }
};

export const backdropVariants = {
    hidden: { 
        opacity: 0,
        backdropFilter: "blur(0px)"
    },
    visible: { 
        opacity: 1,
        backdropFilter: "blur(8px)",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    },
    exit: { 
        opacity: 0,
        backdropFilter: "blur(0px)",
        transition: {
            duration: 0.2,
            ease: "easeIn"
        }
    }
};

export const slideInFromRight = {
    hidden: {
        x: "100%",
        opacity: 0,
        scale: 0.95
    },
    visible: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 200,
            duration: 0.6,
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    },
    exit: {
        x: "100%",
        opacity: 0,
        scale: 0.98,
        transition: {
            duration: 0.4,
            ease: [0.4, 0, 1, 1],
            when: "afterChildren",
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};