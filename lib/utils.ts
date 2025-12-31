import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPropertyText(prop: any): string {
  if (!prop) return ""

  if (prop.rich_text) {
    return prop.rich_text[0]?.plain_text ?? ""
  }

  if (prop.title) {
    return prop.title[0]?.plain_text ?? ""
  }

  if (prop.url) {
    return typeof prop.url === "string" ? prop.url : (prop.url.url ?? "")
  }

  return ""
}

export function getPropertyMultiSelect(prop: any): string[] {
  if (!prop?.multi_select) return []
  return prop.multi_select.map((item: { name: string }) => item.name)
}
