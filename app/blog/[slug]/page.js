import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '../../lib/posts-2';

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}
export function generateMetadata({ params }) {
  const p = posts.find(x => x.slug === params.slug);
  return p ? {
    title: `${p.title} — ${'Md. Shorif Uddin'}`,
    description: p.excerpt,
    openGraph: { title: p.title, description: p.excerpt, type: 'article' },
  } : {};
}

function Block({ b }) {
  if (b.t === 'h') return <h2>{b.x}</h2>;
  if (b.t === 'quote') return <blockquote>{b.x}</blockquote>;
  if (b.t === 'list') return <ul>{b.x.map((li, i) => <li key={i}>{li}</li>)}</ul>;
  if (b.t === 'code') return <pre><code>{b.x}</code></pre>;
  return <p>{b.x}</p>;
}

export default function Article({ params }) {
  const i = posts.findIndex(x => x.slug === params.slug);
  if (i < 0) notFound();
  const p = posts[i];
  const prev = posts[i - 1], next = posts[i + 1];
  return <article className="article">
    <div className="post-meta">
      <Link href="/blog" style={{ textDecoration: 'none' }}>← All articles</Link>
      <span>·</span><span className="cat">{p.category}</span><span>·</span><span>{p.date}</span><span>·</span><span>{p.minutes} min read</span>
    </div>
    <h1>{p.title}</h1>
    <p className="excerpt">{p.excerpt}</p>
    <div className="article-img"><img src={p.image} alt={p.title} /></div>
    <div className="prose">{p.body.map((b, j) => <Block key={j} b={b} />)}</div>
    <div className="article-nav">
      {prev
        ? <Link href={'/blog/' + prev.slug}><small>← Newer</small><b>{prev.title}</b></Link>
        : <span />}
      {next
        ? <Link href={'/blog/' + next.slug}><small>Older →</small><b>{next.title}</b></Link>
        : <span />}
    </div>
  </article>;
}
