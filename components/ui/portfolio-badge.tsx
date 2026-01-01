import { Nextjs } from "@/components/ui/nextjs-logo"
import { Notion } from "@/components/ui/notion-logo"
import Link from "next/link"

export function PortfolioBadge() {
  return (
    <Link
      href="https://astrxnomo.notion.site/Next-js-Notion-Databases-2da23bce200280069c63e34ad9f5de69"
      target="_blank"
      className="border-border bg-background text-foreground hover:bg-muted/50 inline-flex items-center gap-4 rounded border px-6 py-3 text-base font-medium shadow-sm transition-colors"
    >
      <Nextjs className="text-foreground size-7 rounded-full dark:border" />
      <span className="text-muted-foreground text-xl font-medium">×</span>
      <Notion className="size-6" />
    </Link>
  )
}
