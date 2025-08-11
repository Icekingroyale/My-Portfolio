import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperMobileFullpage = ({ sections, onSectionChange }) => {
  const swiperRef = useRef(null);

  // Prevent body scroll when component mounts
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, []);

  return (
    <div className="h-screen w-full">
      <Swiper
        ref={swiperRef}
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={{
          sensitivity: 0.5, // Reduced for better nested scroll detection
          releaseOnEdges: true,
          forceToAxis: true,
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet custom-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
        }}
        speed={800} // Animation speed
        allowTouchMove={true}
        threshold={80} // Increased threshold - need more deliberate swipe to change sections
        longSwipesRatio={0.5} // Requires 50% of slide to trigger change
        touchRatio={0.8} // Slightly reduce touch sensitivity
        followFinger={true}
        shortSwipes={false} // Disable short swipes - only long deliberate ones work
        longSwipes={true}
        nested={true} // Enable nested scrolling
        simulateTouch={true}
        onSlideChange={(swiper) => {
          onSectionChange?.(swiper.activeIndex);
        }}
        onTouchStart={(swiper, event) => {
          // Store initial touch position for nested scroll detection
          swiper.initialTouchY = event.touches[0].clientY;
        }}
        onTouchMove={(swiper, event) => {
          const currentY = event.touches[0].clientY;
          const deltaY = swiper.initialTouchY - currentY;
          const slideEl = swiper.slides[swiper.activeIndex];
          
          // Check if content within slide can scroll
          if (slideEl) {
            const scrollableEl = slideEl.querySelector('.scrollable-content');
            if (scrollableEl) {
              const canScrollDown = scrollableEl.scrollTop < (scrollableEl.scrollHeight - scrollableEl.offsetHeight);
              const canScrollUp = scrollableEl.scrollTop > 0;
              
              // If trying to scroll down and content can scroll down, don't trigger swiper
              if (deltaY > 0 && canScrollDown) {
                return;
              }
              // If trying to scroll up and content can scroll up, don't trigger swiper
              if (deltaY < 0 && canScrollUp) {
                return;
              }
            }
          }
        }}
        loop={true} // Infinite loop
        modules={[Mousewheel, Keyboard, Pagination]}
        className="h-full w-full swiper-mobile-fullpage"
      >
        {sections.map((SectionComponent, index) => (
          <SwiperSlide key={index} className="flex items-start justify-start">
            <div className="scrollable-content w-full h-full overflow-y-auto overflow-x-hidden">
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

        /* Hide scrollbars but allow scrolling within sections */
        .swiper-mobile-fullpage .scrollable-content::-webkit-scrollbar {
          width: 2px;
        }
        
        .swiper-mobile-fullpage .scrollable-content::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .swiper-mobile-fullpage .scrollable-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 1px;
        }
        
        .swiper-mobile-fullpage .scrollable-content {
          -ms-overflow-style: none;
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
        }

        /* Smooth scroll behavior within sections */
        .swiper-mobile-fullpage .scrollable-content {
          scroll-behavior: smooth;
        }

        /* Prevent bounce effect on iOS */
        .swiper-mobile-fullpage .scrollable-content {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </div>
  );
};

export default SwiperMobileFullpage;