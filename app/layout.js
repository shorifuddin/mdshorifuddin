import './globals.css';
import AppShell from './site';

export const metadata = {title: 'Md. Shorif Uddin | Software Engineer', description: 'Portfolio of Md. Shorif Uddin — Software Engineer building ERP systems, SaaS platforms and mobile apps. Published AI/NLP researcher.'};

export default function RootLayout({children}) {
  return <html lang="en" suppressHydrationWarning>
    <head>
      <script dangerouslySetInnerHTML={{__html: "try{if(localStorage.getItem('bostami-theme')==='dark')document.documentElement.classList.add('dark-mode')}catch(e){}"}} />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
    </head>
    <body><AppShell>{children}</AppShell></body>
  </html>;
}
