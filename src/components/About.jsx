import { about, sectionMeta } from '../data.js';

const meta = sectionMeta('about');

function About() {
  return (
    <section id="about">
      <div className="sec-head">
        <span className="sec-num">{meta.num}</span>
        <h2 className="sec-title">{meta.title}</h2>
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
