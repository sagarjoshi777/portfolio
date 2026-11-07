# Sagar Joshi: Portfolio

Plain HTML, CSS and JavaScript. No build step, no installs.

## Folder map
```
portfolio/
├── index.html       page structure (sections)
├── css/style.css    colors, fonts, layout (edit the :root colors at the top)
├── js/data.js       ★ ALL your text, skills, projects, links. Edit this most.
├── js/main.js       builds the page + animations (rarely edited)
└── assets/
    ├── photo.jpg    ★ your photo (square-ish works best)
    └── cv.pdf       ★ your CV
```

## First-time setup
1. Open `js/data.js` and replace every line marked `EDIT`.
2. Add `assets/photo.jpg` and `assets/cv.pdf`.
3. Preview: run `python3 -m http.server 8000` in this folder, open http://localhost:8000

## Adding things later
- **New skill:** add a name to an `items` list in `data.js`.
- **New project:** copy a `{ ... }` block in `projects`.
- **New timeline entry:** copy a block in `timeline`.
- **New section:** add a `<section id="x">` in `index.html`, a nav link, and render it in `main.js`.
- **New colors:** change the variables in `:root` in `css/style.css`.

## Deploy on GitHub Pages
```bash
git init
git add .
git commit -m "My portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<username>.github.io.git
git push -u origin main
```
Then: repo **Settings → Pages → Deploy from a branch → main → / (root) → Save**.
Your site will be live at `https://<username>.github.io` in about a minute.
Update later with: `git add . && git commit -m "Update" && git push`
