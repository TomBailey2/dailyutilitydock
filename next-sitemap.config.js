const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  'https://dailyutilitydock.com'
).replace(/\/$/, '');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  outDir: './public',
  autoLastmod: true,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  transform: async (config, path) => {
    const isHome = path === '/';
    const isTool = path.startsWith('/tools/');
    const isCategory = [
      '/financial-tools',
      '/time-date-tools',
      '/internet-tools',
      '/converters',
      '/productivity-tools',
      '/health-lifestyle-tools',
      '/us-tools',
      '/canada-tools',
      '/australia-tools',
    ].includes(path);
    const isBlog = path.startsWith('/blog');
    const isLegal = ['/privacy-policy', '/cookie-policy', '/terms-of-use'].includes(path);

    return {
      loc: path,
      changefreq: isLegal ? 'yearly' : isBlog ? 'weekly' : 'monthly',
      priority: isHome ? 1 : isTool || isCategory ? 0.8 : isBlog ? 0.7 : 0.4,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
