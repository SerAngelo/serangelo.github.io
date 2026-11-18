/* =========================================================
   site.js — shared header + footer for every page.

   ►►► TO CHANGE THE SITE STRUCTURE, EDIT ONLY THIS FILE. ◄◄◄
   Add, remove or reorder a page by editing the PAGES list
   below. It updates the menu on every page automatically.
   To add a page: create the new .html file, then add a line
   here. That's it.
   ========================================================= */

const PAGES = [
  { href: "index.html",      label: "Home" },
  { href: "research.html",   label: "Research" },
  { href: "talks.html",      label: "Talks" },
  { href: "cv.html",         label: "CV" },
  { href: "notes.html",      label: "Notes" },
  { href: "hobbies.html",    label: "Hobbies" },
];

const SITE = {
  monogram: "AS",
  owner: "Angelo Serrecchia",
};

// --- work out which page we're on ---
function currentFile() {
  let path = location.pathname.split("/").pop();
  if (!path || path === "") path = "index.html";
  return path;
}

// --- build the top bar ---
function headerHTML() {
  const here = currentFile();
  const links = PAGES.map(p => {
    const active = (p.href === here) ? ' class="active"' : "";
    return `<a href="${p.href}"${active}>${p.label}</a>`;
  }).join("\n      ");
  return `
<header class="bar"><div class="bar-in">
  <a class="mono" href="index.html">${SITE.monogram}</a>
  <nav>
      ${links}
  </nav>
</div></header>`;
}

// --- build the footer ---
function footerHTML() {
  const year = new Date().getFullYear();
  const here = currentFile();
  const home = (here === "index.html") ? "" : `<a href="index.html">← Home</a> · `;
  return `
<footer class="site-foot"><div class="wrap">${home}© ${year} ${SITE.owner}</div></footer>`;
}

// --- inject around <main> ---
document.addEventListener("DOMContentLoaded", function () {
  const main = document.getElementById("main");
  if (!main) return;
  main.insertAdjacentHTML("beforebegin", headerHTML());
  main.insertAdjacentHTML("afterend", footerHTML());
});
