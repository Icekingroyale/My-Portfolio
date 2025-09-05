import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load all page components
const Homepage = lazy(() => import("./components/pages/Homepage"));
const AboutPage = lazy(() => import("./components/pages/AboutPage"));
const ResumePage = lazy(() => import("./components/pages/ResumePage"));
const ContactPage = lazy(() => import("./components/pages/ContactPage"));
const MoreProjectsPage = lazy(() => import("./components/pages/MoreProjectsPage"));

//05-04-2025
// tODO - Remove the default drap animation when you scroll to the start and end of the pages in mobile screen

const App = () => {
  return (
    <div className='overflow-hidden bg-green-400'>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/more-projects" element={<MoreProjectsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
