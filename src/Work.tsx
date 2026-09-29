import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import WorkImage from "./WorkImage";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  { name: "CarRentalApp", category: "Desktop / Application", tools: "C#, .NET, Desktop Development", href: "https://github.com/pyatrick666/CarRentalApp" },
  { name: "AccountRegistrationSystem", category: "Console / C#", tools: "C#, OOP, File Handling", href: "https://github.com/pyatrick666/AccountRegistrationSystem" },
  { name: "RaspberryPi-PICO", category: "Embedded / Hardware", tools: "Raspberry Pi Pico, Embedded Systems", href: "https://github.com/pyatrick666/RaspberryPi-PICO" },
  { name: "ePortfolio", category: "Web / Coursework", tools: "HTML, CSS, JavaScript, Bootstrap", href: "https://github.com/pyatrick666/ePortfolio" },
  { name: "cit-e-cycling-web-portal", category: "Web / Full Stack", tools: "Web Development, Database, UI", href: "https://github.com/pyatrick666/cit-e-cycling-web-portal" },
  { name: "ChessMate", category: "Mobile / Game", tools: "Flutter, Dart, Firebase, AdMob", href: "https://github.com/pyatrick666/ChessMate" },
];

const Work = () => {
  useGSAP(() => {
    const boxes = Array.from(document.querySelectorAll<HTMLElement>(".work-box"));
    const flex = document.querySelector<HTMLElement>(".work-flex");
    const container = document.querySelector<HTMLElement>(".work-container");
    const section = document.querySelector<HTMLElement>(".work-section");

    if (!boxes.length || !flex || !container || !section) return;

    const setTranslateX = () => {
      const first = boxes[0].getBoundingClientRect();
      const parent = flex.getBoundingClientRect();
      const rectLeft = container.getBoundingClientRect().left;
      const padding = parseFloat(window.getComputedStyle(boxes[0]).paddingLeft) || 0;
      return Math.max(0, first.width * boxes.length - (rectLeft + parent.width) + padding);
    };

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => "+=" + setTranslateX(),
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    timeline.to(flex, {
      x: () => -setTranslateX(),
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <article className="work-box" key={project.name}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{String(index + 1).padStart(2, "0")}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>

              <WorkImage
                image="/images/placeholder.webp"
                alt={project.name}
                href={project.href}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
