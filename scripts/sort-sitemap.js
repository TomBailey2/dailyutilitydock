const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const urlEntries = sitemap.match(/<url>[\s\S]*?<\/url>/g);

if (!urlEntries) {
  throw new Error(`No <url> entries found in ${sitemapPath}`);
}

const getLoc = (entry) => {
  const match = entry.match(/<loc>(.*?)<\/loc>/);

  if (!match) {
    throw new Error(`No <loc> entry found in sitemap URL entry: ${entry}`);
  }

  return match[1];
};

const firstEntryIndex = sitemap.indexOf(urlEntries[0]);
const lastEntry = urlEntries[urlEntries.length - 1];
const lastEntryEndIndex = sitemap.lastIndexOf(lastEntry) + lastEntry.length;
const prefix = sitemap.slice(0, firstEntryIndex);
const suffix = sitemap.slice(lastEntryEndIndex);
const sortedEntries = [...urlEntries].sort((a, b) =>
  getLoc(a).localeCompare(getLoc(b))
);

fs.writeFileSync(sitemapPath, `${prefix}${sortedEntries.join('\n')}${suffix}`);
