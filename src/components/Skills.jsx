import { skillGroups } from '../data.js';

function Skills() {
  return (
    <section id="skills">
      <div className="sec-head">
        <span className="sec-num">04</span>
        <h2 className="sec-title">skills</h2>
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
