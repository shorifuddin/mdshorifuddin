'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { profile } from './data';

/* ---------- Inline SVG icons (no CDN dependency) ---------- */
const P = {
  code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />,
  mobile: <><rect x="7" y="2" width="10" height="20" rx="2.5" /><path d="M11 18.5h2" /></>,
  layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>,
  brain: <><path d="M9.5 2a2.5 2.5 0 0 0-2.5 2.5v.3A3.5 3.5 0 0 0 4 8c0 .5.1 1 .3 1.4A3.5 3.5 0 0 0 3.5 12c0 1 .4 1.9 1.1 2.5A3.5 3.5 0 0 0 4.5 17 3.5 3.5 0 0 0 8 20.5v.5a2.5 2.5 0 0 0 5 0v-19a2.5 2.5 0 0 0-3.5-2Z" /><path d="M14.5 2a2.5 2.5 0 0 1 2.5 2.5v.3a3.5 3.5 0 0 1 3 3.2c0 .5-.1 1-.3 1.4a3.5 3.5 0 0 1 .8 2.6c0 1-.4 1.9-1.1 2.5a3.5 3.5 0 0 1 .1 2.5 3.5 3.5 0 0 1-3.5 3.5v.5a2.5 2.5 0 0 1-5 0" /></>,
  github: <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0 0 12 2Z" />,
  linkedin: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9z" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2.5" /><path d="m2 7 10 6 10-6" /></>,
  phone: <><rect x="7" y="2" width="10" height="20" rx="2.5" /><path d="M11 18.5h2" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5M12 15V3" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  external: <><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6M10 14 21 3" /></>,
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2.5" /><path d="M8 2v4m8-4v4M3 10h18" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  send: <><path d="m22 2-7 20-4-9-9-4 20-7Z" /><path d="M22 2 11 13" /></>,
  check: <path d="m4 12.5 5 5L20 6.5" />,
};
export function Icon({ name, size = 20, sw = 1.8 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={name === 'github' || name === 'linkedin' ? 'currentColor' : 'none'}
      stroke={name === 'github' || name === 'linkedin' ? 'none' : 'currentColor'}
      strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{P[name]}</svg>
  );
}

/* ---------- Theme ---------- */
function useTheme() {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme') || localStorage.getItem('bostami-theme');
      const t = saved === 'light' ? 'light' : 'dark';
      setTheme(t); document.documentElement.dataset.theme = t;
    } catch { document.documentElement.dataset.theme = 'dark'; }
  }, []);
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next); document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch {}
  };
  return [theme, toggle];
}

/* ---------- Scroll reveal ---------- */
export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); }
    }), { threshold: 0.12 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={'reveal ' + className} style={{ transitionDelay: delay + 'ms' }}>{children}</div>;
}

export function SectionHead({ eyebrow, title, sub }) {
  return <Reveal><div className="sec-head">
    <div className="eyebrow">{eyebrow}</div><h2>{title}</h2>{sub && <p>{sub}</p>}
  </div></Reveal>;
}

/* ---------- Navbar ---------- */
const links = [
  ['Home', '/'], ['About', '/about'], ['Resume', '/resume'],
  ['Works', '/works'], ['Blog', '/blog'], ['Contact', '/contact'],
];
export function Navbar() {
  const pathname = usePathname() || '/';
  const [theme, toggle] = useTheme();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  return <>
    <nav className="nav"><div className="nav-inner">
      <Link href="/" className="logo">shorif<b>.</b>dev</Link>
      <div className="nav-links">
        {links.map(([l, h]) => <Link key={h} href={h} className={pathname === h ? 'active' : ''}>{l}</Link>)}
      </div>
      <div className="nav-cta">
        <button className="icon-btn" onClick={toggle} aria-label="Toggle theme">
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={18} />
        </button>
        <Link href="/contact" className="btn primary" style={{ padding: '10px 18px' }}>Hire Me</Link>
        <button className="icon-btn burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <Icon name={open ? 'x' : 'menu'} size={18} />
        </button>
      </div>
    </div></nav>
    {open && <div className="mobile-menu">
      {links.map(([l, h]) => <Link key={h} href={h} className={pathname === h ? 'active' : ''}>{l}</Link>)}
    </div>}
  </>;
}

/* ---------- Footer ---------- */
export function Footer() {
  return <footer><div className="wrap foot-inner">
    <p>© 2026 {profile.name}. Built with React & Next.js.</p>
    <div className="socials">
      {profile.socials.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
        <Icon name={s.icon} size={17} />
      </a>)}
    </div>
  </div></footer>;
}
