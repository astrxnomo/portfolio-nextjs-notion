import { About as AboutType } from "@/lib/notion/types"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

interface AboutProps {
  about: AboutType | null
}

export function About({ about }: AboutProps) {
  if (!about) {
    return null
  }

  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards delay-300 duration-500">
      <div className="space-y-3">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-foreground text-3xl font-bold tracking-tight">
            {about.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex gap-1">
              {about.githubUrl && (
                <Button
                  key={about.githubUrl}
                  asChild
                  size="icon-sm"
                  variant="secondary"
                >
                  <Link
                    href={about.githubUrl}
                    target="_blank"
                    aria-label={`Link to ${about.githubUrl}`}
                  >
                    <Github />
                  </Link>
                </Button>
              )}
              {about.linkedinUrl && (
                <Button
                  key={about.linkedinUrl}
                  asChild
                  size="icon-sm"
                  variant="secondary"
                >
                  <Link
                    href={about.linkedinUrl}
                    target="_blank"
                    aria-label={`Link to ${about.linkedinUrl}`}
                  >
                    <Linkedin />
                  </Link>
                </Button>
              )}
            </div>

            {about.contact && (
              <>
                <div className="bg-border h-6 w-px" />
                <Button size="sm" asChild className="h-8">
                  <Link
                    href={`mailto:${about.contact}`}
                    aria-label="Send email"
                  >
                    Contact
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>

        <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
          {about.description}
        </p>

        {/* Tags */}
        {about.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {about.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="px-2 py-0.5 text-xs"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
