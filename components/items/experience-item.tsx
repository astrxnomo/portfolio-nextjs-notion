import { Experience } from "@/lib/notion/types"
import Link from "next/link"

export function ExperienceItem({
  time,
  title,
  description,
  experienceName,
  experienceUrl,
}: Experience) {
  return (
    <div className="space-y-1">
      <time className="text-muted-foreground block font-mono text-xs">
        {time}
      </time>

      <h3 className="text-md text-foreground leading-tight font-medium">
        {title}
      </h3>

      {experienceName &&
        (experienceUrl ? (
          <Link
            href={experienceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground text-xs font-medium"
          >
            {experienceName}
          </Link>
        ) : (
          <p className="text-muted-foreground text-xs font-medium">
            {experienceName}
          </p>
        ))}

      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
