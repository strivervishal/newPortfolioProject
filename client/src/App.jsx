import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactUs from "./components/ContactUs";
import Projects from "./components/Projects";
import Education from "./components/Education";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contactUs" exact element={<ContactUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} /> 
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
};

export default App;
