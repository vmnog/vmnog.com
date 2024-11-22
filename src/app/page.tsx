import { PostCard } from '@/components/post-card'
import { TerminalCommand } from '@/components/terminal-command'
import { Button } from '@/components/ui/button'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Mail } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  )

  return (
    <div>
      <div className="flex flex-col gap-16">
        <TerminalCommand
          directory='home'
          command='whoami'
          output='Victor Nogueira'
        />

        <article className='flex flex-col gap-16'>
          <p className='max-w-lg'>
            I quitted my job as a software engineer to work full-time on my own projects.
          </p>

          <div>
            <h2>./what-am-i-doing-atm</h2>
            <ul className='pl-8 mt-8 list-decimal'>
              <li className="leading-8">
                Writing tech articles about my work here as <Link className='font-bold underline underline-offset-8 hover:text-blue-500' href="/about">@vmnog</Link>
              </li>
              <li className="leading-8">
                Developing and Managing my own Software House at <Link className='font-bold underline underline-offset-8 hover:text-blue-500' href="https://www.caraquecoda.com.br/">@caraquecoda</Link>
              </li>
              <li className="leading-8">
                CTO & Co-Founder at <Link className='font-bold underline underline-offset-8 hover:text-blue-500' href="https://www.dochelp.ai/">@dochelp.ai</Link>
              </li>
              <li className="leading-8">
                Open Source Contributor at:
                <ul className='pl-8 list-disc'>
                  <li><Link className='font-bold underline underline-offset-8 hover:text-blue-500' href="https://plotwist.app/">Plotwist.app</Link> | Social Media Platform for Movie Reviews</li>
                </ul>
              </li>
            </ul>
          </div>

          <section className='flex flex-col space-y-8'>
            {posts.slice(0, 3).map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </section>
        </article>
      </div>
    </div >
  )
}
