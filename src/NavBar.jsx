import React, { useState } from "react";
import { Link } from "react-router-dom";
import ChatBot from "./ChatBot";

const Navbar = ({ dark, setDark, hireCount, lang, setLang }) => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">VARAD</div>

        <ul className="nav-links">
          <li><Link to="/">{lang === "en" ? "HOME" : "होम"}</Link></li>
          <li><Link to="/about">{lang === "en" ? "ABOUT" : "माझ्याबद्दल"}</Link></li>
          <li><Link to="/work">{lang === "en" ? "WORK" : "काम"}</Link></li>
          <li><Link to="/contact">{lang === "en" ? "CONTACT" : "संपर्क"}</Link></li>
          <li><Link to="/project">{lang === "en" ? "PROJECT" : "प्रोजेक्ट"}</Link></li>

          {/* AI BUTTON */}
          <li>
            <button className="nav-btn" onClick={() => setOpenChat(true)}>
              🤖 AI
            </button>
          </li>

          {/* DARK MODE */}
          <li>
            <button className="nav-btn" onClick={() => setDark(!dark)}>
              {dark ? "🌙 DARK" : "☀️ LIGHT"}
            </button>
          </li>

          {/* LANGUAGE */}
          <li>
            <button
              className="nav-btn"
              onClick={() => setLang(lang === "en" ? "mr" : "en")}
            >
              🌐 {lang === "en" ? "ENGLISH" : "मराठी"}
            </button>
          </li>

          {/* NOTIFICATION */}
          <li className="notify">
            🔔 {hireCount > 0 && <span className="badge">{hireCount}</span>}
          </li>
        </ul>
      </nav>

      {openChat && <ChatBot close={() => setOpenChat(false)} />}
    </>
  );
};

export default Navbar;