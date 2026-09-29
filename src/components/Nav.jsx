import { useEffect, useState } from 'react';
import { sections } from '../data.js';

function readTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function Nav() {
  const [active, setActive] = useState('');
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = () => {
      if (!localStorage.getItem('theme')) setTheme(mq.matches ? 'light' : 'dark');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    setTheme(next);
  }

  return (
    <nav aria-label="Main">
      <div className="nav-inner">
        <div className="nav-mark">nitheesh://</div>
        <div className="nav-right">
          <div className="nav-links">
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                data-idx={String(i + 1).padStart(2, '0')}
                aria-current={active === s.id ? 'true' : undefined}
              >
                {s.label}
              </a>
            ))}
          </div>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? 'light' : 'dark'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
