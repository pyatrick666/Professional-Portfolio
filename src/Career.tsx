import './styles/Career.css';

const Career = () => {
  return (
    <section className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&amp;</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline" aria-hidden="true">
            <div className="career-dot" />
          </div>

          <article className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Development Foundations</h4>
                <h5>Self-directed learning &amp; coursework</h5>
              </div>
              <h3>2019–2021</h3>
            </div>
            <p>
              Built my foundation in HTML, CSS, JavaScript and PHP through practical web projects and coursework, developing an early interest in creating interactive digital experiences.
            </p>
          </article>

          <article className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSc (Hons) Information Technology</h4>
                <h5>ISMT College · University of Sunderland</h5>
              </div>
              <h3>2025–NOW</h3>
            </div>
            <p>
              Studying Computer Systems Engineering with a focus on software development, databases, web technologies, enterprise projects, computer systems and networking.
            </p>
          </article>

          <article className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering &amp; Networking</h4>
                <h5>Current development</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Continuing to build practical experience across full-stack and mobile development, Linux, networking, UI/UX and interactive applications while developing projects for my professional portfolio.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Career;
