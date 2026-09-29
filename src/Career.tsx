import { useEffect, useRef } from "react";
import "./styles/Career.css";

const milestones = [
  {
    role: "BSc (Hons) Information Technology",
    company: "ISMT College · University of Sunderland",
    year: "2025 — PRESENT",
    description:
      "Building a strong foundation in software development, computer systems, networking and modern IT practice as part of my undergraduate degree.",
  },
  {
    role: "Enterprise Project",
    company: "CET 257 · ISMT College",
    year: "2026",
    description:
      "Developing practical project experience in an enterprise team environment as Deputy Project Manager, contributing to planning, communication, teamwork and technical delivery.",
  },
  {
    role: "Building Real Projects",
    company: "Independent & Coursework Projects",
    year: "NOW",
    description:
      "Turning coursework into working software through full-stack websites, C# applications, embedded experiments and ChessMate, a Flutter mobile application.",
  },
  {
    role: "Preparing for Industry",
    company: "Professional Development",
    year: "CURRENT FOCUS",
    description:
      "Expanding practical experience in full-stack development, mobile development, Linux, networking and UI/UX while preparing for internship opportunities.",
  },
];

const Career = () => {
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const info = infoRef.current;
    if (!info) return;

    let frame = 0;

    const updateDot = () => {
      const rect = info.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.72;
      const travel = Math.max(rect.height - viewportHeight * 0.44, 1);
      const progress = Math.max(0, Math.min(1, (start - rect.top) / travel));

      info.style.setProperty("--dot-progress", String(progress));
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateDot);
    };

    updateDot();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateDot);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateDot);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&amp;</span>
          <br /> experience
        </h2>

        <div className="career-info" ref={infoRef}>
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {milestones.map((item) => (
            <div className="career-info-box" key={item.role}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.year}</h3>
              </div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
