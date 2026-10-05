'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Reveal, SectionHead } from '../lib/ui';
import { works, workCategories } from '../lib/works';

export default function Works() {
  const [f, setF] = useState('All');
  const list = works.filter(w => f === 'All' || w.category === f);
  return <section className="section" style={{ paddingTop: 150 }}><div className="wrap">
    <SectionHead eyebrow="Portfolio" title="Selected Works"
      sub="Every project below runs in production with real users. Click through for the full case study." />
    <Reveal><div className="filters">
      {workCategories.map(c => <button key={c} className={f === c ? 'on' : ''} onClick={() => setF(c)}>{c}</button>)}
    </div></Reveal>
    <div className="work-grid">
      {list.map((w, i) => <Reveal key={w.slug} delay={(i % 2) * 80}>
        <Link href={'/works/' + w.slug} className="work-card">
          <div className="work-img">{w.image ? <img src={w.image} alt={w.title} /> : <span className="ph">▦</span>}</div>
          <div className="work-body">
            <span className="work-cat">{w.category}</span>
            <h3>{w.title}</h3><p>{w.tagline}</p>
            <div className="work-stack">{w.stack.map(t => <span key={t}>{t}</span>)}</div>
          </div>
        </Link>
      </Reveal>)}
    </div>
  </div></section>;
}
