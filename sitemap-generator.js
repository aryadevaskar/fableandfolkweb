import sitemap from 'sitemap';
import fs from 'fs';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  // Add all other routes of your app here
];

const sitemapInstance = sitemap.createSitemap({
  hostname: 'https://fableandfolk.com', // Replace with your actual domain
  urls: urls,
});

fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());

console.log('Sitemap created successfully!');