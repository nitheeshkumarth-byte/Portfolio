import { certifications, sectionMeta } from '../data.js';

const meta = sectionMeta('certifications');

function Certifications() {
  return (
    <section id="certifications">
      <div className="sec-head">
        <span className="sec-num">{meta.num}</span>
        <h2 className="sec-title">{meta.title}</h2>
      </div>
      <div className="cert-list">
        {certifications.map((c) => (
          <div className="cert-item" key={c}>
            <span className="cert-mark">▸</span>
            <span className="cert-name">{c}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
