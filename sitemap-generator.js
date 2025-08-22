import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';

// This is a more modern approach for sitemap generation
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
];

const sitemap = new SitemapStream({ hostname: 'https://fableandfolk.com' });
const writeStream = fs.createWriteStream('./public/sitemap.xml');

streamToPromise(sitemap).then(data => {
  console.log('Sitemap created successfully!');
});

links.forEach(link => sitemap.write(link));
sitemap.end();