import React, { useEffect } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
// import 'fullpage.js/vendors/scrolloverflow'; // required if you set scrollOverflow: true

import Header from '../Header';
import Hero from '../Hero';
import Projects from '../Projects';
import Stack from '../Stack';
import HomepageContact from '../HomepageContact';
import Footer from '../Footer';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';

// TODO - Add fade in animations on scroll
// TODO - Fix the clustering that occurs when you enter dev mode on browser





// Tip: remove min-h-screen from child sections when using fullPage
const Homepage = () => {
  // Run fullPage only on “safe” desktop widths; fallback to normal scroll elsewhere
  const isFullpageWidth = useMediaQuery({ minWidth: 1024, maxWidth: 1920 });
  const location = useLocation();

  useEffect(() => {
    if (!isFullpageWidth) return;

    // init
    new fullpage('#fullpage', {
      // core behavior
      autoScrolling: true,
      navigation: true,
      scrollOverflow: true,       // allow internal scroll if content > viewport
      fitToSection: false,        // prevents forced resizing that can cause spill
      scrollingSpeed: 700,
      credits: { enabled: false }, // remove 'made with fullpage.js' watermark

      // responsive fallbacks (auto-disables fullPage when below thresholds)
      responsiveWidth: 1024,
      responsiveHeight: 600,

      // stabilize on render + during resizes
      afterRender() {
        if (window.fullpage_api?.reBuild) window.fullpage_api.reBuild();
      },
      afterResize() {
        if (window.fullpage_api?.reBuild) window.fullpage_api.reBuild();
      },
    });

    // extra safety: reBuild on window resize (DevTools open/close)
    const onResize = () => window.fullpage_api?.reBuild?.();
    window.addEventListener('resize', onResize);

    // cleanup
    return () => {
      window.removeEventListener('resize', onResize);
      window.fullpage_api?.destroy('all');
    };
  }, [isFullpageWidth]);

  // Handle scroll to projects section when navigating back from MoreProjects
  useEffect(() => {
    if (location.state?.scrollToProjects) {
      const projectsSection = document.getElementById('projects-section');
      if (projectsSection) {
        setTimeout(() => {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Small delay to ensure the page has rendered
      }
    }
  }, [location.state]);

  return isFullpageWidth ? (
    <div id="fullpage">
      <div className="section">
        <Header hasScrollableContent={false} />
        <Hero />
      </div>
      <div className="section">
        <Projects />
      </div>
      <div className="section">
        <Stack />
      </div>
      <div className="section">
        <HomepageContact />
      </div>
      <div className="section">
        <Footer />
      </div>
    </div>
  ) : (
    <>
      <Header hasScrollableContent={false} />
      <Hero />
      <Projects />
      <Stack />
      <HomepageContact />
      <Footer />
    </>
  );
};

export default Homepage;
