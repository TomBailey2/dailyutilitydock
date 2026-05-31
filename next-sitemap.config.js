const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  'https://dailyutilitydock.com'
).replace(/\/$/, '');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  outDir: './public',
  autoLastmod: false,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
