import { skillGroups, sectionMeta } from '../data.js';

const meta = sectionMeta('skills');

function Skills() {
  return (
    <section id="skills">
      <div className="sec-head">
        <span className="sec-num">{meta.num}</span>
        <h2 className="sec-title">{meta.title}</h2>
      </div>
      <div className="skills-grid">
        {skillGroups.map((g) => (
          <div key={g.title}>
            <div className="skill-group-title">{g.title}</div>
            <div className="skill-list">
              {g.skills.map((s) => (
                <span className="skill-pill" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
