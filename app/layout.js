import './globals.css';
import { Navbar, Footer } from './lib/ui';
import { profile } from './lib/data';

const SITE = 'https://mdshorifuddin.vercel.app';
const TITLE = 'Md. Shorif Uddin — Software Engineer | Laravel, React Native, TypeScript';
const DESC =
  'Software Engineer from Dhaka, Bangladesh with 4+ years of experience building production systems — Laravel backends, large-scale ERP, cloud SaaS platforms and React Native mobile apps. Available for remote work.';

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: TITLE,
    template: `%s | ${profile.name}`,
  },
  description: DESC,
  keywords: [
    'Software Engineer', 'Remote Software Engineer', 'Laravel Developer', 'PHP Developer',
    'React Native Developer', 'TypeScript Developer', 'Vue.js Developer', 'Full-Stack Developer',
    'Backend Developer', 'ERP Systems', 'REST API Development', 'PostgreSQL', 'MySQL',
    'Mobile App Developer', 'Bangladesh Developer', 'Hire Remote Developer',
  ],
  authors: [{ name: profile.name, url: SITE }],
  creator: profile.name,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: SITE,
    siteName: `${profile.name} — Portfolio`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: `${profile.name} — Software Engineer` }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
    images: ['/og-image.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  alternateName: 'Shorif Uddin',
  url: SITE,
  image: `${SITE}/md-shorif-uddin-software-engineer.jpg`,
  jobTitle: 'Software Engineer',
  description: DESC,
  email: `mailto:${profile.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'BD',
  },
  worksFor: { '@type': 'Organization', name: 'KuiperZ' },
  alumniOf: { '@type': 'EducationalOrganization', name: 'Southeast University' },
  sameAs: [
    'https://github.com/shorifuddin',
    'https://www.linkedin.com/in/mrshorifuddin/',
    'https://x.com/mrshorifuddin',
    'https://www.instagram.com/mr.shorif/',
    'https://www.facebook.com/shorifuddinbeps/',
    'https://sites.google.com/view/mdshorifuddin',
    'https://www.researchgate.net/profile/Md-Uddin-253',
    'https://ieeexplore.ieee.org/document/11491404',
    'https://arxiv.org/abs/2507.16183',
  ],
  knowsAbout: [
    'Laravel', 'PHP', 'React Native', 'TypeScript', 'React.js', 'Vue.js',
    'PostgreSQL', 'MySQL', 'REST APIs', 'ERP Systems', 'Mobile App Development',
    'Natural Language Processing', 'Machine Learning',
  ],
  subjectOf: [
    {
      '@type': 'ScholarlyArticle',
      name: 'Comparative Study of LLMs and Transformers for Bangla Healthcare Paraphrasing',
      url: 'https://ieeexplore.ieee.org/document/11491404',
    },
    {
      '@type': 'ScholarlyArticle',
      name: 'BIDWESH — Bangla Hate-Speech Detection Dataset',
      url: 'https://arxiv.org/abs/2507.16183',
    },
  ],
  seeks: { '@type': 'Demand', name: 'Remote Software Engineering roles' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme')||localStorage.getItem('bostami-theme')||'dark';document.documentElement.dataset.theme=t==='light'?'light':'dark';}catch(e){}})()` }} />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
