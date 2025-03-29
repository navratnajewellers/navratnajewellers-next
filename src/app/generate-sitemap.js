import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const axios = require('axios'); // For fetching dynamic routes

// Define your site's base URL
const BASE_URL = 'https://navratnajewellers.in';

// Static routes of your application
const staticRoutes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/page/ahout-us', changefreq: 'monthly', priority: 0.8 },
  { url: '/page/return-policy', changefreq: 'monthly', priority: 0.8 },
  { url: '/page/privacy-policy', changefreq: 'monthly', priority: 0.8 },
  { url: '/page/shipping-policy', changefreq: 'monthly', priority: 0.8 },
  { url: '/page/term-condition', changefreq: 'monthly', priority: 0.8 },
  { url: '/gold-rate', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

// Fetch dynamic routes (e.g., blog posts)
const fetchDynamicRoutes = async () => {
  try {
    // Example: Replace with your API endpoint
    const { data } = await axios.post(
      `http://127.0.0.1/testing/test/all-product.php`,
      {
        protectionId: 'Nav##$56',
      }
    );
    return data.productData.map(post => ({
      url: `/shop/${post.name}`,
      changefreq: 'weekly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error('Error fetching dynamic routes:', error);
    return [];
  }
};

(async () => {
  try {
    // Fetch dynamic routes
    const dynamicRoutes = await fetchDynamicRoutes();

    // Combine static and dynamic routes
    const allRoutes = [...staticRoutes, ...dynamicRoutes];

    // Create a writable stream to save the sitemap file
    const writeStream = createWriteStream('./public/sitemap.xml');

    // Initialize the SitemapStream
    const sitemap = new SitemapStream({ hostname: BASE_URL });

    // Pipe the sitemap to the write stream
    sitemap.pipe(writeStream);

    // Add each route to the sitemap
    allRoutes.forEach(route => sitemap.write(route));

    // Close the sitemap stream
    sitemap.end();

    // Wait for the stream to finish
    await streamToPromise(sitemap);

    console.log('Sitemap successfully generated!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
})();
