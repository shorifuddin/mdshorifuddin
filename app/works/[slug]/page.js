import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Reveal } from '../../lib/ui';
import { works } from '../../lib/works';

export function generateStaticParams() {
  return works.map(w => ({ slug: w.slug }));
}
export function generateMetadata({ params }) {
  const w = works.find(x => x.slug === params.slug);
  if (!w) return {};
  const desc = `${w.tagline} Built by ${'Md. Shorif Uddin'} with ${w.stack.join(', ')}.`;
  return {
    title: `${w.title} — Case Study`,
    description: desc,
    openGraph: {
      title: `${w.title} — Case Study | ${'Md. Shorif Uddin'}`,
      description: desc,
      type: 'article',
      images: w.image ? [{ url: w.image, alt: w.title }] : [],
    },
  };
}

export default function CaseStudy({ params }) {
  const w = works.find(x => x.slug === params.slug);
  if (!w) notFound();
  return <>
    <div className="wrap case-hero">
      <Reveal>
        <Link href="/works" style={{ color: 'var(--text)', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>← All works</Link>
        <h1>{w.title}</h1>
        <p className="tagline">{w.tagline}</p>
        <div className="case-meta">
          <div><b>Role</b><span>{w.role}</span></div>
          <div><b>Timeline</b><span>{w.timeline}</span></div>
          <div><b>Category</b><span>{w.category}</span></div>
        </div>
        <div className="work-stack" style={{ marginBottom: 30 }}>
          {w.stack.map(t => <span key={t}>{t}</span>)}
        </div>
      </Reveal>
      <Reveal><div className="case-img">
        {w.image ? <img src={w.image} alt={w.title} /> : <span className="ph">▦</span>}
      </div></Reveal>
    </div>
    <div className="wrap"><div className="case-body">
      <Reveal><h2>Overview</h2></Reveal>
      {w.overview.map((p, i) => <Reveal key={i}><p>{p}</p></Reveal>)}
      <Reveal><h2>Key Features</h2>
        <ul>{w.features.map(f => <li key={f}>{f}</li>)}</ul>
      </Reveal>
      <Reveal><h2>Results</h2>
        <ul>{w.results.map(r => <li key={r}>{r}</li>)}</ul>
      </Reveal>
      <Reveal><div style={{ marginTop: 50, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <Link href="/contact" className="btn primary">Start a Project</Link>
        <Link href="/works" className="btn ghost">← Back to Works</Link>
      </div></Reveal>
    </div></div>
  </>;
}
