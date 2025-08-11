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
          sensitivity: 1,
          releaseOnEdges: true,
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
        threshold={50} // Minimum swipe distance for deliberate gesture
        longSwipesRatio={0.4} // Requires 40% of slide to trigger change
        onSlideChange={(swiper) => {
          onSectionChange?.(swiper.activeIndex);
        }}
        loop={true} // Infinite loop like you wanted
        modules={[Mousewheel, Keyboard, Pagination]}
        className="h-full w-full swiper-mobile-fullpage"
      >
        {sections.map((SectionComponent, index) => (
          <SwiperSlide key={index} className="flex items-start justify-center">
            <div className="w-full h-full overflow-y-auto">
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

        /* Hide scrollbars but allow scrolling within sections if needed */
        .swiper-mobile-fullpage .swiper-slide::-webkit-scrollbar {
          display: none;
        }
        
        .swiper-mobile-fullpage .swiper-slide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default SwiperMobileFullpage;