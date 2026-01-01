import { NotionBadge } from "@/components/ui/notion-badge"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Next.js + Notion Portfolio Template",
  description:
    "Modern portfolio template built with Next.js and Notion API. Perfect for developers and creatives.",
  keywords: [
    "Next.js",
    "Notion",
    "Portfolio",
    "Template",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Felipe Giraldo" }],
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://felipego.com"),
  openGraph: {
    title: "Next.js + Notion Portfolio Template",
    description:
      "Modern portfolio template built with Next.js and Notion API. Perfect for developers and creatives.",
    url: "https://felipego.com",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Next.js + Notion Portfolio Template",
    description:
      "Modern portfolio template built with Next.js and Notion API. Perfect for developers and creatives.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
      </head>
      <body className={`${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Delete this badge in production */}
          <div className="fixed top-4 left-4 z-20">
            <NotionBadge />
          </div>

          <div className="fixed top-4 right-4 z-20">
            <ThemeToggle />
          </div>
          <main className="bg-background min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
