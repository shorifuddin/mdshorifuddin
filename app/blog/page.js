'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Reveal, SectionHead } from '../lib/ui';
import { posts, postCategories } from '../lib/posts-2';

export default function Blog() {
  const [f, setF] = useState('All');
  const list = posts.filter(p => f === 'All' || p.category === f);
  return <section className="section" style={{ paddingTop: 150 }}><div className="wrap">
    <SectionHead eyebrow="Blog" title="Articles & Notes"
      sub="Production lessons in Laravel, mobile engineering and Bangla NLP — written from real shipped work." />
    <Reveal><div className="filters">
      {postCategories.map(c => <button key={c} className={f === c ? 'on' : ''} onClick={() => setF(c)}>{c}</button>)}
    </div></Reveal>
    <div className="blog-grid">
      {list.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 80}>
        <Link href={'/blog/' + p.slug} className="post-card">
          <div className="post-img"><img src={p.image} alt={p.title} /></div>
          <div className="post-body">
            <div className="post-meta"><span className="cat">{p.category}</span><span>·</span><span>{p.date}</span><span>·</span><span>{p.minutes} min</span></div>
            <h3>{p.title}</h3><p>{p.excerpt}</p>
            <div className="post-foot"><span className="read-more">Read article →</span></div>
          </div>
        </Link>
      </Reveal>)}
    </div>
  </div></section>;
}
