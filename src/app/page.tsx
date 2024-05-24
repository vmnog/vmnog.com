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
            Not just coding, but writing tech articles and teaching throughout programming courses to share knowledge.
          </p>

          <Button size='sm' className='self-start' asChild>
            <a href="mailto:me@vmnog.com" className='flex items-center gap-2'>
              <Mail className="mr-1" /><span>send email</span>
            </a>
          </Button>

          <div>
            <h2>./what-am-i-doing-atm</h2>
            <ul className='pl-8 mt-8 list-decimal'>
              <li className="leading-8">
                Writing tech articles about my work here as <Link className='font-bold' href="/about">@vmnog</Link>
              </li>
              <li className="leading-8">
                Recording Videos and Programming Courses for <Link className='font-bold' href="http://caraquecoda.com.br/">@caraquecoda</Link>
              </li>
              <li className="leading-8">
                Open Source Contributor at:
                <ul className='pl-8 list-disc'>
                  <li><Link className='font-bold' href="https://nivo.video/">Nivo.video</Link> | Host Video Platform Integrated with AI</li>
                  <li><Link className='font-bold' href="https://plotwist.app/">Plotwist.app</Link> | Social Media Platform for Movie Reviews</li>
                </ul>
              </li>
            </ul>
          </div>

          <section className='flex flex-col space-y-8'>
            <div>
              <h2>./my-last-posts</h2>
              <Link className='text-sm font-bold' href="/blog">see more -&gt; ./blog</Link>
            </div>
            {posts.slice(0, 3).map((post, idx) => (
              <PostCard key={idx} {...post} />
            ))}
          </section>
        </article>
      </div>
    </div >
  )
}
