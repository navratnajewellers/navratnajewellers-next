/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://navratnajewellers.in", // Replace with your actual domain
  generateRobotsTxt: true, // Generates robots.txt file
  generateIndexSitemap: false, // Generates all pages in a single sitemap
  sitemapSize: 5000, // Max URLs per sitemap
  // exclude: ["/admin", "/dashboard"], // Exclude specific pages

  // Manually define static paths since "output: export" doesn't work dynamically
  additionalPaths: async (config) => [
    { loc: "/", lastMod: new Date().toISOString(), priority: 1.0 },
    { loc: "/about", lastMod: new Date().toISOString(), priority: 0.8 },
    { loc: "/contact", lastMod: new Date().toISOString(), priority: 0.7 },
    { loc: "/product", lastMod: new Date().toISOString(), priority: 0.7 },
    {
      loc: "/decommissioning",
      lastMod: new Date().toISOString(),
      priority: 0.7,
    },
    { loc: "/digitization", lastMod: new Date().toISOString(), priority: 0.7 },
    {
      loc: "/solar-recycling",
      lastMod: new Date().toISOString(),
      priority: 0.7,
    },
    { loc: "/blog", lastMod: new Date().toISOString(), priority: 0.6 },
    {
      loc: "/blog/solar-panel-recyling",
      lastMod: new Date().toISOString(),
      priority: 0.6,
    },
    {
      loc: "/blog/solar-panel-waste",
      lastMod: new Date().toISOString(),
      priority: 0.6,
    },
    {
      loc: "/privacy-policy",
      lastMod: new Date().toISOString(),
      priority: 0.3,
    },
    {
      loc: "/term-condition",
      lastMod: new Date().toISOString(),
      priority: 0.3,
    },
  ],

  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Allow all pages
      // { userAgent: "*", disallow: ["/admin", "/dashboard"] }, // Block certain pages
    ],
  },
};
