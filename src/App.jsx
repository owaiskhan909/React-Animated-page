import React from "react";
import "./app.css";

import logoImage from "./assets/logo.png";
import brandLogo1 from "./assets/brand1.png";
import brandLogo2 from "./assets/brand2.png";
import brandLogo3 from "./assets/brand3.png";
import brandLogo4 from "./assets/brand4.png";
import brandLogo5 from "./assets/brand5.png";
import brandLogo6 from "./assets/brand6.png";
import brandLogo7 from "./assets/brand7.png";

import { FaPhone, FaArrowRight, FaArrowDown } from "react-icons/fa";

// ✅ Import your animated background
import AnimatedHeroBackground from "./Section/AnimatedBackground";
import AboutSection from "./Section/AboutSection";
import ExceptionalSection from "./Section/ExceptionalSection";

function App() {
  return (
    <>
      <div className="container">
        <div className="hero">
          {/* ✅ Background inserted at the top */}
          <AnimatedHeroBackground jsx={true} />

          {/* Navbar */}
          <header className="navbar">
            <div className="logo">
              <img src={logoImage} alt="Logo" />
            </div>
            <nav className="nav-links">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#" className="services-link">
                Services
                <FaArrowDown size={14} color="white" className="arrow-icon" />
              </a>
              <a href="#">Case Studies</a>
              <div>
                <FaPhone size={18} color="white" className="phone-icon" />
              </div>
              <div className="nav-actions">
                <div className="call-animation-wrap">
                  <button className="audit-btn">Book a Call</button>
                  <span className="line-link"></span>
                  <FaArrowRight size={18} className="arrow-right-icon" />
                </div>
              </div>
            </nav>
          </header>

          <div className="hero-content">
            <button className="free-audit">
              Book a free 15-min audit call
            </button>
            <h1>
              Grow your digital presence today <br />
              with real{" "}
              <span className="human-led-animation">
                <span className="word">
                  <span>h</span>
                  <span>u</span>
                  <span>m</span>
                  <span>a</span>
                  <span>n</span>
                  <span>-</span>
                  <span>l</span>
                  <span>e</span>
                  <span>d</span>
                </span>
              </span>{" "}
              strategy.
            </h1>

            <p className="subtext">
              Based in Manchester, we craft bespoke websites and branding <br />
              that are as smart as they are stunning.
            </p>
            <div className="cta-section">
              <button className="consult-btn">Get Free Consultation</button>
              <img
                src="https://i.imgur.com/TFyQbZk.png"
                alt="User Icon"
                className="user-avatar"
              />
            </div>
            <p className="brand-para">
              Trusted by enterprises all over the world:
            </p>

            {/* Brand Logos Marquee Animation */}
            <div className="brands-marquee">
              <div className="brands-track">
                <img src={brandLogo1} alt="Brand" />
                <img src={brandLogo2} alt="Brand" />
                <img src={brandLogo3} alt="Brand" />
                <img src={brandLogo4} alt="Brand" />
                <img src={brandLogo5} alt="Brand" />
                <img src={brandLogo6} alt="Brand" />
                <img src={brandLogo7} alt="Brand" />
                {/* Duplicate for seamless loop */}
                <img src={brandLogo1} alt="Brand" />
                <img src={brandLogo2} alt="Brand" />
                <img src={brandLogo3} alt="Brand" />
                <img src={brandLogo4} alt="Brand" />
                <img src={brandLogo5} alt="Brand" />
                <img src={brandLogo6} alt="Brand" />
                <img src={brandLogo7} alt="Brand" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
      <ExceptionalSection />
    </>
  );
}

export default App;
