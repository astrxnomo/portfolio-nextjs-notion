import { About } from "@/components/sections/about"
import { ExperienceSection } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { getData } from "@/lib/data"

export default async function Page() {
  const data = await getData()

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:px-8">
      <div className="space-y-16">
        <About about={data.about} />
        <ExperienceSection experience={data.experience} />
        <Projects projects={data.projects} />
      </div>
    </div>
  )
}
