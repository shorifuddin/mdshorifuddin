import './globals.css';
import { Navbar, Footer } from './lib/ui';
import { profile } from './lib/data';

export const metadata = {
  title: `${profile.name} — Software Engineer`,
  description: profile.intro,
  openGraph: {
    title: `${profile.name} — Software Engineer`,
    description: profile.intro,
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
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
