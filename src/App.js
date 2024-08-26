import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/AboutMe/About";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/ContactMe/Contact";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/portfolio-app" element={<Home />} />
        <Route exact path="/portfolio-app/about" element={<About />} />
        <Route exact path="/portfolio-app/resume" element={<Resume />} />
        <Route exact path="/portfolio-app/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
