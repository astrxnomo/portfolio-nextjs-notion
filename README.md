<div align="center">
  <img src="https://res.cloudinary.com/dntqogcgc/image/upload/v1767316792/677shots_so_mhyjwf.png" alt="Portfolio banner" />

  <h1>Next.js 16 ISR Portfolio with Notion CMS</h1>

  <p>
    A modern, minimal portfolio built with <strong>Next.js 16 (App Router)</strong> and
    <strong>Notion as a headless CMS</strong>, using
    <strong>Incremental Static Regeneration (ISR)</strong> for high performance and easy content updates.
  </p>

  <p>
    Content is managed directly from Notion and delivered with a static-first approach.<br />
    Built with <a href="https://nextjs.org/">Next.js</a>,
    powered by <a href="https://developers.notion.com/">Notion API v5.6.0</a>,
    styled using <a href="https://tailwindcss.com/">Tailwind CSS</a> and
    <a href="https://ui.shadcn.com/">shadcn/ui</a>.
  </p>

  <p>
    <a href="https://felipego.com/blog/nextjs-notion-portfolio-isr">Complete Tutorial</a> ·
    <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fastrxnomo%2Fportfolio-nextjs-notion">Deploy with Vercel</a>
  </p>
</div>

---

## Complete Guide

This project includes a **full, in-depth tutorial** covering everything from zero to production:

- Project setup
- Notion database structure
- Data fetching with the Notion API
- ISR and on-demand revalidation
- Deployment on Vercel

Read the full tutorial here:  
**https://felipego.com/blog/nextjs-notion-portfolio-isr**

## Tech Stack

- Next.js 16 (App Router)
- Notion API v5.6.0
- TypeScript
- Tailwind CSS + shadcn/ui
- Incremental Static Regeneration (ISR)
- Vercel

## Features

- Content managed entirely from Notion  
- Fast, static-first performance with ISR  
- Light / Dark mode  
- Fully typed and production-ready  


## Project Structure

```txt
portfolio/
├── app/
│   ├── api/revalidate/     # ISR revalidation endpoint
│   ├── globals.css         # Global styles and theme variables
│   ├── layout.tsx          # Root layout and providers
│   └── page.tsx            # Home page (ISR)
├── components/
│   ├── items/              # Individual UI items
│   ├── sections/           # Page sections
│   └── ui/                 # Shared UI components
└── lib/
    ├── data/               # Data fetching logic
    ├── notion/             # Notion client and types
    └── utils.ts            # Utility functions
```

## License

MIT — free to use for personal or commercial portfolios.
