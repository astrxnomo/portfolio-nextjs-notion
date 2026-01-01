export type RichText = any[]

export interface About {
  id: string
  title: string
  description: string
  contact?: string
  tags: string[]
  githubUrl?: string
  linkedinUrl?: string
}

export interface Experience {
  id: string
  time: string
  title: string
  description: string
  experienceUrl?: string
  experienceName?: string
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  githubLink?: string
  previewLink?: string
}
