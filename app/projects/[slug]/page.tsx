import Link from 'next/link'
import { ArrowLeftIcon } from '@radix-ui/react-icons'

import MDXContent from '@/components/mdx-content'
import { getProjectBySlug, getProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map(project => ({ slug: project.slug }))
}

export default async function Project({
  params
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const project = await getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const { metadata, content } = project
  const { title, github, technologies } = metadata

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to Projects</span>
        </Link>

        <header>
          <h1 className='title'>{title}</h1>

          {/* Technologies Used */}
          {technologies && (
            <div className='mt-3 text-sm'>
              <strong>Technologies:</strong>
              <span className='ml-1 text-blue-600 dark:text-blue-400'>
                {technologies.join(', ')}
              </span>
            </div>
          )}

          {/* GitHub Link */}
          {github && (
            <Link
              href={github}
              target='_blank'
              className='mt-3 inline-block text-sm text-blue-600 underline decoration-1 underline-offset-2 hover:text-blue-800 dark:hover:text-blue-300'
            >
              View on GitHub
            </Link>
          )}
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  )
}
