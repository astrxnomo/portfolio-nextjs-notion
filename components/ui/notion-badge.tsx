import { Notion } from "@/components/ui/notion-logo"
import Link from "next/link"

export function NotionBadge() {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="https://astrxnomo.notion.site/Next-js-Notion-Databases-2da23bce200280069c63e34ad9f5de69"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Notion Databases template"
        className="border-border bg-background hover:bg-muted/50 flex items-center gap-2 rounded border p-2 shadow-sm lg:px-3"
      >
        <Notion className="size-5" />
        <span className="text-foreground text-md hidden font-medium lg:block">
          Databases
        </span>
      </Link>
    </div>
  )
}
