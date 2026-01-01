import { Notion } from "@/components/ui/notion-logo"
import Link from "next/link"

export function NotionBadge() {
  return (
    <Link
      href="https://astrxnomo.notion.site/Next-js-Notion-Databases-2da23bce200280069c63e34ad9f5de69"
      target="_blank"
      className="border-border bg-background text-foreground hover:bg-muted/50 inline-flex items-center gap-2 rounded border px-3 py-2 shadow-sm"
    >
      <Notion className="size-5" />
      <span className="text-foreground text-md hidden font-medium lg:block">
        Databases
      </span>
    </Link>
  )
}
