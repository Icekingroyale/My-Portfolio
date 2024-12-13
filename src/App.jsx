import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
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
