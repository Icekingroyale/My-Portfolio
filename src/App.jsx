import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { BrowserRouter, Router, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
