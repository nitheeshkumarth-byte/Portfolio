const links = [
  { idx: '01', label: 'about', href: '#about' },
  { idx: '02', label: 'experience', href: '#experience' },
  { idx: '03', label: 'projects', href: '#projects' },
  { idx: '04', label: 'skills', href: '#skills' },
  { idx: '05', label: 'contact', href: '#contact' },
];

function Nav() {
  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-mark">nitheesh://</div>
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} data-idx={l.idx}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
