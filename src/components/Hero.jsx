import { useEffect, useRef } from 'react';
import { profile } from '../data.js';
import '../hero.css';

function Hero() {
  const heroRef = useRef(null);
  const [firstLine, ...surname] = profile.name.split('\n');
  const [given, ...family] = firstLine.split(' ');

  useEffect(() => {
    const hero = heroRef.current;
    const layers = [...hero.querySelectorAll('.px-layer')];
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    let heroH = hero.offsetHeight;
    let last = -1;
    let raf = 0;

    function clear() {
      for (const el of layers) el.style.transform = '';
    }

    // Reads scrollY once per frame; layers move at their own data-speed.
    function frame() {
      const y = Math.min(Math.max(window.scrollY, 0), heroH); // clamp to the hero's height
      if (y !== last) {
        last = y;
        for (const el of layers) {
          el.style.transform = `translate3d(0, ${(-y * Number(el.dataset.speed)).toFixed(2)}px, 0)`;
        }
      }
      raf = requestAnimationFrame(frame);
    }

    function start() {
      cancelAnimationFrame(raf);
      if (reduced.matches) {
        clear();
        return;
      }
      heroH = hero.offsetHeight;
      last = -1;
      raf = requestAnimationFrame(frame);
    }

    function onResize() {
      heroH = hero.offsetHeight;
      last = -1;
    }

    window.addEventListener('resize', onResize);
    reduced.addEventListener('change', start);
    start();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      reduced.removeEventListener('change', start);
      clear();
    };
  }, []);

  return (
    <header className="px-hero" ref={heroRef}>
      <div className="px-layer px-bg" data-speed="0.08" aria-hidden="true">
        <i className="px-sheet px-sheet-a" />
        <i className="px-sheet px-sheet-b" />
        <i className="px-sheet px-sheet-c" />
      </div>

      <div className="px-layer px-head" data-speed="0.22">
        <h1>
          <span>{given}</span>
          <span>
            {family.join(' ')}
            <span className="sr-only"> {surname.join(' ')}</span>
          </span>
        </h1>
      </div>

      <div className="px-layer px-photo" data-speed="0.36">
        <div className="px-photo-wrap">
          <img
            src="/photo.webp"
            alt={`Portrait of ${profile.name.replace('\n', ' ')}`}
            width="1100"
            height="1100"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="px-layer px-sub" data-speed="0.52">
        <div className="px-card">
          <div className="px-eyebrow">{profile.role}</div>
          <p>{profile.heroLine}</p>
        </div>
      </div>

      <div className="px-layer px-cta" data-speed="0.7">
        <a className="px-btn" href="#projects">
          See my work <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div className="px-tear" aria-hidden="true" />
    </header>
  );
}

export default Hero;
