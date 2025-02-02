import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/navlinks/About";
import Resume from "./components/navlinks/Resume";
import Contact from "./components/navlinks/Contact";

const App = () => {
  return (
    <div className='overflow-x-hidden bg-primary'>
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
