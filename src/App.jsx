import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Project from "./Project";
import "./App.css";

const App = () => {
  const [dark, setDark] = useState(true);
  const [hireCount, setHireCount] = useState(0);
  const [lang, setLang] = useState("en");

  return (
    <div className={dark ? "dark" : "light"}>
      <BrowserRouter>
        <Navbar
          dark={dark}
          setDark={setDark}
          hireCount={hireCount}
          lang={lang}
          setLang={setLang}
        />

        <Routes>
          <Route path="/" element={<Portfolio setHireCount={setHireCount} lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/work" element={<Work lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
          <Route path="/project" element={<Project lang={lang} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;