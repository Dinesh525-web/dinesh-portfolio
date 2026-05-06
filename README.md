# 🚀 Dinesh Yadav — Personal Portfolio

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-7c6dfa?style=for-the-badge&logo=vercel&logoColor=white)](https://dinesh-portfolio-93wz8fpgm-dineshyadav2022-5001s-projects.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Dinesh525--web-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Dinesh525-web)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-dineshyadav01-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/dineshyadav01)

**A modern, responsive, and animated personal portfolio — built with pure HTML, CSS & JavaScript. No frameworks. No build step. Instant deploy.**

</div>

---

## ✨ Features

- 🎨 **Dark theme** with electric violet accent and custom color system
- 🖱️ **Custom magnetic cursor** with smooth follower animation
- 📜 **Scroll reveal animations** using Intersection Observer API
- 📊 **Animated stat counters** triggered on scroll
- 📱 **Fully responsive** — mobile-first design with hamburger nav
- ⚡ **Zero dependencies** — pure HTML, CSS, JS only
- 🔤 **Premium typography** — Syne + DM Mono + Instrument Serif
- 🧭 **Active section tracking** in navbar on scroll
- 📬 **Contact form** with mailto fallback (no backend needed)
- 🏎️ **Vercel-optimized** with proper caching headers

---

## 🖥️ Live Demo

🔗 **[dinesh-portfolio.vercel.app](https://dinesh-portfolio-93wz8fpgm-dineshyadav2022-5001s-projects.vercel.app)**

---

## 📁 Project Structure

```
dinesh-portfolio/
├── index.html              ← Single-page portfolio
├── vercel.json             ← Vercel deployment config
├── README.md
├── css/
│   ├── reset.css           ← CSS reset
│   ├── variables.css       ← Design tokens (colors, fonts, spacing)
│   ├── main.css            ← Base styles, nav, hero, buttons
│   ├── sections.css        ← All section styles
│   ├── animations.css      ← Keyframes & scroll reveal
│   └── responsive.css      ← Mobile-first breakpoints
├── js/
│   ├── cursor.js           ← Custom cursor logic
│   ├── nav.js              ← Sticky nav + mobile menu
│   ├── animations.js       ← Scroll reveals + counters
│   └── form.js             ← Contact form handler
└── assets/
    ├── Dinesh_Yadav_CV.pdf ← Downloadable resume
    └── images/             ← Profile photo & visuals
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | Semantic HTML5 |
| Styling | Pure CSS3 + Custom Properties |
| Scripting | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts (Syne, DM Mono, Instrument Serif) |
| Hosting | Vercel |
| Dev Tool | VS Code + Live Server |

---

## 🚀 Run Locally

### Using VS Code Live Server *(recommended)*

```bash
# 1. Clone the repo
git clone https://github.com/Dinesh525-web/dinesh-portfolio.git

# 2. Open in VS Code
cd dinesh-portfolio
code .

# 3. Install Live Server extension (by Ritwick Dey)
# 4. Right-click index.html → "Open with Live Server"
# Opens at http://127.0.0.1:5500
```

### Using Python

```bash
cd dinesh-portfolio
python -m http.server 3000
# Open http://localhost:3000
```

### Using Node.js

```bash
npx serve .
# Open http://localhost:3000
```

> ⚠️ Always use a local server — never open `index.html` directly via `file://` as Google Fonts won't load.

---

## ☁️ Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy preview
vercel

# Deploy to production
vercel --prod
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for **automatic deployments** on every `git push`.

---

## 📄 Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | **Hero** | Name, role, stats, CTA buttons |
| 02 | **About** | Bio, profile photo, contact info |
| 03 | **Skills** | Languages, ML/DL, libraries, hardware |
| 04 | **Projects** | 3 ML projects + 1 research publication |
| 05 | **Experience** | Work & research timeline |
| 06 | **Education** | Degrees, certifications, sports achievements |
| 07 | **Contact** | Form + social links + resume download |

---

## 🎨 Customisation

All design tokens are in `css/variables.css`:

```css
--accent:    #7c6dfa;   /* primary colour  */
--accent-2:  #4fc3f7;   /* secondary colour */
--bg:        #0a0a0f;   /* background       */
```

---

## 👨‍💻 About Me

**Dinesh Yadav** — Machine Learning & NLP Enthusiast

- 🎓 BTech (IT & Mathematical Innovation) @ Cluster Innovation Centre, Delhi University — CGPA: **8.34**
- 🔬 Research on hybrid transformer+ML models for sentiment & intent detection
- 🏆 89% accuracy in NFL injury prediction using Random Forest
- 🎖️ NCC Member | ⚽ College Footballer | 💻 Tech Fest Core Committee

📧 [dineshyadav.2022@cic.du.ac.in](mailto:dineshyadav.2022@cic.du.ac.in)

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use it as a template — a ⭐ star is appreciated if it helped you!

---

<div align="center">

Made with ❤️ and a lot of `git push` by **Dinesh Yadav**

</div>
