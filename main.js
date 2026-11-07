/* =====================================================================
   main.js: reads your content from data.js and builds the page.
   You usually do NOT need to edit this file. Edit data.js instead.
   Edit here only if you want to change HOW things animate or render.
   ===================================================================== */
(() => {
  const P = PORTFOLIO;                                  // your content from data.js
  const $ = (id) => document.getElementById(id);        // shortcut: find element by id

  // True if the visitor asked their device to reduce animations (accessibility)
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Makes text safe to insert into HTML (so special characters can't break the page)
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------------- 1. BASIC TEXT & LINKS ---------------- */
  document.title = `${P.name} · ${P.role.split("·")[0].trim()}`;
  $("hello").textContent = P.hello;
  $("name").textContent = P.name;
  $("role").textContent = P.role;
  $("tagline").textContent = P.tagline;
  $("initials").textContent = P.initials;
  $("mail-btn").href = `mailto:${P.email}`;
  $("contact-text").textContent = `I'm open to internships, freelance work and open-source collaboration. Write to me at ${P.email} and I'll happily reply.`;
  $("footer").textContent = `© ${new Date().getFullYear()} ${P.name}. Built with plain HTML, CSS and JavaScript.`;

  // Download CV button
  $("cv-btn").href = P.cv;
  $("cv-btn").setAttribute("download", P.cvFileName || "CV.pdf");

  /* ---------------- 2. PHOTO ----------------
     Try to load the photo. If the file doesn't exist yet,
     hide the <img> and show the initials instead. */
  const photo = $("photo");
  photo.addEventListener("error", () => $("photo-frame").classList.add("no-photo"));
  photo.src = P.photo;

  /* ---------------- 3. SOCIAL LINKS ---------------- */
  $("socials").innerHTML = P.socials
    .map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`)
    .join("");

  /* ---------------- 4. ABOUT ---------------- */
  $("about-text").innerHTML = P.about.map((t) => `<p>${esc(t)}</p>`).join("");

  /* ---------------- 5. SKILLS ---------------- */
  $("skills-grid").innerHTML = P.skills.map((g) => `
    <div class="skill-group">
      <h3>${esc(g.group)}</h3>
      <ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
    </div>`).join("");

  /* ---------------- 6. PROJECTS ---------------- */
  $("projects-grid").innerHTML = P.projects.map((p) => `
    <article class="project reveal">
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.desc)}</p>
      <ul class="tags">${p.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      <div class="links">
        ${p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">Source code</a>` : ""}
        ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">Live demo</a>` : ""}
      </div>
    </article>`).join("");

  /* ---------------- 7. TIMELINE ---------------- */
  $("timeline").innerHTML = P.timeline.map((t) => `
    <li class="reveal">
      <span class="when">${esc(t.when)}</span>
      <div><h3>${esc(t.title)}</h3><p class="place">${esc(t.place)}</p><p>${esc(t.text)}</p></div>
    </li>`).join("");

  /* ---------------- 8. TERMINAL TYPING ANIMATION ----------------
     Types each command letter by letter, then prints its output.
     Speed: change the numbers in sleep(...) below (milliseconds). */
  const term = $("term");
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  async function runTerminal() {
    term.innerHTML = "";
    for (const step of P.terminal) {
      const line = document.createElement("div");
      line.innerHTML = '<span class="prompt">$ </span><span class="typed"></span>';
      term.appendChild(line);
      const typed = line.querySelector(".typed");

      if (reduceMotion) typed.textContent = step.cmd;                       // no animation mode
      else for (const ch of step.cmd) { typed.textContent += ch; await sleep(55 + Math.random() * 60); } // typing speed

      if (!reduceMotion) await sleep(260);                                  // pause before result
      step.out.forEach((o) => {
        const out = document.createElement("div");
        out.className = "out";
        out.textContent = o;
        term.appendChild(out);
      });
      if (!reduceMotion) await sleep(520);                                  // pause before next command
    }
    // Final blinking cursor
    const last = document.createElement("div");
    last.innerHTML = '<span class="prompt">$ </span><span class="cursor"></span>';
    term.appendChild(last);
  }

  // Start typing only when the terminal scrolls into view
  const termBox = document.querySelector(".terminal");
  if ("IntersectionObserver" in window) {
    const t = new IntersectionObserver((e) => { if (e[0].isIntersecting) { t.disconnect(); runTerminal(); } }, { threshold: 0.4 });
    t.observe(termBox);
  } else runTerminal();

  /* ---------------- 9. SCROLL REVEAL ----------------
     Elements with class "reveal" fade in when scrolled into view. */
  const items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    items.forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 80}ms`; io.observe(el); }); // small stagger
  } else items.forEach((el) => el.classList.add("in"));

  /* ---------------- 10. NAV HIGHLIGHT ----------------
     Underlines the nav link of the section you are currently reading. */
  const links = [...document.querySelectorAll(".nav nav a")];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach((s) => spy.observe(s));
})();
