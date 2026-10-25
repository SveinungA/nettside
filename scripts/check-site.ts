// Check rendered internal links, anchors, and publication coverage using bundled Deno.
const root = '_site';
const pages = ['index.html', 'research.html', 'publications.html', 'cv.html', '404.html'];
const contents = new Map(pages.map(path => [path, Deno.readTextFileSync(`${root}/${path}`)]));
const errors: string[] = [];
let checked = 0;
for (const [page, source] of contents) {
  for (const match of source.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const target = match[1].replaceAll('&amp;', '&');
    if (/^(?:https?:|mailto:|tel:|data:|javascript:)/i.test(target) || !target || target === '#') continue;
    const url = new URL(target, `https://example.test/nettside/${page}`);
    const path = decodeURIComponent(url.pathname.replace(/^\/nettside\//, ''));
    if (path.startsWith('/')) { errors.push(`${page}: link escapes the project base path: ${target}`); continue; }
    try { Deno.statSync(`${root}/${path}`); } catch { errors.push(`${page}: missing local file: ${target}`); continue; }
    if (url.hash && path.endsWith('.html')) {
      const html = contents.get(path) || Deno.readTextFileSync(`${root}/${path}`);
      const id = decodeURIComponent(url.hash.slice(1));
      if (!html.includes(`id="${id}"`)) errors.push(`${page}: missing anchor: ${target}`);
    }
    checked++;
  }
}
const publications = JSON.parse(Deno.readTextFileSync('data/publications.json')).publications;
const rendered = contents.get('publications.html')!;
for (const paper of publications) {
  if (!rendered.includes(`id="${paper.id}"`)) errors.push(`Publication missing from HTML: ${paper.id}`);
}
if (rendered.includes('Academic: the website designer') || rendered.includes('Frida Gomam')) errors.push('Legacy demo content was included in the new site.');
if (errors.length) throw new Error(errors.join('\n'));
console.log(`Checked ${pages.length} rendered pages, ${checked} local links/assets, and ${publications.length} publication entries.`);

