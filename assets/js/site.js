/* =========================================================
   site.js — shared header + footer + content rendering.

   The site's TEXT lives in  data/content.json  and is edited
   from the visual panel (Pages CMS). This file reads that
   file and fills the pages. To change the MENU/pages, edit
   the PAGES list below.
   ========================================================= */

const PAGES = [
  { href: "index.html",    label: "Home" },
  { href: "research.html", label: "Research" },
  { href: "talks.html",    label: "Talks" },
  { href: "cv.html",       label: "CV" },
  { href: "notes.html",    label: "Notes" },
  { href: "hobbies.html",  label: "Hobbies" },
];
const SITE = { monogram: "AS", owner: "Angelo Serrecchia" };

/* ---------- helpers ---------- */
function currentFile() {
  let p = location.pathname.split("/").pop();
  return (!p) ? "index.html" : p;
}
function esc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function mount(id) { return document.getElementById(id); }

/* ---------- header + footer ---------- */
function headerHTML() {
  const here = currentFile();
  const links = PAGES.map(p =>
    `<a href="${p.href}"${p.href === here ? ' class="active"' : ""}>${p.label}</a>`
  ).join("\n      ");
  return `
<header class="bar"><div class="bar-in">
  <a class="mono" href="index.html">${SITE.monogram}</a>
  <nav>
      ${links}
  </nav>
</div></header>`;
}
function footerHTML() {
  const year = new Date().getFullYear();
  const home = currentFile() === "index.html" ? "" : `<a href="index.html">← Home</a> · `;
  return `
<footer class="site-foot"><div class="wrap">${home}© ${year} ${SITE.owner}</div></footer>`;
}

/* ---------- content renderers ---------- */
function renderHero(h) {
  const el = mount("mount-hero");
  if (!el || !h) return;
  const link = h.role_link_label
    ? `${esc(h.role_prefix)} <a href="${esc(h.role_link_url)}" target="_blank" rel="noopener">${esc(h.role_link_label)}</a>`
    : esc(h.role_prefix);
  el.innerHTML = `
    <div class="hero-row">
      <img class="pfp" id="pfp" src="assets/img/prof_pic.jpg" alt="${esc(h.name)}">
      <div class="hero-text">
        <div class="eyebrow">${esc(h.eyebrow)}</div>
        <h1 class="hero-name">${esc(h.name)}</h1>
        <p class="hero-sub">${link}</p>
        <a class="btn-contact" href="mailto:${esc(h.email)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M3 7l9 6 9-6"></path></svg>
          Contact me
        </a>
      </div>
    </div>`;
  const img = mount("pfp");
  if (img) img.addEventListener("error", function () {
    const d = document.createElement("div");
    d.className = "pfp"; d.innerHTML = "your<br>photo";
    img.replaceWith(d);
  });
}
function renderAbout(paras) {
  const el = mount("mount-about");
  if (!el || !paras) return;
  el.innerHTML = paras.map(p => `<p class="lead">${esc(p)}</p>`).join("\n");
}
function renderResearch(r) {
  const el = mount("mount-research");
  if (!el || !r) return;
  const topics = (r.topics || []).map(t => {
    const cite = t.citation_text
      ? `<p class="cite">${t.citation_url ? `<a href="${esc(t.citation_url)}" target="_blank" rel="noopener">${esc(t.citation_text)}</a>` : esc(t.citation_text)}</p>`
      : "";
    return `
    <div class="topic">
      <div class="topic-head"><h3 class="th">${esc(t.title)}</h3></div>
      <p>${esc(t.body)}</p>
      ${cite}
    </div>`;
  }).join("\n");
  el.innerHTML = `
    <p class="lead">${esc(r.lead)}</p>
    <p class="inline-links"><a href="${esc(r.publication_list_url || "#")}">Publication list →</a></p>
    ${topics}`;
}
function renderTalks(talks) {
  const el = mount("mount-talks");
  if (!el || !talks) return;
  el.innerHTML = talks.map(t => `
    <div class="row2"><div><div class="m">${esc(t.title)}</div><div class="s">${esc(t.place)}</div></div><div class="dt">${esc(t.date)}</div></div>`
  ).join("\n");
}
function renderCV(cv) {
  const el = mount("mount-cv");
  if (!el || !cv) return;
  const edu = (cv.education || []).map(e =>
    `<div class="row2"><div><div class="m">${esc(e.degree)}</div><div class="s">${esc(e.place)}</div></div><div class="dt">${esc(e.date)}</div></div>`
  ).join("\n");
  const skills = (cv.skills || []).map(s => `<span class="tag">${esc(s)}</span>`).join("");
  el.innerHTML = `
    <section class="first"><h2>Education</h2>${edu}</section>
    <section><h2>Award</h2><p>${esc(cv.award)}</p></section>
    <section><h2>Technical skills</h2><div class="tags">${skills}</div></section>
    <section><h2>Full CV</h2><p><a href="${esc(cv.cv_pdf || "#")}">Download CV (PDF) →</a></p></section>`;
}
function renderNotes(n) {
  const el = mount("mount-notes");
  if (!el || !n) return;
  const cards = (n.items || []).map(it => `
    <a class="ncard" href="${esc(it.url || "#")}">
      <img class="cover" src="${esc(it.cover)}" alt="" onerror="this.replaceWith(Object.assign(document.createElement('span'),{className:'cover ph',textContent:'cover'}))">
      <span class="ncard-body"><span class="ncard-t">${esc(it.title)}</span><span class="ncard-d">${esc(it.description)}</span></span>
    </a>`
  ).join("\n");
  el.innerHTML = `<p class="lead">${esc(n.lead)}</p><div class="cards-grid">${cards}</div>`;
}
function renderHobbies(list) {
  const el = mount("mount-hobbies");
  if (!el || !list) return;
  el.innerHTML = list.map(h => `<div class="item"><div class="t">${esc(h)}</div></div>`).join("\n");
}

function renderContent(data) {
  renderHero(data.hero);
  renderAbout(data.about);
  renderResearch(data.research);
  renderTalks(data.talks);
  renderCV(data.cv);
  renderNotes(data.notes);
  renderHobbies(data.hobbies);
}

/* ---------- boot ---------- */
document.addEventListener("DOMContentLoaded", function () {
  const main = document.getElementById("main");
  if (main) {
    main.insertAdjacentHTML("beforebegin", headerHTML());
    main.insertAdjacentHTML("afterend", footerHTML());
  }
  fetch("data/content.json", { cache: "no-store" })
    .then(r => r.json())
    .then(renderContent)
    .catch(function (e) { console.error("content load failed", e); });
});
