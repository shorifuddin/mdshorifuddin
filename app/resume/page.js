'use client';
import { useEffect, useRef } from 'react';
import { Reveal, SectionHead, Icon } from '../lib/ui';
import { profile, experience, education, skills, tags } from '../lib/data';

function SkillBar({ n, v }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { el.style.width = v + '%'; io.disconnect(); }
    }), { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, [v]);
  return <div className="skill">
    <div><span>{n}</span><span>{v}%</span></div>
    <div className="bar"><i ref={ref} /></div>
  </div>;
}

export default function Resume() {
  return <>
    <section className="section" style={{ paddingTop: 150 }}><div className="wrap">
      <SectionHead eyebrow="Resume" title="Experience & Skills"
        sub="Four years of production engineering across ERP, SaaS, mobile and AI research." />
      <div className="grid c2" style={{ alignItems: 'start' }}>
        <Reveal><div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 21, margin: '0 0 26px' }}>Experience</h3>
          <div className="timeline">
            {experience.map(e => <div className="tl-item" key={e.title + e.period}>
              <span className="period">{e.period}</span>
              <h3>{e.title}</h3><div className="org">{e.org}</div><p>{e.desc}</p>
            </div>)}
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 21, margin: '44px 0 26px' }}>Education</h3>
          <div className="timeline">
            {education.map(e => <div className="tl-item" key={e.title}>
              <span className="period">{e.period}</span>
              <h3>{e.title}</h3><div className="org">{e.org}</div>
            </div>)}
          </div>
        </div></Reveal>
        <Reveal delay={120}><div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 21, margin: '0 0 26px' }}>Working Skills</h3>
          {skills.map(s => <SkillBar key={s.n} n={s.n} v={s.v} />)}
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 21, margin: '44px 0 22px' }}>Knowledge</h3>
          <div className="tags">{tags.map(t => <span key={t}>{t}</span>)}</div>
          <div style={{ marginTop: 36 }}>
            <a href={profile.cv} className="btn primary"><Icon name="download" size={16} /> Download Full CV</a>
          </div>
        </div></Reveal>
      </div>
    </div></section>
  </>;
}
