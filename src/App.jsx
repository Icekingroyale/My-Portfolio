import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import About from "./components/navlinks/About";
import Resume from "./components/navlinks/Resume";
import Contact from "./components/navlinks/Contact";



//05-04-2025
// tODO - Remove the default drap animation when you scroll to the start and end of the pages in mobile screen

const App = () => {
  return (
    <div className='overflow-hidden'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
};

export default App;
