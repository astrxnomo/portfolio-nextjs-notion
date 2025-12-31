import { notion } from "@/lib/notion/client"
import { getPropertyMultiSelect, getPropertyText } from "@/lib/utils"

import type { Project } from "@/lib/notion/types"

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await notion.dataSources.query({
      data_source_id: process.env.NOTION_PROJECTS_DB ?? "",
    })

    return response.results.map((page: any) => {
      const { properties } = page
      return {
        id: page.id,
        title: getPropertyText(properties.title),
        description: getPropertyText(properties.description),
        tags: getPropertyMultiSelect(properties.tags),
        githubLink: getPropertyText(properties.githubLink),
        previewLink: getPropertyText(properties.previewLink),
      }
    })
  } catch (error) {
    console.error("Error fetching projects:", error)
    return []
  }
}
