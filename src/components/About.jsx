import { about } from '../data.js';

function About() {
  return (
    <section id="about">
      <div className="sec-head">
        <span className="sec-num">01</span>
        <h2 className="sec-title">about</h2>
      </div>
      <div className="about-grid">
        <div className="about-text">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="facts">
          {about.facts.map((f) => (
            <div className="fact" key={f.label}>
              <span className="fact-label">{f.label}</span>
              <span className="fact-val">{f.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
