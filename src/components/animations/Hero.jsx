// Animation.js

// Popup entrance animation
export const popupInitial = { opacity: 0, y: -10 };

export const popupExit = { opacity: 0, y: -10 };

// export const initialAnimate 
// export const afterAnimate
// use the 

// Dynamic animate config that adds "tap" effect
export const popupAnimate = (isTapped) => ({
  opacity: 1,
  y: 0,
  scale: isTapped ? [1, 1.05, 0.95, 1.02, 1] : 1,
  rotate: isTapped ? [0, 2, -2, 1, 0] : 0,
  transition: {
    duration: isTapped ? 0.5 : 0.2,
    type: isTapped ? "tween" : "spring",
    stiffness: 300,
  },
});

// Optional: clean reusable transition (if needed elsewhere)
export const defaultTransition = {
  duration: 0.2,
  ease: "easeInOut",
};
