# Sveinung Arnesen — personal website

This branch contains the Quarto migration of the former R Markdown/Hugo Academic website. The proposed publishing target is GitHub Pages at **https://sveinunga.github.io/nettside/**. The migration is prepared for review; opening the pull request does not publish the site.

## Preview and build

Install [Quarto](https://quarto.org/docs/get-started/) 1.10.19 or later, then open `nettside.Rproj` in a recent RStudio or use a terminal in this directory:

```sh
quarto preview
```

For a complete build and internal-link check:

```sh
quarto render
quarto run scripts/check-site.ts
```

The current pages do not execute R code. The publication generator uses Deno bundled with Quarto, so no Python, Node, R packages, credentials, or internet connection are needed to render the site after installing Quarto.

## Edit the website

| File | Content |
| --- | --- |
| `index.qmd` | Biography, research overview, contact details |
| `research.qmd` | Research themes and projects |
| `publications.qmd` | Publication-page introduction |
| `data/publications.json` | Publication metadata, topics, open-version links, and source evidence |
| `cv.qmd` | Selected appointments, education, methods, and teaching |
| `assets/portrait.jpg` | Portrait copied from the old site |
| `assets/theme.scss`, `assets/styles.css` | Colours, typography, and layout |
| `_quarto.yml` | Navigation, output, search, and publishing URL |

Edit `data/publications.json` to add or correct an article. `quarto render` generates the publication list, the homepage selection, and `files/publications.bib`. Commit those generated files together with the JSON source; do not edit them independently. Set `selected: true` to include an article on the homepage.

The list is a checked snapshot, not a live Google Scholar feed. Search, topic filtering, open-version filtering, individual BibTeX entries, and the full BibTeX download work without external APIs. All articles remain readable if JavaScript is disabled.

## GitHub Pages setup

After reviewing and merging the migration:

1. Open this repository’s **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Open **Actions → Build and publish Quarto website** and run it on `master` if the merge-triggered deployment has not already succeeded.

Subsequent pushes to `master` render, check, and publish the site automatically. Pull requests build a downloadable `quarto-website` artifact for review and do not deploy. The workflow uses GitHub’s built-in token; no personal access token or Netlify account is needed.

## Content to review before relaunch

- Review the biography, portrait, email preferences, and the choice of highlighted articles.
- The CV page is a concise web profile. A current full CV PDF has not been supplied; the 2020 PDF linked from NORCE has intentionally not been presented as current.
- The research page imports the four substantive project entries and adds SCORE and ESS from verified institutional information. fAIrgov is correctly marked as a completed 2021–2025 project.
- See [publication sourcing notes](docs/publication-sources.md), including date differences and the older article with a 2013/2015 discrepancy.
- The list covers journal articles, not chapters, reports, book reviews, talks, or unpublished manuscripts. Those remain linked through NVA.

## Original Hugo source

`config.toml`, `content/`, `themes/`, `static/`, `public/`, `index.Rmd`, and the blogdown startup settings are retained as migration reference material. The explicit Quarto render list excludes them from the new site. The original `master` version also remains in Git history.

The old blog/tutorial examples and example talk are not included in the Quarto navigation or output. A writing section can be added when there is substantive writing to publish.

## Reconnect the custom domain later

Once the GitHub Pages site is ready, configure the custom domain in GitHub Pages, update its DNS at the domain provider, and change `website.site-url` in `_quarto.yml`. Review old publication/project URLs and add redirects as needed before announcing the relaunch. This branch does not change DNS, domain registration, Netlify, or repository settings.

