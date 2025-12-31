import { getAbout } from "./getAbout"
import { getExperience } from "./getExperience"
import { getProjects } from "./getProjects"

export async function getData() {
  const [about, experience, projects] = await Promise.all([
    getAbout(),
    getExperience(),
    getProjects(),
  ])

  return {
    about,
    experience,
    projects,
  }
}
