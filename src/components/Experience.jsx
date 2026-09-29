import { experience, sectionMeta } from '../data.js';

const meta = sectionMeta('experience');

function Experience() {
  return (
    <section id="experience">
      <div className="sec-head">
        <span className="sec-num">{meta.num}</span>
        <h2 className="sec-title">{meta.title}</h2>
      </div>
      {experience.map((e) => (
        <div className="exp-item" key={e.role}>
          <div className="exp-period">{e.period}</div>
          <div>
            <div className="exp-role">{e.role}</div>
            <div className="exp-org">{e.org}</div>
            <div className="exp-desc">{e.desc}</div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
