// ScrollAnimationWrapper.js
import React from "react";
import { motion } from "framer-motion";

const scrollFadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }, // This triggers animation when 25% of the element is in view
};

const ScrollAnimation = ({ isLargeScreen, children, className = "" }) => {
  return isLargeScreen ? (
    <>{children}</> // For large screens, just render the children without animation
  ) : (
    <motion.section
      initial={scrollFadeUp.initial}
      whileInView={scrollFadeUp.whileInView}
      transition={scrollFadeUp.transition}
      viewport={scrollFadeUp.viewport}
      className={className}
    >
      {children} {/* Wrap the children with animation */}
    </motion.section>
  );
};

export { ScrollAnimation, scrollFadeUp };
