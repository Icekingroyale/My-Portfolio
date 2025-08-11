import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperMobileFullpage = ({ sections, onSectionChange }) => {
  const swiperRef = useRef(null);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isScrollingWithinSection, setIsScrollingWithinSection] = useState(false);

  // Prevent body scroll when component mounts
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, []);

  const handleTouchStart = (swiper, event) => {
    setTouchStartY(event.touches[0].clientY);
    setIsScrollingWithinSection(false);
  };

  const handleTouchMove = (swiper, event) => {
    const currentY = event.touches[0].clientY;
    const deltaY = touchStartY - currentY;
    const slideEl = swiper.slides[swiper.activeIndex];
    
    if (slideEl) {
      const scrollableEl = slideEl.querySelector('.scrollable-content');
      if (scrollableEl) {
        const canScrollDown = scrollableEl.scrollTop < (scrollableEl.scrollHeight - scrollableEl.offsetHeight - 10);
        const canScrollUp = scrollableEl.scrollTop > 10;
        
        // Only allow inner scrolling for SMALL movements (less than 30px)
        const isSmallMovement = Math.abs(deltaY) < 30;
        
        if (isSmallMovement) {
          // Small movement - check if we can scroll within content
          if ((deltaY > 0 && canScrollDown) || (deltaY < 0 && canScrollUp)) {
            setIsScrollingWithinSection(true);
            // Allow the inner scroll but prevent swiper movement
            event.stopPropagation();
            return false;
          }
        }
        
        // Large movement - always trigger section change regardless of inner scroll
        if (Math.abs(deltaY) >= 30) {
          setIsScrollingWithinSection(false);
          // Block inner scrolling during section transitions
          scrollableEl.style.overflow = 'hidden';
          setTimeout(() => {
            if (scrollableEl) scrollableEl.style.overflow = 'auto';
          }, 800);
        }
      }
    }
  };

  return (
    <div className="h-screen w-full">
      <Swiper
        ref={swiperRef}
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={{
          sensitivity: 0.3,
          releaseOnEdges: false, // Don't release on edges - maintain fullpage control
          forceToAxis: true,
          invert: false,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet custom-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
        }}
        speed={800}
        allowTouchMove={true}
        threshold={60} // Medium threshold for section changes
        longSwipesRatio={0.3} // Easier to trigger with deliberate swipes
        touchRatio={1} // Full touch sensitivity
        followFinger={false} // Don't follow finger - more discrete transitions
        shortSwipes={true} // Allow short swipes for section changes
        longSwipes={true}
        touchMoveStopPropagation={true} // Prevent event bubbling
        simulateTouch={true}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onSlideChange={(swiper) => {
          onSectionChange?.(swiper.activeIndex);
        }}
        loop={true}
        modules={[Mousewheel, Keyboard, Pagination]}
        className="h-full w-full swiper-mobile-fullpage"
      >
        {sections.map((SectionComponent, index) => (
          <SwiperSlide key={index} className="flex items-start justify-start">
            <div className="scrollable-content w-full h-screen overflow-y-auto overflow-x-hidden">
              {SectionComponent}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for the pagination dots */}
      <style jsx global>{`
        .swiper-mobile-fullpage .custom-bullet {
          width: 8px !important;
          height: 8px !important;
          background: rgba(255, 255, 255, 0.4) !important;
          opacity: 1 !important;
          margin: 6px 0 !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }
        
        .swiper-mobile-fullpage .custom-bullet-active {
          background: white !important;
          transform: scale(1.3) !important;
        }
        
        .swiper-mobile-fullpage .swiper-pagination-vertical {
          right: 16px !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          width: auto !important;
        }

        .swiper-mobile-fullpage .swiper-pagination-vertical .swiper-pagination-bullet {
          display: block !important;
        }

        /* Smooth transitions */
        .swiper-mobile-fullpage .swiper-slide {
          transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) !important;
        }

        /* Enhanced scrollbars to show when content is scrollable */
        .swiper-mobile-fullpage .scrollable-content::-webkit-scrollbar {
          width: 3px;
        }
        
        .swiper-mobile-fullpage .scrollable-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        
        .swiper-mobile-fullpage .scrollable-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.4);
          border-radius: 2px;
        }
        
        .swiper-mobile-fullpage .scrollable-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.6);
        }
        
        .swiper-mobile-fullpage .scrollable-content {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.4) rgba(255, 255, 255, 0.1);
        }

        /* Smooth scroll behavior within sections */
        .swiper-mobile-fullpage .scrollable-content {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }

        /* Add subtle indication when content is scrollable */
        .swiper-mobile-fullpage .scrollable-content {
          position: relative;
        }

        /* Fade effect at bottom when content continues */
        .swiper-mobile-fullpage .scrollable-content::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 30px;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.1));
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        /* Show fade when content is scrollable */
        .swiper-mobile-fullpage .scrollable-content:hover::after {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default SwiperMobileFullpage;