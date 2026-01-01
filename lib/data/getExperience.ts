import { notion } from "@/lib/notion/client"
import type { Experience } from "@/lib/notion/types"
import { getPropertyText } from "@/lib/utils"

export async function getExperience(): Promise<Experience[]> {
  try {
    const response = await notion.dataSources.query({
      data_source_id: process.env.NOTION_EXPERIENCE_DB_ID ?? "",
    })

    return response.results.map((page: any) => {
      const { properties } = page
      return {
        id: page.id,
        time: getPropertyText(properties.time),
        title: getPropertyText(properties.title),
        description: getPropertyText(properties.description),
        experienceUrl: getPropertyText(properties.experienceUrl),
        experienceName: getPropertyText(properties.experienceName),
      }
    })
  } catch (error) {
    console.error("Error fetching experience:", error)
    return []
  }
}
