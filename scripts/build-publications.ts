// Quarto runs this with its bundled Deno. No packages or network access are needed.
type Author = { given: string; family: string };
type Publication = {
  id: string; title: string; authors: Author[]; year: number; online_year?: number | null;
  journal: string; volume?: string; issue?: string; pages?: string; article_number?: string;
  doi?: string | null; url: string; open_access_url?: string | null;
  topics: string[]; selected?: boolean;
};
const data = JSON.parse(Deno.readTextFileSync('data/publications.json'));
const publications: Publication[] = [...data.publications].sort((a, b) =>
  b.year - a.year || a.authors[0].family.localeCompare(b.authors[0].family) || a.title.localeCompare(b.title));
const seenIds = new Set<string>();
const seenDois = new Set<string>();
const seenTitles = new Set<string>();
for (const paper of publications) {
  if (!/^[a-z0-9-]+$/.test(paper.id) || seenIds.has(paper.id)) throw new Error(`Invalid or duplicate publication id: ${paper.id}`);
  if (!paper.title || !paper.journal || !paper.authors.length || !Number.isInteger(paper.year)) throw new Error(`Incomplete publication: ${paper.id}`);
  if (paper.doi && seenDois.has(paper.doi.toLowerCase())) throw new Error(`Duplicate DOI: ${paper.doi}`);
  if (seenTitles.has(paper.title.toLowerCase())) throw new Error(`Duplicate article title: ${paper.title}`);
  for (const url of [paper.url, paper.open_access_url].filter(Boolean)) {
    if (new URL(url!).protocol !== 'https:') throw new Error(`Expected an HTTPS publication link: ${paper.id}`);
  }
  seenIds.add(paper.id);
  seenTitles.add(paper.title.toLowerCase());
  if (paper.doi) seenDois.add(paper.doi.toLowerCase());
}

const esc = (value: unknown) => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
const tex = (value: string) => value.replace(/([&%#_])/g, '\\$1');
const authorName = (author: Author) => `${author.given} ${author.family}`.trim();
function bibtex(paper: Publication) {
  const fields: [string, string][] = [
    ['title', `{${tex(paper.title)}}`],
    ['author', paper.authors.map(author => `${author.family}, ${author.given}`).join(' and ')],
    ['journal', tex(paper.journal)], ['year', String(paper.year)],
  ];
  for (const [field, value] of [['volume', paper.volume], ['number', paper.issue], ['pages', paper.pages?.replace(/[-–]/g, '--')], ['eid', paper.article_number], ['doi', paper.doi], ['url', paper.url]] as const) {
    if (value) fields.push([field, value]);
  }
  if (!paper.volume && paper.doi) fields.push(['note', 'Advance online publication']);
  return `@article{${paper.id},\n${fields.map(([field, value]) => `  ${field} = {${value}}`).join(',\n')}\n}`;
}

function citation(paper: Publication) {
  const issue = paper.issue === '1_suppl' ? 'Suppl. 1' : paper.issue;
  let result = `<em>${esc(paper.journal)}</em>`;
  if (paper.volume) result += `, ${esc(paper.volume)}`;
  if (issue) result += `(${esc(issue)})`;
  if (paper.pages) result += `, ${esc(paper.pages.replaceAll('-', '–'))}`;
  else if (paper.article_number) result += `, ${esc(paper.article_number)}`;
  if (!paper.volume && paper.doi) result += '. Advance online publication';
  return result + '.';
}

function entry(paper: Publication) {
  const authorText = paper.authors.map(authorName).join('; ');
  const authors = paper.authors.map(author => author.family === 'Arnesen' && author.given === 'Sveinung' ? `<strong>${esc(authorName(author))}</strong>` : esc(authorName(author))).join('; ');
  const searchable = [paper.title, authorText, paper.journal, paper.year, paper.online_year || '', ...paper.topics].join(' ');
  const online = paper.online_year && paper.online_year < paper.year ? `<p class="publication-online-date">First published online ${paper.online_year}</p>` : '';
  const openLink = paper.open_access_url ? `<a class="open-version" href="${esc(paper.open_access_url)}" aria-label="Open version: ${esc(paper.title)}">Open version ↗</a>` : '';
  return `<article id="${esc(paper.id)}" class="publication-entry" data-search="${esc(searchable)}" data-topics="${esc(JSON.stringify(paper.topics))}" data-open="${Boolean(paper.open_access_url)}">
  <h3><a href="${esc(paper.url)}">${esc(paper.title)}</a></h3>
  <p class="publication-authors">${authors}</p>
  <p class="publication-citation">${citation(paper)}</p>
  ${online}
  <div class="publication-links"><a href="${esc(paper.url)}" aria-label="${paper.doi ? 'DOI' : 'Research record'}: ${esc(paper.title)}">${paper.doi ? 'DOI ↗' : 'Research record ↗'}</a>${openLink}
  <details><summary aria-label="BibTeX: ${esc(paper.title)}">BibTeX</summary><pre><code>${esc(bibtex(paper))}</code></pre></details></div>
</article>`;
}

const topics = [...new Set(publications.flatMap(paper => paper.topics))].sort();
let list = `<form class="publication-tools" data-publication-filters hidden>
  <div><label for="publication-search">Search articles</label><input id="publication-search" type="search" placeholder="Title, author, journal, or year" autocomplete="off"></div>
  <div><label for="publication-topic">Research topic</label><select id="publication-topic"><option value="">All topics</option>${topics.map(topic => `<option value="${esc(topic)}">${esc(topic)}</option>`).join('')}</select></div>
  <label class="open-filter" for="publication-open"><input id="publication-open" type="checkbox"> Open versions only</label>
</form>
<div class="publication-status"><p id="publication-count" role="status" aria-live="polite">${publications.length} articles</p><button class="reset-filter" type="button" data-reset-publications hidden>Clear filters</button></div>
<div id="publication-empty" class="publication-empty" hidden>No articles match these filters. Try a different search or clear the filters.</div>\n`;
for (const year of [...new Set(publications.map(paper => paper.year))]) {
  list += `<section class="publication-year" aria-labelledby="year-${year}"><h2 id="year-${year}">${year}</h2><div>${publications.filter(paper => paper.year === year).map(entry).join('\n')}</div></section>\n`;
}
const selected = `<div class="selected-publications">${publications.filter(paper => paper.selected).map(paper => `<article class="selected-publication"><div class="selected-year">${paper.year}</div><div><h3><a href="publications.html#${esc(paper.id)}">${esc(paper.title)}</a></h3><p class="selected-journal">${esc(paper.journal)}</p></div></article>`).join('\n')}</div>`;

function writeIfChanged(path: string, value: string) {
  try { if (Deno.readTextFileSync(path) === value) return; } catch (error) { if (!(error instanceof Deno.errors.NotFound)) throw error; }
  Deno.writeTextFileSync(path, value);
}
Deno.mkdirSync('_includes', { recursive: true });
Deno.mkdirSync('files', { recursive: true });
const raw = (value: string) => `<!-- Generated by scripts/build-publications.ts. Edit data/publications.json. -->\n\n\`\`\`{=html}\n${value}\n\`\`\`\n`;
writeIfChanged('_includes/publication-list.qmd', raw(list));
writeIfChanged('_includes/selected-publications.qmd', raw(selected));
writeIfChanged('files/publications.bib', '% Generated from data/publications.json.\n\n' + publications.map(bibtex).join('\n\n') + '\n');
console.log(`Prepared ${publications.length} journal articles (${publications.filter(paper => paper.open_access_url).length} open-version links).`);

