# Dinesh Yadav — Portfolio Website

A production-ready personal portfolio built with pure **HTML, CSS & JavaScript** — no frameworks, no build step, instant local preview, one-click Vercel deploy.

---

## 📁 Folder Structure

```
dinesh-portfolio/
├── index.html              ← Main HTML page
├── vercel.json             ← Vercel deployment config
├── README.md
├── css/
│   ├── reset.css           ← CSS reset
│   ├── variables.css       ← Design tokens (colors, fonts, spacing)
│   ├── main.css            ← Base styles, nav, hero, buttons
│   ├── sections.css        ← About, Skills, Projects, Experience, Education, Contact, Footer
│   ├── animations.css      ← Keyframes and reveal classes
│   └── responsive.css      ← Mobile-first breakpoints
├── js/
│   ├── cursor.js           ← Custom cursor
│   ├── nav.js              ← Sticky nav + mobile hamburger
│   ├── animations.js       ← Scroll reveal + counters
│   └── form.js             ← Contact form (mailto fallback)
└── assets/
    ├── Dinesh_Yadav_CV.pdf ← ⚠️ Add your CV here (rename to match exactly)
    └── images/             ← Add profile photo here (optional)
```

---

## 🚀 Run Locally

### Option A — VS Code Live Server (recommended)

1. Open the project folder in **VS Code**
2. Install the **Live Server** extension (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. Browser opens at `http://127.0.0.1:5500`

### Option B — Python HTTP server

```bash
# Python 3
cd dinesh-portfolio
python -m http.server 3000
# Open http://localhost:3000
```

### Option C — Node.js serve

```bash
npm install -g serve
cd dinesh-portfolio
serve .
# Open http://localhost:3000
```

> ⚠️ **Do NOT** just double-click `index.html` — Google Fonts won't load over `file://` protocol. Always use a local server.

---

## ☁️ Deploy to Vercel

### Option A — Vercel CLI (fastest)

```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Navigate into the project
cd dinesh-portfolio

# 3. Deploy
vercel

# Follow the prompts:
#   Set up and deploy? → Y
#   Which scope? → your account
#   Link to existing project? → N
#   Project name → dinesh-portfolio (or anything)
#   Directory → ./  (press Enter)
#   Override settings? → N
```

Your site is live! 🎉 Vercel gives you a URL like `https://dinesh-portfolio.vercel.app`

### Option B — GitHub + Vercel Dashboard

1. Push this folder to a **GitHub repo**
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Framework preset: **Other** (it's a static site)
5. Root directory: `./`
6. Click **Deploy**

---

## 🖼️ Adding Your Profile Photo

1. Add your photo to `assets/images/profile.jpg`
2. In `index.html`, find the `<div class="profile-placeholder">` block and replace it with:

```html
<img src="assets/images/profile.jpg" alt="Dinesh Yadav" class="profile-img" />
```

---

## 📄 Adding Your Resume PDF

1. Copy your CV PDF into `assets/`
2. Rename it exactly: `Dinesh_Yadav_CV.pdf`
3. The download buttons in Hero and Contact sections will work automatically

---

## 🎨 Customisation

All design tokens live in `css/variables.css`:

```css
--accent:    #7c6dfa;   /* change primary colour */
--accent-2:  #4fc3f7;   /* change secondary colour */
--bg:        #0a0a0f;   /* change background */
```

Font choices are in the `<head>` of `index.html` (Google Fonts import).

---

## ✅ Checklist Before Deploying

- [ ] `assets/Dinesh_Yadav_CV.pdf` added
- [ ] Profile photo added (optional but recommended)
- [ ] GitHub / LinkedIn URLs verified in `index.html`
- [ ] Email address verified in `index.html` and `js/form.js`
- [ ] Project GitHub links updated in the Projects section

---

## 🌐 Tech Stack

| Layer | Choice |
|-------|--------|
| Markup | Semantic HTML5 |
| Styling | Pure CSS3 with custom properties |
| Scripting | Vanilla JS (ES6+) |
| Fonts | Syne + DM Mono + Instrument Serif (Google Fonts) |
| Hosting | Vercel (static) |
| Dev tool | VS Code + Live Server |

---

Built with curiosity. © 2025 Dinesh Yadav.
