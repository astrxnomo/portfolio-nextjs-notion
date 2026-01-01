import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const secret = request.headers.get("X-Notion-Secret")

  if (secret !== process.env.NOTION_WEBHOOK_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  revalidatePath("/", "layout")

  return NextResponse.json({ success: true })
}
