// HeroAnimations.jsx

// --- Pop-up Icon Animations ---

// Initial state for the icons: invisible and slightly smaller
export const popupInitial = { opacity: 0, scale: 0.5, y: -10 };

// Exit state for the icons: fade out and shrink
export const popupExit = { opacity: 0, scale: 0.5, y: -10 };

// Dynamic animate state for icons, which includes a "wobble" effect on tap
export const popupAnimate = (isTapped) => ({
  opacity: 1,
  scale: isTapped ? [1, 1.1, 0.9, 1.05, 1] : 1, // Enhanced bounce effect
  y: 0,
  rotate: isTapped ? [0, 5, -5, 2, 0] : 0,
  transition: {
    duration: isTapped ? 0.5 : 0.2,
    type: isTapped ? "tween" : "spring",
    stiffness: 300,
  },
});


// --- Hero Image Animation ---

// Reusable animation props for the main hero image
export const imageAnimationProps = {
  whileHover: { rotate: 6, scale: 1.05 },
  whileTap: { 
    scale: 0.95,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  transition: { type: "spring", stiffness: 300, damping: 10 }
};


