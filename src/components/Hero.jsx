import { profile } from '../data.js';

function Hero() {
  return (
    <section className="hero">
      <div className="terminal">
        <div className="term-bar">
          <div className="term-dot" />
          <div className="term-dot" />
          <div className="term-dot" />
          <div className="term-title">whoami.sh</div>
        </div>
        <div className="term-body">
          <div className="term-line">
            <span className="prompt">$</span> whoami
          </div>
          <div className="term-out">{profile.name}</div>
          <div className="term-role">
            {profile.role}
            <span className="cursor" />
          </div>
          <p className="hero-desc">{profile.tagline}</p>
          <div className="hero-tags">
            {profile.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="hero-links">
            <a className="primary" href={`mailto:${profile.email}`}>
              say hello
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              github
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
