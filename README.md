# Angelo Serrecchia — personal website

Minimal static site. No build step, no framework — plain HTML/CSS/JS.
Hosted on GitHub Pages at **angeloserrecchia.com**.

## How it's structured

```
index.html          Home (intro + about)
research.html       Research (+ publications inline)
talks.html          Talks & conferences
cv.html             CV (education, award, skills)
notes.html          University notes
hobbies.html        Hobbies
CNAME               the custom domain
.nojekyll           tells GitHub Pages to serve files as-is
assets/
  css/style.css     ALL the styling (colors, fonts, spacing) — edit once, applies everywhere
  js/site.js        the shared MENU + FOOTER — the one place that defines site structure
  img/              images (put prof_pic.jpg here)
  pdf/              cv.pdf and notes PDFs
```

## How to change things

- **Text / content** → edit the relevant `.html` file, change the words between the tags.
- **Colors, fonts, spacing** → edit `assets/css/style.css` (one file for the whole site).
- **Menu / add or remove a page** → edit the `PAGES` list at the top of `assets/js/site.js`.
  To add a page: duplicate an existing `.html` file, change its content, then add one
  line to `PAGES`. The menu updates on every page automatically.
- **Photo** → put `prof_pic.jpg` in `assets/img/`.
- **CV** → put `cv.pdf` in `assets/pdf/`.

Each page does NOT contain the menu or footer in its own file — those are injected by
`assets/js/site.js`, so you never edit the menu in more than one place.
