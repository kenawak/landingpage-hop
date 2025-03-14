export interface Project {
    id: string
    title: string
    description: string
    image: string
    gallery?: string[]
    tags: string[]
    techStack?: string[]
    social: {
      github?: string
      telegram?: string
      twitter?: string
      linkedin?: string
      website?: string
    }
  }