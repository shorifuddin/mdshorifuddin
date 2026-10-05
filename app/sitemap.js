const SITE = 'https://mdshorifuddin.vercel.app';

const works = [
  'lotus-food-stores', 'rysenova', 'erp-systems',
  'ayers-food', 'hotel-grace-cox', 'bidwesh-research',
];

const posts = [
  'referral-bonus-system-organic-growth',
  'coin-rewards-gamifying-grocery-orders',
  'delivery-zones-location-restricted-ordering',
  'real-time-order-tracking-cart-to-doorstep',
  'building-payroll-engine-salary-deductions-payslips',
  'attendance-leave-workflows-hr-teams-use',
  'restful-apis-large-scale-erp',
  'llms-bangla-healthcare-paraphrasing',
  'bidwesh-bangla-hate-speech-dataset',
  'lessons-low-resource-nlp-bangla',
  'laravel-performance-tuning-needle',
  'wordpress-to-fullstack-journey',
];

export default function sitemap() {
  const staticPages = ['', '/about', '/resume', '/works', '/blog', '/contact'];
  const workPages = works.map((s) => `/works/${s}`);
  const postPages = posts.map((s) => `/blog/${s}`);
  return [...staticPages, ...workPages, ...postPages].map((p) => ({
    url: `${SITE}${p || '/'}`,
    lastModified: new Date(),
    changeFrequency: p.startsWith('/blog/') ? 'monthly' : 'weekly',
    priority: p === '' ? 1 : p.startsWith('/blog/') || p.startsWith('/works/') ? 0.8 : 0.9,
  }));
}
