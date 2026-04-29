import React from "react";
import img2 from './assets/image.png';
import { text } from './utils/lang.jsx'

const Portfolio = ({ setHireCount, lang }) => {
  return (
    <div style={{ background: "black" }} className="portfolio">

      <div className="hero">

        <div className="hero-left">
          <img src={img2} alt="hero" />
        </div>

        <div className="hero-right">

          {/* 🔥 TRANSLATED INTRO */}
          <div className="intro">
            <h2><strong>{text[lang].hello}</strong></h2>
            <h1>{text[lang].name}</h1>
            <p>{text[lang].role}</p>
            <span>{text[lang].company}</span>

            <button
              className="hire-btn"
              onClick={() => setHireCount(prev => prev + 1)}
            >
              {text[lang].hire} 🚀
            </button>

          </div>

        </div>

        <div className="hero-text">
          <h1>HOLKAR</h1>
        </div>

      </div>

      {/* SKILLS SECTION */}
      <div className="second">

        <div className="skills-wrap">
          <h2>{text[lang].skills}</h2>

          <div className="skill-box">
            <p>HTML <span>90%</span></p>
            <div className="bar"><div className="fill html"></div></div>
          </div>

          <div className="skill-box">
            <p>CSS <span>85%</span></p>
            <div className="bar"><div className="fill css"></div></div>
          </div>

          <div className="skill-box">
            <p>JavaScript <span>80%</span></p>
            <div className="bar"><div className="fill js"></div></div>
          </div>

          <div className="skill-box">
            <p>React <span>75%</span></p>
            <div className="bar"><div className="fill react"></div></div>
          </div>

          <div className="skill-box">
            <p>Node.js <span>60%</span></p>
            <div className="bar"><div className="fill node"></div></div>
          </div>

          <div className="skill-box">
            <p>Git & GitHub <span>70%</span></p>
            <div className="bar"><div className="fill git"></div></div>
          </div>

          <div className="skill-box">
            <p>Ethical Hacking <span>65%</span></p>
            <div className="bar"><div className="fill hack"></div></div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Portfolio;