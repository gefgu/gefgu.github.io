# Personal Website - Gustavo H. Santos

A modern, responsive personal website built with Astro, featuring content collections for publications, projects, and blog posts.

## 🚀 Features

- **Modern Tech Stack**: Built with Astro 5.12.0 for optimal performance
- **Content Collections**: Type-safe content management with Zod validation
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **GitHub Pages Ready**: Automated deployment with GitHub Actions
- **Academic Focus**: Dedicated sections for publications and research projects
- **Blog System**: Full-featured blog with tags, featured posts, and reading time

## 📁 Project Structure

```
/
├── public/
│   ├── images/
│   │   ├── blog/           # Blog post images
│   │   └── projects/       # Project images
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   └── Timeline.astro
│   ├── content/
│   │   ├── blog/           # Blog posts (.md)
│   │   ├── projects/       # Project descriptions (.md)
│   │   ├── publications/   # Academic publications (.md)
│   │   └── config.ts       # Content collection schemas
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       ├── index.astro     # Homepage
│       ├── blog.astro      # Blog listing
│       ├── blog/
│       │   └── [slug].astro # Individual blog posts
│       ├── projects.astro  # Projects listing
│       ├── projects/
│       │   └── [slug].astro # Individual projects
│       ├── publications.astro # Publications listing
│       └── publications/
│           └── [slug].astro # Individual publications
└── astro.config.mjs
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd personal-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## 📝 Content Management

### Adding Blog Posts

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Blog Post Title"
description: "A brief description of your post"
date: 2024-01-15
tags: ["tag1", "tag2", "tag3"]
featureImage: "/images/blog/your-image.jpg"
featured: true
draft: false
---

Your blog content here...
```

### Adding Projects

Create a new `.md` file in `src/content/projects/`:

```markdown
---
title: "Project Name"
description: "Project description"
date: 2024-01-15
technologies: ["React", "Node.js", "MongoDB"]
github: "https://github.com/username/repo"
demo: "https://your-demo-url.com"
image: "/images/projects/project-image.jpg"
featured: true
status: "completed"
---

Detailed project description...
```

### Adding Publications

Create a new `.md` file in `src/content/publications/`:

```markdown
---
title: "Paper Title"
authors: ["You", "Co-Author"]
journal: "Journal Name"
year: 2024
volume: "10"
pages: "123-145"
doi: "10.1000/182"
pdf: "/papers/your-paper.pdf"
abstract: "Paper abstract..."
tags: ["machine learning", "research"]
featured: true
---

Additional paper details...
```

## 🎨 Customization

### Styling

The website uses CSS custom properties for theming. Modify the variables in `src/layouts/BaseLayout.astro`:

```css
:root {
  --color-primary: #3b82f6;
  --color-primary-dark: #2563eb;
  --color-background: #ffffff;
  --color-text: #1f2937;
  /* ... more variables */
}
```

### Content Schemas

Modify content collection schemas in `src/content/config.ts` to add or change fields.

## 🚀 Deployment

### GitHub Pages (Recommended)

1. Enable GitHub Pages in your repository settings
2. Set the source to "GitHub Actions"
3. Push to the `main` branch to trigger deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:

- Build the site
- Deploy to GitHub Pages
- Handle the `base` path configuration

### Manual Deployment

```bash
npm run build
```

The built site will be in the `dist/` directory.

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 768px
- Desktop: > 768px

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run CLI commands

## 📋 TODO

- [ ] Add search functionality for blog posts
- [ ] Implement dark mode toggle
- [ ] Add contact form
- [ ] Create RSS feed for blog
- [ ] Add analytics integration
- [ ] Optimize images with Astro's image optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## � License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- Website: [your-website.com](https://your-website.com)
- Email: your-email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

Built with ❤️ using [Astro](https://astro.build)
