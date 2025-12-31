import { Project } from "@/lib/notion/types"
import { ProjectItem } from "../items/project-item"

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  if (projects.length === 0) {
    return null
  }

  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards space-y-6 delay-500 duration-500">
      <h2 className="text-foreground flex items-center gap-3 text-2xl font-bold tracking-tight">
        <div className="bg-foreground h-6 w-1 rounded-full" />
        Projects
      </h2>

      <div className="space-y-6">
        {projects.map((project) => (
          <ProjectItem key={project.id} {...project} />
        ))}
      </div>
    </section>
  )
}
