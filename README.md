# Felipe Giraldo - Portfolio

A modern portfolio website with Notion integration. Write blog posts and manage projects directly in Notion, with automatic SEO optimization and bilingual support (English/Spanish).

## 🚀 Features

- **Notion Integration**: Write content directly in Notion
- **SEO Optimized**: Automatic metadata, Open Graph, and structured data
- **Bilingual**: English and Spanish versions
- **Blog System**: SEO-optimized blog posts with custom properties
- **Project Showcase**: Portfolio projects from Notion databases
- **Modern Tech**: Next.js 16, TypeScript, and Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Content**: Notion API
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/                    # Next.js pages
│   ├── blog/              # Blog pages (auto-generated from Notion)
│   ├── projects/          # Project pages (from Notion databases)
│   ├── es/                # Spanish version
│   └── layout.tsx         # Root layout
├── lib/notion/            # Notion API integration
│   ├── client.ts          # Notion connection
│   ├── types.ts           # TypeScript interfaces
│   └── helpers.ts         # Data extraction utilities
├── lib/data/              # Data fetching functions
└── components/notion-blocks/  # Notion content renderers
```
