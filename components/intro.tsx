import Image from 'next/image'
import authorImage from '@/public/images/authors/sadman.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>👋🏽Hey, I&#39;m Sadman.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a software engineer and full-stack developer living in London.
          This is my portfolio website.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='Sadman Kibria'
          width={185}
          height={185}
          priority
        />
      </div>
    </section>
  )
}
