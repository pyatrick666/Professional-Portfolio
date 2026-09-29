import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:pyatrick666@gmail.com" data-cursor="disable">
                pyatrick666@gmail.com
              </a>
            </p>

            <h4>Phone</h4>
            <p>
              <span>Available on request</span>
            </p>
          </div>

          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/pyatrick666"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/pratik-poudel-b3264a263/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            <a
              href="https://www.instagram.com/pyatrick666/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>

          <div className="contact-box contact-credit">
            <h2>
              Designed and Developed <br /> by <span>Pratik Poudel</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;