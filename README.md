# Next.js 16 ISR Portfolio with Notion CMS

A modern portfolio template using Next.js 16 and Notion as a headless CMS with ISR (Incremental Static Regeneration).

## Quick Start

Get started quickly with our step-by-step guide: **[Complete Tutorial: Build Your Portfolio](https://felipego.com/blog/nextjs-notion-portfolio-isr)**

This tutorial covers setup, integration, and deployment in detail.

## Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn
- Notion account
- Vercel account

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Content Management**: Notion API v5.6.0 
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Themes**: Light/Dark mode support
- **Deployment**: Vercel

## Project Structure

```
portfolio/
├── app/
│   ├── api/revalidate/     # ISR webhook endpoint
│   ├── globals.css         # Global styles & theme variables
│   ├── layout.tsx          # Root layout with theme provider
│   └── page.tsx            # Home page with ISR
├── components/
│   ├── items/              # Individual item components
│   ├── sections/           # Page sections
│   └── ui/                 # Reusable UI components
└── lib/
    ├── data/               # Data fetching functions
    ├── notion/             # Notion API client & types
    └── utils.ts            # Utility functions
```

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy!

## Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fastrxnomo%2Fportfolio-nextjs-notion)
## Features

- **ISR (Incremental Static Regeneration)**: Optimal performance with manual content updates
- **Notion Integration**: Manage content in Notion
- **Responsive Design**: Mobile-first approach
- **Theme Support**: Light/Dark mode toggle
- **TypeScript**: Full type safety
- **Modern UI**: shadcn/ui components

## License

MIT License - feel free to use this template for your own portfolio!
