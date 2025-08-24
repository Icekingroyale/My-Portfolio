import React, { useEffect } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import Header from '../Header';
import Footer from '../Footer';
import MoreProjects from '../MoreProjects';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';


const MoreProjectsPage = () => {
  const isFullpageWidth = useMediaQuery({ minWidth: 1024, maxWidth: 1920 });
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/', { replace: true, state: { scrollToProjects: true } });
  };

  useEffect(() => {
    if (!isFullpageWidth) return;

    // Initialize fullpage
    new fullpage('#fullpage', {
      autoScrolling: true,
      navigation: true,
      scrollOverflow: true,
      fitToSection: false,
      scrollingSpeed: 700,
      credits: { enabled: false }, // remove 'made with fullpage.js' watermark
      responsiveWidth: 1024,
      responsiveHeight: 600,

      afterRender() {
        if (window.fullpage_api?.reBuild) window.fullpage_api.reBuild();
      },
      afterResize() {
        if (window.fullpage_api?.reBuild) window.fullpage_api.reBuild();
      },
    });

    const onResize = () => window.fullpage_api?.reBuild?.();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      window.fullpage_api?.destroy('all');
    };
  }, [isFullpageWidth]);

  return isFullpageWidth ? (
    <div id="fullpage">
      <div className="section">
        <Header hasScrollableContent={true} />
        <button 
          onClick={handleGoBack}
          className="fixed top-24 left-6 z-50 bg-white/90 hover:bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Go Back
        </button>
        <MoreProjects />
      </div>
      <div className="section">
        <Footer />
      </div>
    </div>
  ) : (
    <>
      <Header hasScrollableContent={true} />
      <button 
        onClick={handleGoBack}
        className="fixed top-28 left-4 z-50 bg-white/90 hover:bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-200 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Go Back
      </button>
      <MoreProjects />
      <Footer />
    </>
  );
};

export default MoreProjectsPage;