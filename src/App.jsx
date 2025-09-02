import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import AboutPage from "./components/pages/AboutPage";
import ResumePage from "./components/pages/ResumePage";
import ScrollToTop from "./components/ScrollToTop";
import ContactPage from "./components/pages/ContactPage";
import MoreProjectsPage from "./components/pages/MoreProjectsPage";

//05-04-2025
// tODO - Remove the default drap animation when you scroll to the start and end of the pages in mobile screen

const App = () => {
  return (
    <div className='overflow-hidden bg-green-400'>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/more-projects" element={<MoreProjectsPage />} />
      </Routes>
    </div>
  );
};

export default App;
