import Link from 'next/link'
import { ProjectMetadata } from '@/lib/projects'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
    <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
      {projects.map(project => (
        <li
          key={project.slug}
          className='group relative rounded-lg border bg-gray-100 p-5 dark:bg-gray-900'
        >
          <Link href={`/projects/${project.slug}`} className='block'>
            <h2 className='title text-xl font-semibold'>{project.title}</h2>
            <p className='mt-2 text-sm text-muted-foreground'>
              {project.summary}
            </p>
          </Link>

          {/* Technologies Used */}
          {project.technologies && (
            <div className='mt-4 text-sm'>
              <strong>Technologies:</strong>
              <span className='ml-1 text-blue-600 dark:text-blue-400'>
                {project.technologies.join(', ')}
              </span>
            </div>
          )}

          {/* GitHub Link */}
          {project.github && (
            <Link
              href={project.github}
              target='_blank'
              className='mt-3 inline-block text-sm text-blue-600 underline decoration-1 underline-offset-2 hover:text-blue-800 dark:hover:text-blue-300'
            >
              View on GitHub
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
