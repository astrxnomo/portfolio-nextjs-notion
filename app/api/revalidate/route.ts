import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const secret = request.headers.get("X-Notion-Secret")
  const path = request.headers.get("X-Revalidate-Path") || "/"

  if (secret !== process.env.NOTION_WEBHOOK_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  revalidatePath(path, "layout")

  return NextResponse.json({ success: true, revalidated: path })
}
