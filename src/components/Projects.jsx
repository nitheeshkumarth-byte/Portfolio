import { useRef, useState } from 'react';
import autoProjects from 'virtual:github-repos';
import { projects as manualProjects, sectionMeta } from '../data.js';
import { iconMap } from './icons/iconMap.js';
import { ChevronLeft, ChevronRight } from './icons/ChevronIcons.jsx';

const allProjects = [...manualProjects, ...autoProjects];
const meta = sectionMeta('projects');

function Projects() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const total = allProjects.length;
  const current = allProjects[index];

  const goTo = (i) => setIndex((i + total) % total);

  // Keydown bubbles from the focused control inside the region, so arrow keys
  // only drive the carousel when it has focus — page scrolling stays intact.
  function handleKey(e) {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(index - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(index + 1);
    }
  }

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goTo(index - 1);
      } else {
        goTo(index + 1);
      }
    }
    touchStartX.current = null;
  }

  return (
    <section id="projects">
      <div className="sec-head">
        <span className="sec-num">{meta.num}</span>
        <h2 className="sec-title">{meta.title}</h2>
      </div>

      <div
        className="carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="projects"
        onKeyDown={handleKey}
      >
        <p className="sr-only" role="status">
          Project {index + 1} of {total}: {current?.name}
        </p>
        <div className="carousel-track-wrap">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {allProjects.map((p, i) => {
              const Icon = iconMap[p.icon] ?? iconMap.code;
              return (
                <div
                  className="project"
                  key={p.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${total}`}
                  inert={i !== index}
                >
                  <div className="project-icon">
                    <Icon />
                  </div>
                  <div>
                    <div className="project-head">
                      <span className="project-name">
                        {p.name}
                        {p.auto && <span className="auto-badge">auto</span>}
                      </span>
                      <div className="project-links">
                        {p.links.length === 0 ? (
                          <span className="project-link disabled">repo not public</span>
                        ) : (
                          p.links.map((l) => (
                            <a
                              className="project-link"
                              href={l.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              key={l.url}
                            >
                              {l.label} ↗
                            </a>
                          ))
                        )}
                      </div>
                    </div>
                    <p className="project-desc">{p.desc}</p>
                    <div className="project-stack">
                      {p.stack.map((s) => (
                        <span className="stack-pill" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="carousel-controls">
          <button className="carousel-btn" aria-label="Previous project" onClick={() => goTo(index - 1)}>
            <ChevronLeft />
          </button>
          <div className="carousel-dots">
            {allProjects.map((p, i) => (
              <button
                key={p.id}
                className={`carousel-dot${i === index ? ' active' : ''}`}
                aria-label={`Go to project ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button className="carousel-btn" aria-label="Next project" onClick={() => goTo(index + 1)}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
