import { profile } from '../data.js';

function Contact() {
  return (
    <section id="contact">
      <div className="sec-head">
        <span className="sec-num">06</span>
        <h2 className="sec-title">contact</h2>
      </div>
      <div className="contact-wrap">
        <div className="contact-lead">Open to entry-level SWE &amp; GenAI roles.</div>
        <p className="contact-sub">
          If something above is relevant to what you're building, I'd like to hear about it.
        </p>
        <div className="contact-grid">
          <a className="contact-card" href={`mailto:${profile.email}`}>
            <span className="contact-card-label">email</span>
            <span className="contact-card-val">{profile.email}</span>
          </a>
          <a className="contact-card" href={profile.github} target="_blank" rel="noopener noreferrer">
            <span className="contact-card-label">github</span>
            <span className="contact-card-val">nitheeshkumarth-byte</span>
          </a>
          <a className="contact-card" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <span className="contact-card-label">linkedin</span>
            <span className="contact-card-val">nitheesh-kumar-thadikamalla</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
