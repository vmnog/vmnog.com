import { TerminalCommand } from '@/components/terminal-command'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'

const meta = {
  title: 'Contact',
  description: 'Get in contact with me',
  url: `${WEBSITE_HOST_URL}/contact`,
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
        directory="contact"
        command="echo 'hello'"
        output="Usage: vmnog [OPTION]"
      />

      <article className="flex flex-col space-y-7">
        <p className="font-bold">-F --fastest</p>
        <p>
          if you really want to contact me as fast as possible send an email
          <ul className="list-disc pl-8">
            <li>
              <Link
                target="_blank"
                className="font-bold hover:underline"
                href="mailto:vmnogueira.ti@gmail.com"
              >
                vmnogueira.ti@gmail.com
              </Link>{' '}
              email
            </li>
          </ul>
        </p>

        <p className="font-bold">-S --socials</p>
        <p>
          my social media accounts that I am more active on
          <ul className="list-disc pl-8">
            <li>
              <Link
                target="_blank"
                className="font-bold hover:underline"
                href="https://x.com/caraquecoda/"
              >
                @caraquecoda
              </Link>{' '}
              | X / ex-Twitter
            </li>
            <li>
              <Link
                target="_blank"
                className="font-bold hover:underline"
                href="https://github.com/vmnog"
              >
                @vmnog
              </Link>{' '}
              | Github
            </li>
          </ul>
        </p>
      </article>
    </div>
  )
}
