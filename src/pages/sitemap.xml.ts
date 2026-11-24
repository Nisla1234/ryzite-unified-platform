import type { APIRoute } from 'astro';
import { marketingServices } from '../data/marketing-service-content';
import { technologySolutions } from '../data/technology-solutions';

const SITE_URL = 'https://www.ryzite.lk';

const staticPaths = [
  '/',
  '/about/',
  '/services/',
  '/solutions/',
  '/packages/',
  '/how-we-work/',
  '/our-work/',
  '/articles/',
  '/contact/',
  '/privacy-policy/',
  '/terms-and-conditions/',
];

const escapeXml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&apos;');

export const GET: APIRoute = () => {
  const dynamicPaths = [
    ...marketingServices.map(({ slug }) => `/services/${encodeURIComponent(slug)}/`),
    ...technologySolutions.map(({ slug }) => `/solutions/${encodeURIComponent(slug)}/`),
  ];

  const urls = [...new Set([...staticPaths, ...dynamicPaths])]
    .map((path) => `  <url><loc>${escapeXml(`${SITE_URL}${path}`)}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
