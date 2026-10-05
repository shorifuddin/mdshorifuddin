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

const staticPages = ['', '/about', '/resume', '/works', '/blog', '/contact'];
const workPages = works.map((s) => `/works/${s}`);
const postPages = posts.map((s) => `/blog/${s}`);

const homepageImages = [
  `${SITE}/md-shorif-uddin-software-engineer.jpg`,
  `${SITE}/og-image.jpg`,
];

export async function GET() {
  const now = new Date().toISOString();
  const urls = [...staticPages, ...workPages, ...postPages]
    .map((p) => {
      const loc = `${SITE}${p || '/'}`;
      const changefreq = p.startsWith('/blog/') ? 'monthly' : 'weekly';
      const priority = p === '' ? '1' : p.startsWith('/blog/') || p.startsWith('/works/') ? '0.8' : '0.9';
      const images =
        p === ''
          ? homepageImages
              .map(
                (src) =>
                  `    <image:image><image:loc>${src}</image:loc><image:title>Md. Shorif Uddin — Software Engineer</image:title></image:image>`
              )
              .join('\n')
          : '';
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n${images}\n  </url>`;
    })
    .join('\n');

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
