import Link from 'next/link';
import { Reveal, SectionHead, Icon } from './lib/ui';
import { profile, services } from './lib/data';
import { works } from './lib/works';
import { posts } from './lib/posts-2';

export default function Home() {
  const featured = works.slice(0, 4);
  const latest = posts.slice(0, 3);
  return <>
    {/* HERO */}
    <header className="hero"><div className="hero-bg" />
      <div className="wrap hero-grid">
        <Reveal><div>
          <span className="badge"><span className="dot" /> Available for remote work</span>
          <h1>Hi, I&apos;m {profile.firstName} —<br />I build <span className="grad">software that runs</span> real businesses.</h1>
          <p className="lead">{profile.intro}</p>
          <div className="hero-cta">
            <Link href="/works" className="btn primary">View My Works <Icon name="arrow" size={16} /></Link>
            <a href={profile.cv} className="btn ghost"><Icon name="download" size={16} /> Download CV</a>
          </div>
          <div className="hero-stats">
            {profile.stats.map(s => <div key={s.l}><b>{s.n}</b><span>{s.l}</span></div>)}
          </div>
        </div></Reveal>
        <Reveal delay={150}><div className="hero-photo">
          <div className="photo-ring"><img src={profile.photo} alt={profile.name} /></div>
          <div className="photo-card pc1">Laravel<small>Backend · APIs · ERP</small></div>
          <div className="photo-card pc2">React Native<small>Mobile · Google Play</small></div>
          <div className="photo-card pc3">TypeScript<small>React · Vue · Web</small></div>
          <div className="photo-card pc4">PostgreSQL<small>MySQL · Databases</small></div>
        </div></Reveal>
      </div>
    </header>

    {/* SERVICES */}
    <section className="section"><div className="wrap">
      <SectionHead eyebrow="What I do" title="Services & Expertise"
        sub="Four disciplines I practice daily — from production backends to published research." />
      <div className="grid c2">
        {services.map((s, i) => <Reveal key={s.title} delay={i * 80}><div className="card">
          <div className="ic"><Icon name={s.icon} size={24} /></div>
          <h3>{s.title}</h3><p>{s.desc}</p>
        </div></Reveal>)}
      </div>
    </div></section>

    {/* FEATURED WORKS */}
    <section className="section" style={{ paddingTop: 0 }}><div className="wrap">
      <SectionHead eyebrow="Portfolio" title="Featured Works"
        sub="Production systems with real users — mobile apps, SaaS platforms and research." />
      <div className="work-grid">
        {featured.map((w, i) => <Reveal key={w.slug} delay={i * 80}>
          <Link href={'/works/' + w.slug} className="work-card">
            <div className="work-img">{w.image ? <img src={w.image} alt={w.title} /> : <span className="ph">▦</span>}</div>
            <div className="work-body">
              <span className="work-cat">{w.category}</span>
              <h3>{w.title}</h3><p>{w.tagline}</p>
              <div className="work-stack">{w.stack.slice(0, 3).map(t => <span key={t}>{t}</span>)}</div>
            </div>
          </Link>
        </Reveal>)}
      </div>
      <Reveal><div style={{ textAlign: 'center', marginTop: 36 }}>
        <Link href="/works" className="btn">View All Works <Icon name="arrow" size={16} /></Link>
      </div></Reveal>
    </div></section>

    {/* LATEST POSTS */}
    <section className="section" style={{ paddingTop: 0 }}><div className="wrap">
      <SectionHead eyebrow="Blog" title="Latest Articles"
        sub="Notes from production: Laravel, mobile engineering, and Bangla NLP research." />
      <div className="blog-grid">
        {latest.map((p, i) => <Reveal key={p.slug} delay={i * 80}>
          <Link href={'/blog/' + p.slug} className="post-card">
            <div className="post-img"><img src={p.image} alt={p.title} /></div>
            <div className="post-body">
              <div className="post-meta"><span className="cat">{p.category}</span><span>·</span><span>{p.minutes} min read</span></div>
              <h3>{p.title}</h3><p>{p.excerpt}</p>
              <div className="post-foot"><span className="read-more">Read article →</span></div>
            </div>
          </Link>
        </Reveal>)}
      </div>
      <Reveal><div style={{ textAlign: 'center', marginTop: 36 }}>
        <Link href="/blog" className="btn">All Articles <Icon name="arrow" size={16} /></Link>
      </div></Reveal>
    </div></section>

    {/* CTA */}
    <section className="section" style={{ paddingTop: 0 }}><div className="wrap">
      <Reveal><div className="cta-band">
        <h2>Have a project in mind?</h2>
        <p>From ERP systems to mobile apps — let&apos;s build something that ships.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn">Get In Touch <Icon name="arrow" size={16} /></Link>
          <a href={profile.cv} className="btn ghost"><Icon name="download" size={16} /> Download CV</a>
        </div>
      </div></Reveal>
    </div></section>
  </>;
}
