import Link from 'next/link';
import { Reveal, SectionHead, Icon } from '../lib/ui';
import { profile, education } from '../lib/data';

export const metadata = { title: 'About — Md. Shorif Uddin' };

export default function About() {
  return <>
    <section className="section" style={{ paddingTop: 150 }}><div className="wrap">
      <SectionHead eyebrow="About me" title="Engineer, researcher, shipper." />
      <div className="about-grid">
        <Reveal><div>
          <p className="lead">I&apos;m a Software Engineer from Dhaka, Bangladesh with 4+ years of experience building software that runs real businesses — large-scale ERP systems, cloud SaaS platforms and mobile apps used by real customers every day.</p>
          <p className="lead">My stack is PHP (Laravel), React, TypeScript, React Native, Vue.js, MySQL and PostgreSQL. I&apos;m also a published AI/NLP researcher with an IEEE conference paper on Bangla healthcare paraphrasing and the BIDWESH Bangla hate-speech detection dataset.</p>
          <p className="lead">I care about systems that survive contact with production: auditable payroll engines, APIs that keep their promises for a decade, and mobile apps people open every week because the rewards make it worth it.</p>
          <div style={{ display: 'flex', gap: 14, marginTop: 28, flexWrap: 'wrap' }}>
            <Link href="/works" className="btn primary">See My Works <Icon name="arrow" size={16} /></Link>
            <Link href="/contact" className="btn ghost">Contact Me</Link>
          </div>
        </div></Reveal>
        <Reveal delay={120}><div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, margin: '0 0 20px' }}>Education</h3>
          <div className="edu-list">
            {education.map(e => <div className="edu-item" key={e.title}>
              <span className="period">{e.period}</span>
              <h4>{e.title}</h4><p>{e.org}</p>
            </div>)}
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, margin: '30px 0 20px' }}>Research</h3>
          <div className="edu-list">
            <div className="edu-item">
              <span className="period">IEEE ICCIT 2025</span>
              <h4>Comparative Study of LLMs and Transformers for Bangla Healthcare Paraphrasing</h4>
              <p>Accepted paper — IEEE proceedings 2026</p>
            </div>
            <div className="edu-item">
              <span className="period">arXiv:2507.16183</span>
              <h4>BIDWESH — Bangla Hate-Speech Detection Dataset</h4>
              <p>Preprint — co-authored open resource for Bangla NLP</p>
            </div>
          </div>
        </div></Reveal>
      </div>
    </div></section>
  </>;
}
