'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function CVSection() {
  return (
    <section>
      <Card className='rounded-lg border-0 dark:border'>
        <CardContent className='flex flex-col gap-8 pt-6 md:flex-row md:justify-between md:pt-8'>
          <div>
            <h2 className='text-2xl font-bold'>Here is my CV</h2>
            <p className='text-muted-foreground'>
              Check out a snapshot of my skills and experience as a Full-Stack
              Developer.
            </p>
          </div>

          <div>
            <Button asChild className='w-full py-2 text-sm'>
              <Link
                href='https://drive.google.com/file/d/1cYIuAmPJ2MGFHG5hknNokv4AvUabFJ8-/view?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
              >
                Download CV (PDF)
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
