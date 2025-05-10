# ⚡ React Lazy Loading Demo

A deep-dive React project demonstrating various **lazy loading patterns** — built with TypeScript, Vite, and a documentation-style UI.

This project is not a component library — it’s a **practical exploration** of how and when to use lazy loading in frontend apps, including:

- Scroll-based loading (vertical and horizontal)
- Component- and route-level lazy imports
- Tradeoffs vs pagination or SSR
- Lazy loading in tables (AG Grid / virtualization)
- Real-world implementation strategy with section-based layout

---

## 🧱 Tech Stack

- React + TypeScript + Vite
- React Router DOM
- Tailwind CSS (utility-first UI)
- React.lazy + Suspense
- Dynamic imports
- IntersectionObserver

---

## 📖 Features

- 📚 Educational content with left-side navigation
- 🧠 Pros, cons, and use cases for each lazy loading pattern
- 📊 Comparison with alternatives (SSR, pagination, etc.)
- 📦 Live demos (table scroll, dynamic sections, etc.)
- 🛠️ Modular components for easy extension
- 🧪 Future scope: section-based lazy mount via observer

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/react-lazy-loading-demo
cd react-lazy-loading-demo
npm install
npm run dev
```
---

## 📁 Project Structure

```
src/
├── components/
│   └── sections/         # Modular sections like Introduction, Tables, React Lazy, etc.
├── routes/
│   └── demoPages.ts      # Live demo routing map
├── pages/
│   └── Overview.tsx      # Main landing page with full documentation
├── App.tsx               # Layout + router
└── main.tsx              # Vite entry
```

---

## 🧠 Why This Project

This app demonstrates:

- How to apply performance-focused architecture
- UX/SEO implications of different loading strategies
- Real-world dev trade-offs (scroll, load, structure)

---

## 📸 Screenshots
Coming soon...

---

## 📌 License
MIT

---

### ✅ What To Do Next

- [ ] Rename your repo to something meaningful: `react-lazy-loading-demo`
- [ ] Replace the starter README with the above
- [ ] Add screenshots / gifs once your demos are live
- [ ] Optionally add a live hosted link (Netlify, Vercel)
