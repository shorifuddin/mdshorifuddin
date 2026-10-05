'use client';
import { useState } from 'react';
import { Reveal, SectionHead, Icon } from '../lib/ui';
import { profile } from '../lib/data';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = e => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = encodeURIComponent('Project enquiry from ' + f.get('name'));
    const body = encodeURIComponent(f.get('message') + '\n\n— ' + f.get('name') + ' (' + f.get('email') + ')');
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };
  const cards = [
    { icon: 'phone', label: 'Phone', value: profile.phone, href: 'tel:' + profile.phone.replace(/\s/g, '') },
    { icon: 'mail', label: 'Email', value: profile.email, href: 'mailto:' + profile.email },
    { icon: 'pin', label: 'Location', value: profile.location, href: null },
  ];
  return <section className="section" style={{ paddingTop: 150 }}><div className="wrap">
    <SectionHead eyebrow="Contact" title="Let's Work Together"
      sub="Have a project, a role, or a research idea? My inbox is open — I usually reply within a day." />
    <div className="contact-grid">
      <Reveal><div>
        {cards.map(c => {
          const inner = <><span className="ic"><Icon name={c.icon} size={22} /></span>
            <div><b>{c.label}</b><span>{c.value}</span></div></>;
          return c.href
            ? <a key={c.label} className="info-card" href={c.href}>{inner}</a>
            : <div key={c.label} className="info-card">{inner}</div>;
        })}
        <div className="socials" style={{ marginTop: 20 }}>
          {profile.socials.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
            <Icon name={s.icon} size={17} />
          </a>)}
        </div>
      </div></Reveal>
      <Reveal delay={120}><div className="form-card">
        <h3>Send a message</h3>
        <p>Tell me about your project — timeline, stack and goals. The form opens your email app with everything filled in.</p>
        {sent
          ? <div style={{ display: 'flex', gap: 12, alignItems: 'center', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 14, padding: '18px 20px' }}>
              <span style={{ color: '#22c55e' }}><Icon name="check" size={22} /></span>
              <p style={{ margin: 0, fontSize: 14.5, color: 'var(--text)' }}>Your email app should now be open with the message ready — just hit send.</p>
            </div>
          : <form onSubmit={submit}>
              <div className="field"><label>Name</label><input name="name" required placeholder="Your name" /></div>
              <div className="field"><label>Email</label><input name="email" type="email" required placeholder="you@company.com" /></div>
              <div className="field"><label>Message</label><textarea name="message" rows={5} required placeholder="Tell me about your project..." /></div>
              <button className="btn primary" type="submit"><Icon name="send" size={16} /> Send Message</button>
            </form>}
      </div></Reveal>
    </div>
  </div></section>;
}
