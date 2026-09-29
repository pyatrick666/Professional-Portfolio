import './styles/Career.css';

const milestones = [
  {
    number: '01',
    period: '2025 — PRESENT',
    title: 'BSc (Hons) Information Technology',
    subtitle: 'Computer Systems Engineering',
    place: 'ISMT College · University of Sunderland',
    text: 'Building a strong foundation across software development, computer systems, networking and modern IT practice as part of my undergraduate degree.',
    tags: ['OOP', 'Web Development', 'Databases', 'Computer Systems'],
  },
  {
    number: '02',
    period: '2026',
    title: 'Enterprise Project',
    subtitle: 'Team Leadership & Delivery',
    place: 'CET 257 · ISMT College',
    text: 'Developing practical project experience through an enterprise team environment, contributing as Deputy Project Manager alongside planning, communication and technical delivery.',
    tags: ['Project Management', 'Teamwork', 'Client Communication'],
  },
  {
    number: '03',
    period: '2026 — PRESENT',
    title: 'Building Real Projects',
    subtitle: 'Software · Web · Mobile',
    place: 'Independent & Coursework Projects',
    text: 'Turning coursework into working software through projects including full-stack websites, C# applications, embedded experiments and ChessMate, a Flutter mobile application.',
    tags: ['C#', 'Flutter', 'JavaScript', 'Firebase'],
  },
  {
    number: '04',
    period: 'CURRENT FOCUS',
    title: 'Preparing for Industry',
    subtitle: 'Software & Networking',
    place: 'Professional Development',
    text: 'Expanding practical experience in full-stack development, mobile development, Linux, networking, UI/UX and portfolio-quality product work while preparing for internship opportunities.',
    tags: ['Full Stack', 'Networking', 'UI/UX', 'Linux'],
  },
];

const Career = () => {
  return (
    <section className="career-section section-container" id="career">
      <div className="career-container">
        <div className="career-intro">
          <div>
            <span className="career-kicker">MY JOURNEY</span>
            <h2>
              Learning <span>&amp;</span>
              <br />
              experience
            </h2>
          </div>
          <p className="career-summary">
            From university coursework to real software projects, I&apos;m building
            practical experience one project at a time.
          </p>
        </div>

        <div className="career-list">
          {milestones.map((item) => (
            <article className="career-item" key={item.number}>
              <div className="career-marker">
                <span>{item.number}</span>
              </div>

              <div className="career-period">{item.period}</div>

              <div className="career-content">
                <div className="career-title-row">
                  <div>
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                  </div>
                  <span className="career-place">{item.place}</span>
                </div>

                <p>{item.text}</p>

                <div className="career-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
