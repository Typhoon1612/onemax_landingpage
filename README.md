# 1MAX Landing Page

[![Vue 3](https://img.shields.io/badge/Vue-3.5-4FC08D?logo=vue.js)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-Private-red)]()

> A modern, responsive cryptocurrency exchange landing page built with Vue 3, TypeScript, and Vite.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Responsive Design](#responsive-design)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [License](#license)
- [Contact](#contact)

---

## 🎯 Overview

The 1MAX Landing Page is a cutting-edge, single-page application showcasing a cryptocurrency exchange platform. Designed with modern web technologies, it delivers a seamless user experience across all devices with smooth animations, interactive elements, and optimized performance.

**Live Demo:** [https://Typhoon1612.github.io/onemax_landingpage/](https://Typhoon1612.github.io/onemax_landingpage/)

---

## ✨ Features

### 🎨 Visual & UX

- **Animated Loading Screen** - Shimmer text effect and smooth transitions
- **Scroll-Triggered Animations** - IntersectionObserver-based viewport animations
- **Interactive Flip Cards** - 3D card flip animations on hover
- **Gradient Text Effects** - Rainbow gradient and glow pulse animations
- **Responsive Grid Layouts** - Adaptive layouts for all screen sizes
- **Smooth Scrolling** - Optimized scroll performance

### 🔧 Technical

- **Type-Safe Development** - Full TypeScript implementation
- **Component-Based Architecture** - Reusable Vue 3 SFCs with `<script setup>`
- **Optimized Build** - Vite for lightning-fast HMR and optimized production builds
- **Lazy Loading** - Efficient resource loading strategies
- **SEO Optimized** - Meta tags, sitemap, and robots.txt included
- **GitHub Pages Deployment** - Automated deployment pipeline

### 📱 Sections

1. **Hero Section** - Animated headlines with sci-fi design elements
2. **Features Section** - Showcase key platform features
3. **Product Overview** - Interactive media with concept videos/images
4. **Center Machine Animation** - Holographic checkbox experience
5. **Trust & Cards** - Flip cards highlighting platform benefits
6. **App Download & Social** - QR code, download links, and social media buttons

---

## 🛠 Tech Stack

| Category                | Technologies                  |
| ----------------------- | ----------------------------- |
| **Frontend**            | Vue 3, TypeScript, Vite       |
| **Styling**             | Scoped CSS, Custom Animations |
| **Animation Libraries** | Lottie (DotLottie Vue)        |
| **Carousel**            | Swiper.js                     |
| **HTTP Client**         | Axios                         |
| **Build Tool**          | Vite 7.1                      |
| **Type Checking**       | Vue TSC                       |
| **Deployment**          | GitHub Pages (gh-pages)       |

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** - v18.0.0 or higher ([Download](https://nodejs.org/))
- **npm** - v9.0.0 or higher (comes with Node.js)
- **Git** - v2.30 or higher ([Download](https://git-scm.com/))

### Verify Installation

```powershell
node --version   # v18.x.x or higher
npm --version    # v9.x.x or higher
git --version    # v2.x.x or higher
```

---

## 🚀 Installation

### 1. Clone the Repository

```powershell
git clone https://github.com/Typhoon1612/onemax_landingpage.git
cd onemax_landingpage
```

### 2. Install Dependencies

```powershell
npm install
```

This will install all required packages:

- Vue 3.5.22
- TypeScript 5.9
- Vite 7.1.7
- Lottie, Swiper, Axios
- Development tools

---

## 💻 Development

### Start Development Server

```powershell
npm run dev
```

The application will be available at:

- **Local:** `http://localhost:5173`
- **Network:** Available on your local network

### Development Features

- ⚡ **Hot Module Replacement (HMR)** - Instant updates without page reload
- 🔍 **Type Checking** - Real-time TypeScript error detection
- 🎨 **CSS Hot Reload** - Instant style updates

### Development Tips

- Use Vue DevTools browser extension for debugging
- TypeScript errors appear in terminal and browser console
- Vite config can be modified in `vite.config.ts`

---

## 🏗 Build & Deployment

### Build for Production

```powershell
npm run build
```

This command:

1. Runs TypeScript type checking (`vue-tsc -b`)
2. Builds optimized production bundle
3. Outputs to `dist/` directory

**Output includes:**

- Minified JavaScript bundles
- Optimized CSS
- Compressed assets
- Source maps (optional)

### Preview Production Build

```powershell
npm run preview
```

Test the production build locally before deployment.

### Deploy to GitHub Pages

```powershell
npm run deploy
```

This command:

1. Runs `predeploy` script (builds the project)
2. Deploys `dist/` folder to `gh-pages` branch
3. Site goes live at configured homepage URL

**First-Time Deployment Setup:**

1. Enable GitHub Pages in repository settings
2. Set source to `gh-pages` branch
3. Configure `homepage` in `package.json`
4. Run `npm run deploy`

---

## 📁 Project Structure

```
onemax_landingpage/
├── public/                      # Static assets (served as-is)
├── src/
│   ├── assets/                  # Images, videos, fonts
│   │   ├── general/
│   │   ├── loading_page/
│   │   ├── section_1/
│   │   ├── section_2/
│   │   ├── section_3/
│   │   ├── section_4/
│   │   ├── section_5/
│   │   └── section_6/
│   ├── components/              # Vue components
│   │   ├── general/            # Shared components
│   │   │   ├── button.vue
│   │   │   ├── footer.vue
│   │   │   └── sections_2_3_wrapper.vue
│   │   ├── loading_page/       # Loading screen
│   │   │   ├── main.vue
│   │   │   └── components/
│   │   ├── section_1/          # Hero section
│   │   │   ├── main.vue
│   │   │   └── components/
│   │   ├── section_2/          # Features
│   │   ├── section_3/          # Product overview
│   │   ├── section_4/          # Center machine
│   │   ├── section_5/          # Trust cards
│   │   │   ├── main.vue
│   │   │   └── components/
│   │   │       ├── flipCard.vue
│   │   │       └── longCard.vue
│   │   └── section_6/          # App download & social
│   ├── helper_files/           # Utility functions
│   │   ├── images.ts          # Image path mappings
│   │   └── videos.ts          # Video path mappings
│   ├── App.vue                # Root component
│   ├── main.ts                # Application entry point
│   └── style.css              # Global styles
├── index.html                  # HTML entry point
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript config
├── vite.config.ts             # Vite configuration
├── vercel.json                # Vercel deployment config
├── sitemap.xml                # SEO sitemap
├── robots.txt                 # Search engine directives
└── README.md                  # This file
```

---

## 🎨 Key Components

### Loading Page (`loading_page/main.vue`)

- Full-screen loading overlay
- Shimmer gradient text animation
- Emits `loading-complete` event after 5 seconds
- Responsive typography with `clamp()`

### Section 1 - Hero (`section_1/main.vue`)

- Animated grid plane background
- Scroll-triggered headline animations
- Sci-fi styled buttons with scale effects
- Social media icon buttons
- IntersectionObserver integration

### Section 3 - Features (`section_3/main.vue`)

- Alternating text/media layout
- Concept video/image overlays
- Responsive flex-based columns
- Gradient/glow animated title: "Top Features"

### Section 5 - Trust Cards (`section_5/`)

#### `flipCard.vue`

- 3D flip animation on hover
- Front: Title + icon
- Back: Title + description
- Responsive sizing (340px → 280px on mobile)

#### `longCard.vue`

- Horizontal stat boxes layout
- Desktop: side-by-side
- Tablet/Mobile: stacked diagonal (top-left stat, bottom-right image)

### Section 6 - App Download (`section_6/main.vue`)

- QR code for app download
- Social media buttons (X, Telegram, LinkedIn, Instagram)
- Brand-specific hover colors
- Animated "Follow Us" title with gradient/glow
- "Experience 1MAX" segmented gradient title

---

## 📱 Responsive Design

### Breakpoints

| Breakpoint         | Target Devices | Layout Changes                      |
| ------------------ | -------------- | ----------------------------------- |
| **>1500px**        | Desktop        | Full multi-column layouts           |
| **900px - 1500px** | Tablet/Laptop  | Adjusted spacing, 2-column grids    |
| **400px - 900px**  | Mobile         | Single column, stacked elements     |
| **<400px**         | Small Mobile   | Reduced font sizes, compact spacing |

### Responsive Strategies

- **Fluid Typography**: `clamp(min, preferred, max)` for all text
- **Flexible Grids**: CSS Grid with `auto-fit` and `minmax()`
- **Mobile-First CSS**: Base styles for mobile, enhanced for desktop
- **Touch-Friendly**: Larger tap targets on mobile (48px minimum)
- **Image Optimization**: Responsive images with `srcset` (where applicable)

### Testing Recommendations

- Chrome DevTools Device Mode
- Real device testing (iOS Safari, Android Chrome)
- Responsive design tools (Responsively App, BrowserStack)

---

## 🌐 Browser Support

| Browser | Minimum Version |
| ------- | --------------- |
| Chrome  | 90+             |
| Firefox | 88+             |
| Safari  | 14+             |
| Edge    | 90+             |

**Required Browser Features:**

- ES2020 (native ESM)
- CSS Grid & Flexbox
- IntersectionObserver API
- CSS Custom Properties
- Transforms & Transitions

---

## 🤝 Contributing

### Workflow

1. **Fork** the repository
2. **Create** a feature branch
   ```powershell
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes
   ```powershell
   git commit -m "Add amazing feature"
   ```
4. **Push** to your branch
   ```powershell
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### Code Standards

- Follow Vue 3 Composition API patterns
- Use TypeScript for all new code
- Maintain scoped CSS in components
- Add comments for complex logic
- Test on multiple screen sizes

### Commit Message Format

```
<type>(<scope>): <subject>

Examples:
feat(section5): add flip card animation
fix(loading): resolve shimmer overflow on mobile
style(section1): adjust button padding
docs(readme): update installation steps
```

---

## 🏷 Versioning

This project uses **Semantic Versioning** (SemVer):

- **Major.Minor.Patch** (e.g., v1.2.0)

### Tagging Releases

```powershell
# Create annotated tag
git tag -a v1.2.0 -m "Release v1.2.0 - Updated sections 1,3,5,6"

# Push tag to remote
git push origin v1.2.0
```

### Version History

- **v1.1** - Responsive fixes, animated titles
- **v1.0** - Initial release

View all releases: [GitHub Releases](https://github.com/Typhoon1612/onemax_landingpage/releases)

---

## 📄 License

This project is **private** and proprietary. All rights reserved.

Unauthorized copying, modification, distribution, or use of this software is strictly prohibited without explicit written permission from the copyright holder.

---

## 📞 Contact

**Project Maintainer:** Typhoon1612

- **GitHub:** [@Typhoon1612](https://github.com/Typhoon1612)
- **Repository:** [onemax_landingpage](https://github.com/Typhoon1612/onemax_landingpage)

For issues, feature requests, or questions:

- Open an [Issue](https://github.com/Typhoon1612/onemax_landingpage/issues)
- Submit a [Pull Request](https://github.com/Typhoon1612/onemax_landingpage/pulls)

---

## 🙏 Acknowledgments

- **Vue.js Team** - For the incredible framework
- **Vite Team** - For blazing-fast build tooling
- **Lottie** - For beautiful animations
- **Swiper** - For smooth carousels
- **Community Contributors** - For feedback and support

---

<div align="center">

**Built with ❤️ using Vue 3 + TypeScript + Vite**

⭐ Star this repository if you find it helpful!

</div>
