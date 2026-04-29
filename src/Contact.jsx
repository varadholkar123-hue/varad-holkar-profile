import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { text } from './utils/lang.jsx'

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Contact = ({ lang }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3rt60p8",
      "template_v01bduh",
      form.current,
      "A52DTH-7WHkuO4-y5"
    )
    .then(() => {
      alert(lang === "mr" ? "मेसेज पाठवला गेला ✅" : "Message Sent Successfully ✅");
    })
    .catch(() => {
      alert(lang === "mr" ? "त्रुटी ❌" : "Failed ❌");
    });

    e.target.reset();
  };

  return (
    <div className="contact-page">

      {/* TITLE */}
      <h1 className="title">
        {lang === "mr" ? "संपर्क करा" : "CONTACT ME"}
      </h1>

      <p className="subtitle">
        {lang === "mr"
          ? "चला काहीतरी शानदार बनवूया 🚀"
          : "Let’s build something amazing together 🚀"}
      </p>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <h2>
            {lang === "mr" ? "संपर्क साधा" : "Get In Touch"}
          </h2>

          <p><FaEnvelope /> varadholkar123@gmail.com</p>
          <p><FaPhone /> +91 898360 6088</p>

          <div className="socials">
            <a href="https://github.com/varadholkar/varad"><FaGithub /></a>
            <a href="https://www.linkedin.com/mynetwork/grow/"><FaLinkedin /></a>
            <a href="https://www.whatsapp.com/"><FaWhatsapp /></a>
            <a href="https://web.telegram.org/a/"><FaTelegram /></a>
          </div>
        </div>

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <input
            type="text"
            name="user_name"
            placeholder={lang === "mr" ? "तुझे नाव" : "Your Name"}
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder={lang === "mr" ? "तुझा ईमेल" : "Your Email"}
            required
          />

          <textarea
            name="message"
            placeholder={lang === "mr" ? "तुझा मेसेज" : "Your Message"}
            required
          ></textarea>

          <button type="submit">
            {lang === "mr" ? "मेसेज पाठवा 🚀" : "Send Message 🚀"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;