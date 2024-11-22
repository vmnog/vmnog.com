import { Analytics } from '@vercel/analytics/react';
import { Space_Mono } from 'next/font/google'
import { ThemeProvider } from '@/app/providers'
import { WEBSITE_HOST_URL } from '@/lib/constants'
import type { Metadata } from 'next'
import Link from 'next/link'
import './global.css'
import { Container } from '@/components/container'
import { Navigation } from '@/components/navigation'
import { ThemeSwitch } from '@/components/theme-switch'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const meta = {
  title: 'Victor Nogueira - Software Engineer',
  description:
    'Victor Nogueira is a Software Engineer. Not just coding, but writing tech articles and teaching throughout programming courses to share knowledge.',
  image: `${WEBSITE_HOST_URL}/og-preview.jpg`,
}

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: '%s | Victor Nogueira',
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    siteName: meta.title,
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: meta.image,
      },
    ],
  },
  twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: 'summary_large_image',
  },
  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceMono.className}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <header className="py-4">
            <Container>
              <div className="flex items-center justify-between py-6">
                <Navigation />
                <ThemeSwitch />
              </div>
            </Container>
          </header>
          <main>
            <Analytics />
            <Container>{children}</Container>
          </main>
          <footer className="py-16">
            <Container>
              <p>
                Built by{' '}
                <Link className="link" href="https://github.com/vmnog">
                  Victor Nogueira
                </Link>
              </p>
            </Container>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
