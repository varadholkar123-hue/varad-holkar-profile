import React from "react";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaSnapchat,
  FaDownload,
} from "react-icons/fa";

import img4 from "./assets/image.png";

const About = ({ lang }) => {
  return (
    <div className="about-page">

      <div className="about-container">

        <div className="header">

          <img
            src={img4}
            alt="profile"
            className="profile-img"
            height={140}
          />

          <h1>
            {lang === "en" ? "Varad Holkar" : "वरद होळकर"}
          </h1>

          <p>
            {lang === "en"
              ? "Cyber Expert | Security Analyst 🚀"
              : "सायबर एक्सपर्ट | सिक्युरिटी अनॅलिस्ट 🚀"}
          </p>

          <br /><br />

          <a href="/resume.pdf" download className="resume-btn">
            <FaDownload />{" "}
            {lang === "en" ? "Download Resume" : "रेझ्युमे डाउनलोड करा"}
          </a>

        </div>

        {/* ABOUT SECTION */}
        <section>
          <h2>{lang === "en" ? "About Me" : "माझ्याबद्दल"}</h2>

          <p>
            {lang === "en"
              ? "I am a passionate web developer who loves building modern and responsive web applications. I enjoy learning new technologies and continuously improving my skills."
              : "मी एक उत्साही वेब डेव्हलपर आहे ज्याला आधुनिक आणि responsive web applications बनवायला आवडतात. मला नवीन टेक्नॉलॉजी शिकायला आवडते."}
          </p>
        </section>

        {/* SKILLS */}
        <section>
          <h2>{lang === "en" ? "Skills" : "कौशल्ये"}</h2>

          <div className="skills">
            <div>⚛ React</div>
            <div>🟨 JavaScript</div>
            <div>🎨 CSS</div>
            <div>🌐 HTML</div>
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2>{lang === "en" ? "Projects" : "प्रोजेक्ट्स"}</h2>

          <p>
            {lang === "en"
              ? "Built multiple projects including portfolio websites and responsive web apps."
              : "मी अनेक प्रोजेक्ट्स बनवले आहेत जसे की portfolio websites आणि responsive web apps."}
          </p>
        </section>

        {/* SOCIAL */}
        <section className="social">

          <h2>
            {lang === "en" ? "Connect With Me" : "माझ्याशी संपर्क करा"}
          </h2>

          <div className="icons">

            <a href="https://github.com/varadholkar/varad">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/mynetwork/grow/">
              <FaLinkedin />
            </a>

            <a href="https://www.whatsapp.com/">
              <FaWhatsapp />
            </a>

            <a href="https://web.telegram.org/a/">
              <FaTelegram />
            </a>

            <a href="https://www.snapchat.com/">
              <FaSnapchat />
            </a>

          </div>

        </section>

      </div>

    </div>
  );
};

export default About;