import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://lingamestate.com";
const today = new Date().toISOString().slice(0, 10);

const workspaceRoot = process.cwd();
const propertiesPath = path.join(workspaceRoot, "src", "data", "properties.ts");
const insightsPath = path.join(workspaceRoot, "src", "pages", "InsightsIndex.tsx");
const outputPath = path.join(workspaceRoot, "public", "sitemap.xml");

const readFile = (filePath) => fs.readFileSync(filePath, "utf8");

const extractPairs = (content, keyRegex, valueRegex) => {
  const keys = [];
  const values = [];
  let match;

  while ((match = keyRegex.exec(content))) {
    keys.push(match[1]);
  }
  while ((match = valueRegex.exec(content))) {
    values.push(match[1]);
  }

  return keys.map((key, index) => ({
    key,
    value: values[index],
  }));
};

const propertiesContent = readFile(propertiesPath);
const propertyPairs = extractPairs(
  propertiesContent,
  /slug:\s*"([^"]+)"/g,
  /updatedAt:\s*"([^"]+)"/g,
);

const insightsContent = readFile(insightsPath);
const insightPairs = extractPairs(
  insightsContent,
  /slug:\s*"([^"]+)"/g,
  /date:\s*"([^"]+)"/g,
);

const regionSlugs = ["thiruvannamalai", "kallakurichi", "villupuram", "sankarapuram"];

const urls = [
  { loc: `${SITE_URL}/`, lastmod: today, changefreq: "weekly", priority: "1.0" },
  { loc: `${SITE_URL}/properties`, lastmod: today, changefreq: "weekly", priority: "0.9" },
  ...propertyPairs.map((item) => ({
    loc: `${SITE_URL}/properties/${item.key}`,
    lastmod: item.value || today,
    changefreq: "monthly",
    priority: "0.8",
  })),
  { loc: `${SITE_URL}/regions`, lastmod: today, changefreq: "monthly", priority: "0.7" },
  ...regionSlugs.map((slug) => ({
    loc: `${SITE_URL}/regions/${slug}`,
    lastmod: today,
    changefreq: "monthly",
    priority: "0.7",
  })),
  { loc: `${SITE_URL}/insights`, lastmod: today, changefreq: "weekly", priority: "0.7" },
  ...insightPairs.map((item) => ({
    loc: `${SITE_URL}/insights/${item.key}`,
    lastmod: item.value || today,
    changefreq: "monthly",
    priority: "0.6",
  })),
  { loc: `${SITE_URL}/about`, lastmod: today, changefreq: "yearly", priority: "0.6" },
  { loc: `${SITE_URL}/contact`, lastmod: today, changefreq: "yearly", priority: "0.6" },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(outputPath, xml);
console.log(`Sitemap generated at ${outputPath}`);
