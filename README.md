<div align="center">

# ✨ Nakka Jahnavi Sindhu — Personal Portfolio

### **Software Developer · Backend Engineer · AI/ML Enthusiast**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Portfolio-6366f1?style=for-the-badge&logoColor=white)](https://v0-personal-portfolio-website-orpin-zeta.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-JAHNAVISINDHU-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JAHNAVISINDHU)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jahnavi-sindhu-2b86a0290/)
[![LeetCode](https://img.shields.io/badge/LeetCode-Profile-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/jahnavisindhu0/)

</div>

---

## 🌐 Live Preview

> 🔗 **[https://v0-personal-portfolio-website-orpin-zeta.vercel.app/](https://v0-personal-portfolio-website-orpin-zeta.vercel.app/)**
Deployed on **Vercel** with zero-config CI/CD — blazing fast, globally distributed.

---

## 📋 About This Project

A **modern, animated personal portfolio website** built with Next.js 16 and Framer Motion. Designed to make a strong first impression with smooth scroll animations, glassmorphism effects, glowing UI elements, and a fully responsive dark-mode-first layout.

> *"Always learning, always shipping."* — The philosophy behind every pixel.

---

## 🖥️ Sections

| Section | Description |
|---|---|
| 🎯 **Hero** | Animated introduction with profile image, social links, and resume download |
| 👩‍💻 **About** | Personal bio, key highlights (Full-Stack, Backend, Cloud, AI/ML), stats |
| 💼 **Experience** | MERN Stack Developer Internship at Aditya University |
| 🛠️ **Skills** | Animated skill bars across Languages, Frontend, Backend, and DevOps |
| 🚀 **Projects** | Self-Care Tracker, Appointment System, Satellite Image Change Detection |
| 🎓 **Education** | Academic background and achievements |
| 📬 **Contact** | Direct contact form and social media links |

---

## 🚀 Tech Stack

### Core Framework
![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)

### Styling & Animation
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)

### UI Component Library
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=flat-square&logo=radix-ui&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat-square&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-f26b00?style=flat-square)

### Deployment & Analytics
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![Vercel Analytics](https://img.shields.io/badge/Vercel_Analytics-000000?style=flat-square&logo=vercel&logoColor=white)

---

## ✨ Features

- 🌑 **Dark-mode first** — sleek dark aesthetic with glowing accents
- 🎞️ **Framer Motion animations** — entrance animations, hover effects, scroll-triggered reveals
- 💎 **Glassmorphism UI** — frosted card components with glow borders
- 📱 **Fully responsive** — mobile-first design that looks great on all devices
- ⚡ **Performance optimized** — Next.js image optimization, lazy loading, code splitting
- 📊 **Animated skill bars** — smooth progress indicators for technical skills
- 🛸 **Floating badges** — dynamic MERN Stack / Backend Dev labels in the hero section
- 📄 **Resume download** — one-click PDF resume download
- 🔗 **Social links** — GitHub, LinkedIn, Email, LeetCode

---

## 🏆 Featured Projects

### 🌿 Self Care Tracking System
> A personal wellness platform for logging daily self-care habits — tracking mood, sleep, hydration, and activity with visual progress dashboards.
- **Stack:** React · Node.js · Express.js · SQL

### 📅 Appointment Booking System
> Full-stack scheduling platform with real-time slot availability, user authentication, and automated booking confirmations.
- **Stack:** JavaScript · Node.js · Express.js · SQL

### 🛰️ Satellite Image Change Detection *(Research)*
> Transformer-based deep learning model for multi-temporal satellite image change detection, aimed at environmental monitoring and land use analysis.
- **Stack:** Python · PyTorch · Transformers · Remote Sensing

---

## 📊 Stats

| Metric | Value |
|---|---|
| 🎓 CGPA | **9.25** |
| 🗂️ Projects | **5+** |
| ⭐ HackerRank | **5 Stars** |

---

## 🛠️ Local Development

### Prerequisites
- **Node.js** v18+
- **pnpm** (recommended) or npm

### Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/JAHNAVISINDHU/portfolio.git
cd portfolio

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

> 🌍 Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build the optimized production bundle |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint for code quality checks |

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global CSS variables & base styles
│   ├── layout.tsx         # Root layout with metadata & theme provider
│   └── page.tsx           # Main page assembling all sections
├── components/
│   ├── hero.tsx           # Hero section with animated profile
│   ├── about.tsx          # About section with stats & highlights
│   ├── experience.tsx     # Work experience timeline
│   ├── skills.tsx         # Animated skill bars
│   ├── projects.tsx       # Featured projects showcase
│   ├── education.tsx      # Academic background
│   ├── contact.tsx        # Contact form & social links
│   ├── navigation.tsx     # Sticky navbar
│   ├── footer.tsx         # Site footer
│   ├── theme-provider.tsx # next-themes dark/light provider
│   └── ui/                # shadcn/ui component library (40+ components)
├── hooks/                 # Custom React hooks
├── lib/
│   └── utils.ts           # Utility functions (cn, etc.)
├── public/
│   ├── images/
│   │   └── profile.jpeg   # Profile photo
│   └── resume.pdf         # Downloadable resume
└── styles/
    └── globals.css        # Additional global styles
```

---

## 🚢 Deployment

This project is deployed on **Vercel** with automatic deployments on every push to `main`.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/JAHNAVISINDHU/portfolio)

**Live URL:** https://v0-personal-portfolio-website-orpin-zeta.vercel.app/

---

## 📬 Contact

| Platform | Link |
|---|---|
| 📧 Email | [jahnavisindhu673@gmail.com](mailto:jahnavisindhu673@gmail.com) |
| 💼 LinkedIn | [jahnavi-sindhu-2b86a0290](https://www.linkedin.com/in/jahnavi-sindhu-2b86a0290/) |
| 🐙 GitHub | [@JAHNAVISINDHU](https://github.com/JAHNAVISINDHU) |
| 🧩 LeetCode | [@jahnavisindhu0](https://leetcode.com/u/jahnavisindhu0/) |

---

<div align="center">

**Designed & Built by Nakka Jahnavi Sindhu** 🚀

*If you like this project, consider giving it a ⭐!*

</div>
