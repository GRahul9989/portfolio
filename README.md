# 💼 Rahul — Personal Portfolio Website

A clean, modern, and fully responsive personal developer portfolio website engineered with pure, semantic **HTML5**, modern **CSS3** (Flexbox & CSS Grid), and vanilla **JavaScript (ES6+)** — built without external frameworks or dependencies.

Designed to showcase projects, technical competencies, and contact information with a seamless recruiter-focused user experience.

---

## 🌟 Live Demo & Preview

- **Live URL**: *(Deployable via GitHub Pages — see instructions below)*
- **Repository**: [GitHub Repository](https://github.com/rahul-dev/portfolio)

---

## 📋 Features & Requirements Fulfilled

| Requirement | Implementation Detail | Status |
| :--- | :--- | :---: |
| **Semantic HTML5** | Built using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` for maximum accessibility (a11y) and SEO. | ✅ |
| **All Key Sections** | Includes **Hero** (name + elevator pitch), **About Me**, **Skills**, **Projects** (3 showcases), and **Contact**. | ✅ |
| **Project Showcases** | 3 real-world projects featuring titles, descriptions, tech stack tags, GitHub repository links, and live demo links. | ✅ |
| **Fully Responsive** | Fluid layout thoroughly tested across **Mobile (`375px`)**, **Tablet (`768px`)**, and **Desktop (`1280px+`)**. | ✅ |
| **Interactive JavaScript** | Dark/Light mode switcher with `localStorage` memory, collapsible mobile drawer menu, scroll-active link highlighting (ScrollSpy), and contact validation. | ✅ |
| **Zero Errors & Clean Code** | Pure vanilla code with zero console errors, zero external dependencies, accessible SVG icons, and clean structure. | ✅ |

---

## 🛠️ Tech Stack

- **HTML5**: Semantic tags, accessible landmarks, meta viewport configuration.
- **CSS3**: CSS Custom Properties (`:root` variables), modern CSS reset, Flexbox, CSS Grid (`auto-fit`), smooth scroll, and media queries.
- **JavaScript (ES6+)**: DOM manipulation, event listeners, `localStorage` state persistence, active scroll observation, and input validation.

---

## 📁 Project Structure

```text
├── index.html       # Semantic HTML5 document structure & content
├── style.css        # CSS variables, modern reset, Flexbox/Grid layouts, & media queries
├── script.js        # Vanilla JS for theme toggle, mobile navigation, & form validation
└── README.md        # Complete project documentation & setup guide
```

---

## 🚀 How to Run Locally

### Option 1: Direct File Open
Simply double-click `index.html` or drag and drop it into any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: VS Code "Live Server" (Recommended)
1. Open the project folder in **VS Code**.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click on `index.html` and click **"Open with Live Server"** (or click *Go Live* in the bottom status bar).
4. The site will launch automatically at `http://127.0.0.1:5500`.

### Option 3: Python Local Server
If you have Python installed, open your terminal in the project directory and run:
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 📱 How to Test Responsiveness

1. Open the website in **Google Chrome** or **Firefox**.
2. Press `F12` (or right-click anywhere and select **Inspect**) to open Developer Tools.
3. Click the **Toggle Device Toolbar** icon (`Ctrl + Shift + M` / `Cmd + Shift + M`).
4. Test the site at the standard test sizes:
   - **Mobile**: `375px` (iPhone SE / 12 / 13)
   - **Tablet**: `768px` (iPad Mini / Air)
   - **Desktop**: `1280px+` (Laptop / Monitor)

---

## 📤 How to Push to GitHub & Deploy to GitHub Pages

### 1. Initialize & Push to GitHub
```bash
# Initialize git if not already done
git init

# Add all files to staging
git add .

# Create your first commit
git commit -m "feat: complete modern responsive portfolio website"

# Link to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push your code
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages (Free Live Website Hosting)
1. Go to your repository on **GitHub.com**.
2. Click on **Settings** (gear icon at the top).
3. In the left sidebar, click on **Pages**.
4. Under **Build and deployment > Branch**, select `main` (or `master`) and folder `/ (root)`.
5. Click **Save**.
6. Within 1–2 minutes, GitHub will give you your live URL (e.g., `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`).
7. Paste this URL into your internship project submission!

---

## 👨‍💻 Author

- **Rahul**
- Email: [rahul.dev.portfolio@gmail.com](mailto:rahul.dev.portfolio@gmail.com)
- GitHub: [@rahul-dev](https://github.com)
