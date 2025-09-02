import React, { useEffect } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import Header from '../Header'
import About from '../About';
import Footer from '../Footer';
import { useMediaQuery } from 'react-responsive';

const AboutPage = () => {
  const isFullpageWidth = useMediaQuery({ minWidth: 1024, maxWidth: 1920 });

  useEffect(() => {
    if (!isFullpageWidth) return;

    // Initialize fullpage
    new fullpage('#fullpage', {
      autoScrolling: true,
      navigation: true,
      scrollOverflow: true,
      fitToSection: false,
      scrollingSpeed: 700,
      credits: { enabled: false },
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
        <About />
      </div>
      <div className="section">
        <Footer />
      </div>
    </div>
  ) : (
    <>
      <Header hasScrollableContent={false} />
      <About />
      <Footer />
    </>
  );
};

export default AboutPage;
