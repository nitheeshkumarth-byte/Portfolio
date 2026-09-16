import { useEffect, useRef, useState } from 'react';
import { projects } from '../data.js';
import { iconMap } from './icons/ProjectIcons.jsx';
import { ChevronLeft, ChevronRight } from './icons/ChevronIcons.jsx';

function Projects() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);
  const total = projects.length;

  const goTo = (i) => setIndex((i + total) % total);

  useEffect(() => {
    function handleKey(e) {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;
      if (e.key === 'ArrowLeft') goTo(index - 1);
      if (e.key === 'ArrowRight') goTo(index + 1);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e) {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      diff > 0 ? goTo(index - 1) : goTo(index + 1);
    }
    touchStartX.current = null;
  }

  return (
    <section id="projects">
      <div className="sec-head">
        <span className="sec-num">03</span>
        <h2 className="sec-title">projects</h2>
      </div>

      <div className="carousel">
        <div className="carousel-track-wrap">
          <div
            className="carousel-track"
            ref={trackRef}
            style={{ transform: `translateX(-${index * 100}%)` }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {projects.map((p) => {
              const Icon = iconMap[p.icon];
              return (
                <div className="project" key={p.id}>
                  <div className="project-icon">
                    <Icon />
                  </div>
                  <div>
                    <div className="project-head">
                      <span className="project-name">{p.name}</span>
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
            {projects.map((p, i) => (
              <button
                key={p.id}
                className={`carousel-dot${i === index ? ' active' : ''}`}
                aria-label={`Go to project ${i + 1}`}
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
