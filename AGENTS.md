# AGENTS.md

Rules for anyone (human or agent) changing this site. Read this before your first edit.

The site is a Jekyll site published at `adivekar.com`. Every fact appears in **three layers**, and they must never disagree:

| Layer | Lives in | Read by |
|---|---|---|
| **Human-visible** | `_pages/`, `_includes/`, `_data/` | People in a browser |
| **LLM-visible** | `llms.txt`, JSON-LD, `sitemap.xml`, `feed.xml`, meta tags | Crawlers, assistants, search |
| **Scaffolding** | `_config.yml`, `_layouts/`, `_sass/`, `assets/js/`, redirect stubs | The build itself |

**The one rule:** a change is not finished until the human page, `llms.txt`, and the structured data all agree. `llms.txt` is generated from the same `_data` files as the page, so most of the time this is automatic. When it is not, it is because you edited prose in a template instead of a data file, or you added a fact that only lives in one place.

Verify with the sync check in [Checks before committing](#5-checks-before-committing).

---

## 1. If you change X, also update Y

### A publication (`_publications/YYYY-MM-DD-slug.md`)

**Automatic** (nothing to do): homepage card, `llms.txt` Publications block, `ScholarlyArticle` JSON-LD, the `/publication/<permalink>/` stub, `sitemap` exclusion.

**Manual, and easy to forget:**

| Also update | Why |
|---|---|
| `_data/news.yml` | A new paper needs a news line; that is how it appears at the top of the page |
| `_config.yml` → `description` | It names the venues ("NeurIPS 2026, CIKM 2026, AAAI 2026 and EMNLP 2024") |
| `_data/home.yml` → `hero[0]` | Same venue list in the intro |
| `_pages/about.md` → `excerpt` | Same venue list in the meta description |
| `files/Abhishek-Divekar-CV.pdf` | Outside the build; rebuild it by hand |
| `images/papers/<slug>.jpg` + `images/papers/thumbs/<slug>.jpg` | Full figure and 16:9 thumbnail |

### A news item (`_data/news.yml`)

| Also update | Why |
|---|---|
| `_data/news_tags.yml` | A new `tag` needs a display label |
| `_sass/_home.scss` → `.news-tag--<tag>` | A new tag needs a colour class, or it renders unstyled |
| `order:` field | Tie-breaker for items on the same date (higher shows first) |

Automatic: homepage News, the filter bar, `llms.txt` News.

### A talk (`_talks/YYYY-MM-DD-slug.md`)

Automatic: Speaking stage and card strip, `llms.txt` Speaking.

| Also update | Why |
|---|---|
| `_data/news.yml` | A talk worth announcing needs a news line |
| `images/slides/<slides_dir>/s-01.jpg …` | Slide images, if you set `slides_dir` and `slides_count` |
| `images/<teaserurl>` | The card image |
| `files/<deck>.pdf` | If the deck is downloadable |

### A blog post (`_posts/YYYY-MM-DD-slug.md`)

Automatic: Writing list, post page, `llms.txt` Writing, `feed.xml`, `sitemap.xml`.

Manual: nothing, unless the post should be hidden (`hidden: true`).

### A section bar item

A section touches **seven** places. This is the most error-prone change on the site.

| # | File | What |
|---|---|---|
| 1 | `_pages/about.md` | `<a class="tab" href="#anchor">Label</a>` inside `.tabbar--home` |
| 2 | `_pages/about.md` | `{% include home/<name>.html %}` in the right order |
| 3 | `_includes/home/<name>.html` | The section markup, with `<section class="home-section" id="anchor">` |
| 4 | `_data/<name>.yml` | The content, so `llms.txt` can read it |
| 5 | `llms.txt` | A `## Label` block with the same loop |
| 6 | `_pages/redirect-<label-slug>.html` | `/label-slug/` → `/#anchor` |
| 7 | `_sass/_home.scss` | Any new classes; check the 140px scroll offset and the mobile wrap |

The redirect stubs carry a comment saying the same thing. Hyphenate the slug: `/ai-olympiad/`, `/product-launches/`.

### Identity facts (`_data/profile.yml`)

These flow automatically into JSON-LD, `llms.txt`, the sidebar and meta tags: `name`, `employer`, `education`, `memberships`, `research_areas`, `google_scholar`.

**Not automatic:**

| Also update | Why |
|---|---|
| `_config.yml` → `title`, `name`, `description`, `author.*`, `social.links` | Duplicated by hand; `social.links` is the `sameAs` graph |
| `images/og-card.jpg` | The 1200x630 social card has the name, title and venue list **baked into the pixels** |
| `files/Abhishek-Divekar-CV.pdf` | Same facts, outside the build |

### The job title

`_data/profile.yml` → `title_style` is the single source. `{% include jobtitle %}` reads it; front matter cannot run Liquid, so it writes `[[TITLE]]` and templates substitute it.

| Also update | Why |
|---|---|
| `images/og-card.jpg` | Title is baked into the image |
| `files/Abhishek-Divekar-CV.pdf` | Outside the build |

Nothing else should hardcode a title. If you find one, replace it with `[[TITLE]]` or `{% include jobtitle %}`.

`[[TITLE]]` is substituted in page front matter (`seo_title`, `description`), `_data/news.yml` text, `_data/history.yml` role, and `_config.yml` `author.bio`. The substitution lives in `_includes/seo.html`, `_includes/author-profile.html`, `_includes/home/news.html`, `_includes/home/history.html` and `llms.txt`. If you add a new template that prints a front-matter string, add the same `| replace: "[[TITLE]]", jobtitle` filter.

### An image

| Rule | Detail |
|---|---|
| **Alt text is mandatory** | No `alt=""` anywhere. Publications use `thumb_alt:`; open-source cards use `alt:`; everything else sets `alt` inline |
| Paper thumbnails | 640x360 (16:9), full figure 1600px wide, both JPEG |
| CV | `files/Abhishek-Divekar-CV.pdf` only. There is no HTML CV and no rendered page images; the CV link opens the PDF directly. `/cv/` and `/resume` are redirect stubs pointing at the file |
| Portrait | `images/profile-560.jpg` and `.webp`, 560x560 source |
| No EXIF | Strip GPS and camera metadata before committing |

### Other content files

| File | Feeds | Also check |
|---|---|---|
| `_data/history.yml` | Career section (grouped: Full-time, Part-time, Academic and olympiad service, Internships, Education) | `llms.txt` Career; news if it is a milestone |
| `_data/launches.yml` | Product launches | `llms.txt`; news |
| `_data/ioai.yml` | AI Olympiad cards | Images under `images/`; `llms.txt` |
| `_data/oss.yml` | Open source cards | Image in `images/oss/`, `alt:` field |
| `_data/awards.yml` | Awards rows and photos | `llms.txt`; news |
| `_data/press.yml` | Press & Media | `llms.txt` |
| `_data/service.yml` | Service | `llms.txt` |
| `_data/navigation.yml` | Top nav (Writing, Speaking, CV) | A matching page in `_pages/` |

---

## 2. Publication field reference

Copy an existing file and fill every field.

```yaml
---
title: "Full paper title"
collection: publications
urlslug: "short-slug"            # becomes /#short-slug and the card id
permalink: /publication/<slug>   # the redirect stub
external: true                   # true = public paper, false/absent = internal
tier: "peer-reviewed"            # peer-reviewed | peer-reviewed-workshop | internal
date: 2026-11-06                 # YYYY-MM-DD, drives sort order (newest first)
venue: 'Full venue name'
venue_short: 'CIKM 2026 (Research track)'   # shown on the card
paperurl: 'https://…'            # "(internal)" if there is no public link
codeurl: 'https://…'             # optional
projecturl: 'https://…'          # optional
acceptancetype: 'Poster'         # Oral | Poster | omit
acceptancerate: '26.5%'          # rendered as "26.5% acceptance rate"
role: 'Co-first author (equal contribution)'
citation: 'A Author*, <u>Abhishek Divekar</u>*, B Author. <b>&quot;Title&quot;</b>. <i>Venue</i>.'
excerpt: "The abstract, plain text."
thumb: 'slug.jpg'                # 16:9, in images/papers/thumbs/
thumb_alt: "One sentence describing what the figure shows."
pitch: "One-line TL;DR."
---
```

Rules:

- **Author markup:** `<u>Abhishek Divekar</u>` for your name, `<u>Abhishek Divekar</u>*` for equal contribution. `_includes/authors.html` bolds and underlines only your name and only your star.
- **`venue_short` format:** `Venue Year (Track)`, for example `NeurIPS 2026 (Main track)`, `AAAI 2026 (Industry track)`, `CIKM 2026 (Research track)`, `ACL 2026 (GEM Workshop)`.
- **`tier: internal`** = an AMLC paper. It renders in the AMLC subsection, gets **no abstract and no expand toggle**, and must **not** carry an `excerpt` or body text (internal material was deliberately purged; see Privacy).
- **`listed: false`** hides a paper everywhere without deleting the file.
- **Dates drive order.** Set the real publication date, not today's.

---

## 3. Privacy: what must never be committed

| Never commit | Why |
|---|---|
| The personal Gmail account (initials `a.r.d` at gmail) | Purged from all history; never write the address itself into any file, including this one |
| Phone number, the home PIN, the UT EID | Purged from all history; same rule, do not restate them here |
| University transcripts (PDF or image) | Purged; the filenames are still referenced in old `_pages/cv.md` history |
| Internal AMLC paper abstracts | Purged from every file, including `markdown_generator/` |

**Allowed and intentional:** `adivekar` and `adivekar`. The UT address is the public contact; on the page it is assembled on click from `data-u`/`data-d`/`data-t`, and `llms.txt` writes it as `adivekar`. Do not put the plain address in HTML or in `_data/*.yml`. The Amazon address appears only inside PDFs.

**Local-only, gitignored:** `_private/internal-abstracts/` (the purged abstracts) and `_private/recovered/` (files that exist only in old history). Never commit these; never delete them.

**Not committed at all:** `_site/`, `.bundle/`, `vendor/`.

---

## 4. Build and run

Use the project's Ruby env; system Ruby 2.6 cannot run this Gemfile.

```bash
export PATH="$HOME/miniconda3/envs/jekyll-site/bin:$PATH"
export LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8   # Sass fails on ASCII locale

# Local preview (local URLs, dev settings)
bundle exec jekyll serve --config _config.yml,_config.dev.yml

# Production build (absolute https://adivekar.com URLs)
bundle exec jekyll build --destination /tmp/site-check
```

**Trap:** building with `_config.yml` alone writes absolute `https://adivekar.com` asset URLs into `_site/`. The local preview then loads `home.js` from production and the expand buttons, the news filter and Copy for LLM silently stop working. After a production build, rebuild with both configs before looking at the local site.

**Trap:** `_config.yml` is only read at startup. Restart the server after changing it.

---

## 5. Checks before committing

Run these in order. All must pass.

1. **Build clean.** No Liquid errors, no warnings you introduced.
2. **`llms.txt` mirrors the page.** Every text fragment of the rendered homepage must appear in `llms.txt`:

   ```bash
   python3 - <<'PY'
   import re, html, pathlib
   home = pathlib.Path('_site/index.html').read_text()
   llms = pathlib.Path('_site/llms.txt').read_text()
   main = re.search(r'(?s)<main.*?</main>', re.sub(r'(?s)<script.*?</script>', ' ', home)).group(0)
   txt = html.unescape(re.sub(r'(?s)<[^>]+>', '\n', main))
   norm = lambda s: re.sub(r'\s+', ' ', re.sub(r"[^\w\s.,:;!?%/+&$'-]", '', s.replace('\u2019', "'")))
   frags = [f.strip() for f in re.split(r'\n+', txt) if len(f.strip()) > 28]
   miss = [f for f in frags if norm(f)[:60] not in norm(llms)]
   print("fragments:", len(frags), "| missing:", len(miss))
   for m in miss: print("  ", m[:110])
   PY
   ```

   `missing: 0` is the only acceptable result. A fragment that is genuinely different (for example a curly apostrophe) will show up here; fix the source, not the check.
3. **No PII in the page source.** `grep -E "adivekar@(gmail|utexas|amazon)" _site/**/*.html` returns nothing.
4. **No em dashes or en dashes** in rendered content: `grep -r "—\|–" _site --include='*.html'` returns nothing. Hyphens are fine; CTA arrows (`→`) are fine.
5. **No empty alt:** `grep -c 'alt=""' _site/index.html` is `0`.
6. **Redirects resolve.** Every `/section/` URL returns 200 and points at its anchor.
7. **JSON-LD parses** on every page, with one `Person` carrying a non-empty `sameAs`:

   ```bash
   python3 - <<'PY'
   import json, re, pathlib
   bad = total = 0
   for p in pathlib.Path('_site').rglob('*.html'):
       for b in re.findall(r'(?s)<script type="application/ld\+json">(.*?)</script>', p.read_text(errors='replace')):
           total += 1
           try: json.loads(b)
           except Exception as e:
               bad += 1; print("INVALID", p, e)
   print(f"blocks: {total} | invalid: {bad}")
   PY
   ```

8. **Redirects resolve.** Every `/section/` URL returns 200 and points at its anchor, and `/cv/` reaches the PDF.
9. **Links.** No broken internal links in the built site.
10. **Visual check** of the changed area in a browser at desktop and phone width.

---

## 6. Structured data

Emitted by `_includes/person-jsonld.html` on every page, from the same data files as the page.

| Type | Source | Notes |
|---|---|---|
| `Person` | `_data/profile.yml` + `_config.yml` `social.links` | `sameAs` is the identity graph: ORCID, DBLP, Google Scholar, Semantic Scholar, OpenReview, LinkedIn, GitHub, X, HuggingFace. Add any new profile here only, and it propagates to every page |
| `ScholarlyArticle` | every `_publications/` file with `external: true` and a `paperurl` | Includes the abstract |
| `Event` | every file in `_talks/` | `location` drives online vs offline attendance; `videourl` becomes a `VideoObject` |
| `SoftwareSourceCode` | every entry in `_data/oss.yml` | `codeRepository` is the first link |
| `BreadcrumbList` | `_includes/breadcrumb-jsonld.html` | Inner pages only; homepage gets none |
| `WebSite`, `ProfilePage` | `_config.yml` | |

**When you add a talk or a repo, the JSON-LD follows automatically.** When you add a *new kind* of thing, add a block here, and check that the emitted JSON still parses (see the checks below).

---

## 7. Style conventions

| Topic | Rule |
|---|---|
| Dashes | No em dashes or en dashes. Use a comma, a period, or a hyphen. |
| Arrows | `→` only in call-to-action links ("Read the paper →"). Never as a dash. |
| Dates | `YYYY-MM-DD` in data, `Mon YYYY` or `Month YYYY` in display. Month-level precision is acceptable when the exact day is unknown; do not invent a day. |
| Tone | Plain, first person, no marketing words ("elegant", "cutting-edge", "world-class"). |
| Emphasis | Bold the single most important phrase in a cluster, not whole sentences. |
| Names | "Abhishek Divekar" in full the first time in a block; the site is first-person elsewhere. |
| Numbers | `USD 550 million`, `100M+`, `~650,000`, `19.2%`. On a publication card the label is `25.7% Accept Rate` (a tag, uppercase, next to Poster/Oral). In prose and in `llms.txt`-only text write "19.2% acceptance rate". Never bare "acceptance". |
| Venues | Full name in `venue`, short form in `venue_short`. Spell out AAAI, CIKM, NeurIPS, EMNLP on first use in prose. |

---

## 8. Known traps

| Symptom | Cause | Fix |
|---|---|---|
| Expand buttons and Copy for LLM do nothing locally | `_site` was built with production URLs | Rebuild with `_config.yml,_config.dev.yml` |
| Expanded card content is indented far from the card edge | `.prow__more` was given a left margin matching the thumbnail column | When open the card is one column; everything sits at the card's 20px padding, the same as every other card. Do not add a left margin to `.prow__more` |
| Sticky bar sits under the header | `top` offset out of sync with `$masthead-h` | Both use `$masthead-h + 1px` |
| `alt` text is truncated at a colon | `default:` filter applies before `split` | Assign the alt in an `{% if %}` block first |
| A new section tab scrolls sideways | Too many tabs for the bar | Bar wraps at 1100px; keep labels short |
| Numbers wrong in the social card | `og-card.jpg` is a raster with text baked in | Regenerate the image |
| News tag renders grey | No `.news-tag--<tag>` rule | Add the class in `_sass/_home.scss` |
| Section anchor lands under the sticky bar | Missing scroll offset | Sections use `scroll-margin-top: 140px` |

---

## 9. Git

- One commit per logical change. Commit locally as you go; do not batch unrelated edits.
- Never commit `_site/`, `_private/`, `vendor/`, `.bundle/`.
- History has been rewritten several times to remove private material. If you must rewrite again, scope it to the commits **after** the fork point `9aa1826` (the last upstream template commit), leave the template history intact, then `git for-each-ref refs/original`, expire reflogs and `git gc --prune=now`.
- The remote is behind local history and a force-push is expected. Do not push without being asked.

---

## 10. File map

```
_config.yml                 site-wide settings, description, social graph, og_image
_config.dev.yml             local overrides (localhost URLs)
_data/profile.yml           identity: name, title_style, employer, education, memberships
_data/home.yml              hero paragraphs and section intros
_data/history.yml           Career groups
_data/news.yml              news items; news_tags.yml holds their labels
_data/launches.yml          Product launches
_data/ioai.yml              AI Olympiad cards
_data/oss.yml               Open source cards
_data/awards.yml            Awards rows and photos
_data/press.yml             Press & Media
_data/service.yml           Service
_data/navigation.yml        top nav
_pages/about.md             the homepage: hero, news, section bar, section includes
_pages/writing.html         Writing list
_pages/speaking.html        Speaking
_pages/redirect-*.html      /section/ stubs; keep in sync with the section bar
_pages/redirect-cv.html     /cv/ and /resume -> the CV PDF
_includes/home/*.html       one include per homepage section
_includes/paper-row.html    one publication card
_includes/authors.html      author line: your name bold, underlined, star bold
_includes/jobtitle          the [[TITLE]] resolver
_includes/person-jsonld.html  JSON-LD graph: Person, articles, Events, repos
_includes/breadcrumb-jsonld.html  BreadcrumbList for inner pages
_includes/seo.html          meta tags, canonical, og:image, twitter card
llms.txt                    the LLM-readable mirror (generated from _data)
_sass/_home.scss            the design system: palette, cards, tabs, rows
_sass/_custom.scss          theme overrides
assets/js/home.js           card expand, news filter, scroll spy, email, Copy for LLM
assets/js/talks.js          Speaking stage
```
