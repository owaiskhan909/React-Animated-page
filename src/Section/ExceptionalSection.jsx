import React, { useEffect, useRef, useState } from "react";

import "./ExceptionalSection.css";

const CPimage = "/newassects/CPimage.png";
const newavtar = "/newassects/image.png";

const datareport01 = "/newassects/datareport01.png";
const datareport02 = "/newassects/datareport02.png";
const exicon1 = "/newassects/ex01.png";
const exicon2 = "/newassects/ex02.png";
const exicon3 = "/newassects/ex03.png";
const exicon4 = "/newassects/ex04.png";

const backgroundtexture = "/newassects/exceptionbackground.png";

const ExceptionalSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cardAnimations, setCardAnimations] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [orbsVisible, setOrbsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setOrbsVisible(true);
          setTimeout(
            () => setCardAnimations((prev) => [true, ...prev.slice(1)]),
            300
          );
          setTimeout(
            () =>
              setCardAnimations((prev) => [prev[0], true, ...prev.slice(2)]),
            500
          );
          setTimeout(
            () =>
              setCardAnimations((prev) => [...prev.slice(0, 2), true, prev[3]]),
            700
          );
          setTimeout(
            () => setCardAnimations((prev) => [...prev.slice(0, 3), true]),
            900
          );
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const BarChart = () => (
    <div className="bar-chart">
      {[35, 50, 25, 55, 40].map((height, index) => (
        <div
          key={index}
          className={`bar ${isVisible ? "animate" : ""}`}
          style={{
            height: `${height}px`,
            animationDelay: `${index * 150}ms`,
          }}
        />
      ))}
    </div>
  );

  const LineChart = () => (
    <div className="line-chart">
      <svg width="120" height="48" viewBox="0 0 120 48">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <path
          d="M5,40 L20,35 L35,38 L50,25 L65,28 L80,18 L95,25 L110,15"
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`line-path ${isVisible ? "animate" : ""}`}
        />
        <circle
          cx="80"
          cy="18"
          r="3"
          fill="#ec4899"
          className={`line-dot ${isVisible ? "animate" : ""}`}
        />
      </svg>
      <div className={`data-label ${isVisible ? "animate" : ""}`}>
        <div>$13k</div>
        <div>Apr 21, 2023</div>
      </div>
    </div>
  );

  const MonitorIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );

  const LayersIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polygon points="12,2 2,7 12,12 22,7 12,2" />
      <polyline points="2,17 12,22 22,17" />
      <polyline points="2,12 12,17 22,12" />
    </svg>
  );

  return (
    <div className="exceptional-container">
      {/* Enhanced Background Orbs with Scroll Animation */}
      <div className={`bg-orb-1 ${orbsVisible ? "animate-orb" : ""}`} />
      <div className={`bg-orb-2 ${orbsVisible ? "animate-orb" : ""}`} />

      {/* Additional Animated Orbs */}
      <div className={`bg-orb-3 ${orbsVisible ? "animate-orb" : ""}`} />
      <div className={`bg-orb-4 ${orbsVisible ? "animate-orb" : ""}`} />
      <div className={`bg-orb-5 ${orbsVisible ? "animate-orb" : ""}`} />
      <div className={`bg-orb-6 ${orbsVisible ? "animate-orb" : ""}`} />
      <div className={`bg-orb-7 ${orbsVisible ? "animate-orb" : ""}`} />
      <div className={`bg-orb-8 ${orbsVisible ? "animate-orb" : ""}`} />

      <div className={`orbitnew ${orbsVisible ? "animate-texture" : ""}`}>
        <img src={backgroundtexture} alt="cp" />
      </div>

      <section ref={sectionRef} className="exceptional-section">
        <div className={`left-panel ${isVisible ? "visible" : ""}`}>
          <div className="dark-card">
            <div className="cp-background">
              <img src={CPimage} alt="cp" />
            </div>

            <div className="main-title">
              We create{" "}
              <span className="highlight-text">exceptional websites</span>
            </div>

            <div className={`testimonial ${isVisible ? "visible" : ""}`}>
              <div className="avatar">
                <div className="avatar-inner">
                  <img src={newavtar} alt="cp" />
                </div>
              </div>
              <div className="testimonial-bubble">
                <div className="testimonial-text">
                  "Experienced best digital agency in the town"
                </div>
                <div className="testimonial-name">John Doe</div>
              </div>
            </div>

            <div
              className={`data-card ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: "0.5s" }}
            >
              <img src={datareport01} alt="cp" />
            </div>

            <div
              className={`data-card ${
                isVisible ? "visible" : ""
              } datracadbottom`}
              style={{ transitionDelay: "0.8s" }}
            >
              <img src={datareport02} alt="cp" />
            </div>
          </div>
        </div>

        <div className={`right-panel ${isVisible ? "visible" : ""}`}>
          <div className="cards-grid">
            <div
              className={`feature-card yellow ${
                cardAnimations[0] ? "animate" : ""
              }`}
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="feature-icon">
                <img src={exicon1} alt="cp" />
              </div>
              <div className="feraturingimagecontent">
                <h3 className="feature-title">Strategy-first Approach</h3>
                <p className="feature-description">
                  Lorem ipsum amet, consectetur adipiscing elit. Integer mollis,
                  libero eget volutpat porta
                </p>
              </div>
            </div>

            <div
              className={`feature-card white ${
                cardAnimations[1] ? "animate" : ""
              }`}
              style={{ transitionDelay: "0.5s" }}
            >
              <div className="feature-icon">
                <img src={exicon2} alt="cp" />
              </div>
              <div className="feraturingimagecontent">
                <h3 className="feature-title">Tailored UX/UI Design</h3>
                <p className="feature-description">
                  Lorem ipsum amet, consectetur adipiscing elit. Integer mollis,
                  libero eget volutpat porta
                </p>
              </div>
            </div>

            <div
              className={`feature-card white ${
                cardAnimations[2] ? "animate" : ""
              }`}
              style={{ transitionDelay: "0.7s" }}
            >
              <div className="feature-icon">
                <img src={exicon3} alt="cp" />
              </div>
              <div className="feraturingimagecontent">
                <h3 className="feature-title">Future-proof Development</h3>
                <p className="feature-description">
                  Lorem ipsum amet, consectetur adipiscing elit. Integer mollis,
                  libero eget volutpat porta
                </p>
              </div>
            </div>

            <div
              className={`feature-card white ${
                cardAnimations[3] ? "animate" : ""
              }`}
              style={{ transitionDelay: "0.9s" }}
            >
              <div className="feature-icon">
                <img src={exicon4} alt="cp" />
              </div>
              <div className="feraturingimagecontent">
                <h3 className="feature-title">Long-term Support & Growth</h3>
                <p className="feature-description">
                  Lorem ipsum amet, consectetur adipiscing elit. Integer mollis,
                  libero eget volutpat porta
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExceptionalSection;
