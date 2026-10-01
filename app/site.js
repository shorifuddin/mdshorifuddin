'use client';
import {useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

/* ---------- Edit your own details here ---------- */
export const profile = {
  name: 'Md. Shorif Uddin',
  role: 'Software Engineer',
  initials: 'SU',
  photo: '/profile.jpg',          // put your photo at public/profile.jpg
  phone: '+8801755781464',
  email: 'mcshorif@gmail.com',
  location: 'Nikunja-2, Dhaka, Bangladesh',
  birthday: '—',
  cv: '/Shorif_Uddin_CV.pdf',
  copyright: 'Md. Shorif Uddin'
};

/* ---------- Outline icons ---------- */
const ICONS = {
  user: <><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
  file: <><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8M16 13H8M16 17H8"/></>,
  briefcase: <><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></>,
  blog: <><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 9h5a2 2 0 0 1 0 4H8M8 13h6a2 2 0 0 1 0 4H8V9"/></>,
  contact: <><path d="M16 2v2M8 2v2M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><circle cx="12" cy="11" r="3"/><rect x="3" y="4" width="18" height="18" rx="2"/></>,
  phone: <><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/></>,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>,
  pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" fill="currentColor"/><circle cx="12" cy="10" r="3" fill="#fff" stroke="none"/></>,
  calendar: <><path d="M8 2v4M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/></>,
  download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/></>,
  swatch: <><path d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"/><path d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"/><path d="M7 17h.01"/><path d="m11 8 2.3-2.3a2 2 0 0 1 2.8 0l2.9 2.9a2 2 0 0 1 0 2.8L15 17"/></>,
  group: <><path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/><rect width="7" height="5" x="7" y="7" rx="1"/><rect width="7" height="5" x="10" y="12" rx="1"/></>,
  camera: <><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></>,
  code: <><path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"/></>,
  cap: <><path d="M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></>
};
export function Icon({name, size = 22, sw = 1.7, style}) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style} aria-hidden="true">{ICONS[name]}</svg>;
}

const nav = [
  ['user', 'About', '/home-1'],
  ['file', 'Resume', '/resume'],
  ['briefcase', 'Works', '/portfolio'],
  ['blog', 'Blogs', '/blog'],
  ['contact', 'Contact', '/contact']
];

const footerTone = ['white', 'white', 'gray', 'gray', 'gray']; // per page, like the reference

function ContentCard({pathname, tone, children}) {
  const inner = useRef(null);
  const [h, setH] = useState(null);
  // Animate the card's height so pages of different length glide instead of jumping
  useEffect(() => {
    const el = inner.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver(() => setH(el.offsetHeight));
    ro.observe(el); setH(el.offsetHeight);
    return () => ro.disconnect();
  }, []);
  return <section className="content-card" style={h != null ? {height: h} : undefined}>
    <div ref={inner}>
      <div key={pathname} className="page-enter">{children}</div>
      <footer className={'site-footer ' + tone}>© 2026 All Rights Reserved by {profile.copyright}.</footer>
    </div>
  </section>;
}

export default function AppShell({children}) {
  const pathname = usePathname() || '/home-1';
  const found = nav.findIndex(n => pathname.startsWith(n[2]));
  const idx = found < 0 ? 0 : found;
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(document.documentElement.classList.contains('dark-mode')); }, []);
  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains('dark-mode');
    document.documentElement.classList.toggle('dark-mode', next);
    try { window.localStorage.setItem('bostami-theme', next ? 'dark' : 'light'); } catch (e) {}
    setDark(next);
  };

  return <main className="site">
    <header className="topbar">
      <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
        <i className={dark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} />
      </button>
    </header>
    <div className="layout">
      <Profile />
      <ContentCard pathname={pathname} tone={footerTone[idx]}>{children}</ContentCard>
      <nav className="side-nav" aria-label="Primary navigation">
        <span className="nav-indicator" style={{'--i': idx}} />
        {nav.map(([icon, label, href], i) =>
          <Link key={href} href={href} className={i === idx ? 'active' : ''}>
            <Icon name={icon} size={22} /><span>{label}</span>
          </Link>)}
      </nav>
    </div>
  </main>;
}

function Photo() {
  const [ok, setOk] = useState(true);
  const ref = useRef(null);
  useEffect(() => { const i = ref.current; if (i && i.complete && i.naturalWidth === 0) setOk(false); }, []);
  return <div className="profile-photo">
    {ok
      ? <img ref={ref} src={profile.photo} alt={profile.name} onError={() => setOk(false)} />
      : <div className="photo-placeholder">{profile.initials}</div>}
  </div>;
}

function Profile() {
  return <aside className="profile-card">
    <Photo />
    <h1>{profile.name}</h1>
    <div className="role-pill">{profile.role}</div>
    <div className="social">
      <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
      <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
      <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
      <a href="https://www.linkedin.com/in/mrshorifuddin/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
    </div>
    <div className="info-box">
      <Info icon="phone" cls="pink-icon" label="Phone" value={profile.phone} />
      <Info icon="mail" cls="cyan-icon" label="Email" value={profile.email} />
      <Info icon="pin" cls="pink-icon" label="Location" value={profile.location} />
      <Info icon="calendar" cls="purple-icon" label="Birthday" value={profile.birthday} />
    </div>
    <a className="cv" href={profile.cv}><Icon name="download" size={15} sw={2} /> Download Cv</a>
  </aside>;
}
function Info({icon, cls, label, value}) {
  return <div className="info-row">
    <span className={'info-icon ' + cls}><Icon name={icon} size={17} sw={1.6} /></span>
    <span><b>{label}</b><strong>{value}</strong></span>
  </div>;
}

export function Title({children}) { return <h2 className="section-title">{children}<span /></h2>; }

/* ---------- Client logos (original artwork, rotating carousel) ---------- */
const NAVY = '#27316f';
const logos = [
  (k) => <svg key={k} viewBox="0 0 120 70"><ellipse cx="60" cy="33" rx="30" ry="26" fill="#f6a9b8"/><text x="58" y="38" textAnchor="middle" fontFamily="'Brush Script MT','Segoe Script',cursive" fontSize="27" fontWeight="700" fill={NAVY}>Sophia</text><text x="76" y="48" textAnchor="middle" fontSize="4.6" letterSpacing="1" fill={NAVY}>BEAUTY SALON</text></svg>,
  (k) => <svg key={k} viewBox="0 0 120 70"><defs><path id={'dh' + k} d="M44 36 A16 16 0 0 1 76 36"/></defs><circle cx="60" cy="40" r="12" fill="none" stroke="#9ed3e6" strokeWidth="9"/><text fontSize="6.5" fontWeight="700" letterSpacing="1.4" fill={NAVY}><textPath href={'#dh' + k} startOffset="50%" textAnchor="middle">DIANA HILL</textPath></text><text x="60" y="64" textAnchor="middle" fontSize="4.4" letterSpacing="1.6" fill="#9fb4c8">PHOTOGRAPHY</text></svg>,
  (k) => <svg key={k} viewBox="0 0 120 70"><rect x="40" y="12" width="40" height="5" rx="2.5" fill="#f3e27a"/><rect x="44" y="20" width="34" height="5" rx="2.5" fill="#bfe3a2"/><rect x="40" y="28" width="40" height="5" rx="2.5" fill="#f3e27a"/><text x="60" y="48" textAnchor="middle" fontFamily="Georgia,serif" fontSize="12" fontWeight="700" fill={NAVY}>PENNY W.</text><text x="60" y="57" textAnchor="middle" fontSize="5" letterSpacing="2.4" fill="#c9b9a0">TEXTILES</text></svg>,
  (k) => <svg key={k} viewBox="0 0 120 70"><ellipse cx="46" cy="34" rx="22" ry="17" fill="#bfe3b0"/><ellipse cx="80" cy="36" rx="20" ry="15" fill="#f2e47e" opacity=".85"/><text x="60" y="40" textAnchor="middle" fontFamily="'Brush Script MT','Segoe Script',cursive" fontSize="30" fontWeight="700" fill={NAVY}>Cheryl</text><text x="60" y="55" textAnchor="middle" fontSize="6" letterSpacing="3" fill="#2e8f9a">CLOTHING</text></svg>
];
export function Clients() {
  const [i, setI] = useState(1);
  useEffect(() => { const t = setInterval(() => setI(v => (v + 1) % logos.length), 2600); return () => clearInterval(t); }, []);
  const items = [0, 1, 2, 3, 4].map(n => logos[(i + n) % logos.length](n));
  return <section className="clients"><h2>Clinet</h2><div className="client-row">{items.map((l, n) => <div className="logo" key={n}>{l}</div>)}</div></section>;
}
