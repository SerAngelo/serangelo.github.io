# Angelo Serrecchia — personal website

Minimal static site, no build step. Hosted on GitHub Pages.
The site's **text is edited from a visual panel** (Pages CMS) — you normally
never touch these files by hand.

## Where the content lives

All editable text is in **`data/content.json`**. The pages read it and render
themselves (see `assets/js/site.js`). The visual panel (Pages CMS, configured
by `.pages.yml`) edits `data/content.json` for you with simple forms.

## Files

```
index / research / talks / cv / notes / hobbies .html   page shells (no text inside)
data/content.json      ← all the TEXT (edited via the panel)
.pages.yml             ← tells the visual panel which forms to show
assets/css/style.css   ← styling (colors, fonts, spacing)
assets/js/site.js      ← menu + footer + fills the pages from content.json
assets/img/            ← prof_pic.jpg, note covers (assets/img/notes/)
assets/pdf/            ← cv.pdf
CNAME / .nojekyll      ← custom domain + serve files as-is
robots.txt / sitemap.xml  ← SEO
```

## Editing

- **Normal way:** open the panel (Pages CMS) → edit the forms → Save. Done.
- **Menu / pages:** edit the `PAGES` list at the top of `assets/js/site.js`.
- **Look:** edit `assets/css/style.css`.
- **Photo / CV / note covers:** upload into `assets/img/`, `assets/pdf/`.
