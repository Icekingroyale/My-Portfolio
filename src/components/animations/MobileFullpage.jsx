import React, { useState, useEffect, useRef, useCallback } from 'react';

const MobileFullpage = ({ sections, onSectionChange, currentSection: externalCurrentSection }) => {
  const [currentSection, setCurrentSection] = useState(externalCurrentSection || 0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  
  const totalSections = sections.length;
  
  // Minimum swipe distance (in pixels) for deliberate gesture
  const MIN_SWIPE_DISTANCE = 80;
  
  const goToSection = useCallback((sectionIndex, smooth = true) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const container = containerRef.current;
    
    if (container) {
      container.style.transition = smooth ? 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none';
      container.style.transform = `translateY(-${sectionIndex * 100}vh)`;
    }
    
    setCurrentSection(sectionIndex);
    onSectionChange?.(sectionIndex);
    
    // Reset animation lock after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, smooth ? 800 : 0);
  }, [isAnimating, onSectionChange]);

  const handleTouchStart = (e) => {
    if (isAnimating) return;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    // Prevent default scrolling
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    if (isAnimating) return;
    
    touchEndY.current = e.changedTouches[0].clientY;
    const swipeDistance = touchStartY.current - touchEndY.current;
    
    // Check if swipe distance meets minimum threshold
    if (Math.abs(swipeDistance) < MIN_SWIPE_DISTANCE) return;
    
    let nextSection;
    
    if (swipeDistance > 0) {
      // Swipe up - go to next section or loop to first
      nextSection = currentSection === totalSections - 1 ? 0 : currentSection + 1;
    } else {
      // Swipe down - go to previous section or loop to last
      nextSection = currentSection === 0 ? totalSections - 1 : currentSection - 1;
    }
    
    goToSection(nextSection);
  };

  // Keyboard navigation (optional)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isAnimating) return;
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextSection = currentSection === totalSections - 1 ? 0 : currentSection + 1;
        goToSection(nextSection);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const nextSection = currentSection === 0 ? totalSections - 1 : currentSection - 1;
        goToSection(nextSection);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, goToSection, isAnimating, totalSections]);

  // Prevent body scroll on mobile
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Main container */}
      <div
        ref={containerRef}
        className="w-full h-full"
        style={{
          height: `${totalSections * 100}vh`,
          transform: `translateY(-${currentSection * 100}vh)`,
          transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {sections.map((SectionComponent, index) => (
          <div
            key={index}
            className="w-full h-screen flex flex-col"
            style={{ height: '100vh' }}
          >
            {SectionComponent}
          </div>
        ))}
      </div>

      {/* Optional: Section indicators */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 space-y-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            disabled={isAnimating}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSection
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Optional: Swipe hint for first visit */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="text-white/70 text-sm text-center animate-bounce">
          <div className="mb-1">↕</div>
          <div>Swipe to navigate</div>
        </div>
      </div>
    </div>
  );
};

export default MobileFullpage;