import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'content', 'projects')

export type Project = {
  metadata: ProjectMetadata
  content: string
}

export type ProjectMetadata = {
  title: string
  summary: string
  slug: string
  github?: string
  technologies?: string[]
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data, content } = matter(fileContent)

    return {
      metadata: {
        title: data.title ?? 'Untitled Project',
        summary: data.summary ?? 'No summary available',
        slug,
        github: data.github ?? '',
        technologies: Array.isArray(data.technologies) ? data.technologies : []
      },
      content
    }
  } catch (error) {
    return null
  }
}

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
  const files = fs.readdirSync(rootDirectory)

  const projects = files.map(file => getProjectMetadata(file))

  if (limit) {
    return projects.slice(0, limit)
  }

  return projects
}

export function getProjectMetadata(filepath: string): ProjectMetadata {
  const slug = filepath.replace(/\.mdx$/, '')
  const filePath = path.join(rootDirectory, filepath)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContent)

  return {
    title: data.title ?? 'Untitled Project',
    summary: data.summary ?? 'No summary available',
    slug,
    github: data.github ?? '',
    technologies: Array.isArray(data.technologies) ? data.technologies : []
  }
}
