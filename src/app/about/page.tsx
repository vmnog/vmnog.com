import { TerminalCommand } from '@/components/terminal-command'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'

const meta = {
  title: 'About Me',
  description: 'I like to blog about web development',
  url: `${WEBSITE_HOST_URL}/about`,
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

export default function About() {
  return (
    <div className="space-y-20">
      <TerminalCommand
        directory='about'
        command='vmnog --help'
        output='Usage: vmnog [OPTION]'
      />

      <article className='flex flex-col space-y-7'>
        <p className="font-bold">-C --career</p>
        <p>
          I started my journey in the field of software development in 2017 and currently serve as a Senior Frontend Developer at <Link href="#" className='font-bold'>@brasilprev</Link>. Throughout my professional experience, I have had the privilege of working at also others well-established financial institutions such as <Link href="https://www1.brasilprev.com.br/home" className='font-bold'>@bulla</Link> and <Link href="https://www.wexinc.com/" className='font-bold'>@wex</Link>.
        </p>

        <p className="font-bold">-P --projects</p>
        <p>
          I am particularly passionate about my side project <Link className='font-bold' href="http://caraquecoda.com.br/">@caraquecoda</Link>
          , which allows me to explore and implement innovative solutions to real-world problems.
        </p>

        <p className="font-bold">-F --freetime</p>
        <p>
          In my spare time, I enjoy sharing my experiences and knowledge by writing technical articles about the challenges I face in my daily work. Feel free to check them out <Link href="/blog" className='font-bold'>here</Link>.
        </p>

        <p className="font-bold">-O --opensource</p>
        <p>
          I actively contribute to several open-source projects, showcasing my commitment to the developer community. Notable projects include:
          <ul className='pl-8 list-disc'>
            <li><Link className='font-bold' href="https://nivo.video/">Nivo.video</Link> | Host Video Platform Integrated with AI</li>
            <li><Link className='font-bold' href="https://plotwist.app/">Plotwist.app</Link> | Social Media Platform for Movies Reviews</li>
          </ul>
        </p>
      </article>
    </div>
  )
}
