import { notion } from "@/lib/notion/client"
import type { About } from "@/lib/notion/types"
import { getPropertyMultiSelect, getPropertyText } from "@/lib/utils"

export async function getAbout(): Promise<About | null> {
  try {
    const response = await notion.dataSources.query({
      data_source_id: process.env.NOTION_ABOUT_DB_ID ?? "",
      page_size: 1,
    })

    const page = response.results[0]
    if (!page) return null

    const { properties } = page as any

    return {
      id: page.id,
      title: getPropertyText(properties.title),
      description: getPropertyText(properties.description),
      contactEmail: getPropertyText(properties.contactEmail),
      tags: getPropertyMultiSelect(properties.tags),
      githubUrl: getPropertyText(properties.githubUrl),
      linkedinUrl: getPropertyText(properties.linkedinUrl),
    }
  } catch (error) {
    console.error("Error fetching about:", error)
    return null
  }
}
