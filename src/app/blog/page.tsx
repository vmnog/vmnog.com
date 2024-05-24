import { PostCard } from '@/components/post-card'
import { TerminalCommand } from '@/components/terminal-command'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import type { Metadata } from 'next'

const meta = {
  title: 'About Me',
  description: 'A resume of my carrer until the moment and how I contribute to the development community in my free time.',
  url: `${WEBSITE_HOST_URL}/blog`,
}

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
  },
  twitter: {
    title: meta.title,
    description: meta.description,
  },
  alternates: {
    canonical: meta.url,
  },
}

export default function Blog() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div className="space-y-20">
      <TerminalCommand
        directory='blog'
        command='ls -la ./blog'
        output={`drwxr-xr-x ${posts.length} vmnog blog ./`}
      />

      <article className='flex flex-col space-y-7'>
        {posts.map((post, idx) => (
          <section className='flex flex-col gap-8'>
            <PostCard key={idx} {...post} />
            {idx < posts.length - 1 && <hr className='border-primary opacity-30' />}
          </section>
        ))}
      </article>
    </div>
  )
}
