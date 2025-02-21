import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="flex items-center gap-4">
      <Link
        prefetch
        href="/"
        className="hover:border-b-2 hover:border-b-primary"
      >
        Home
      </Link>
      <Link
        prefetch
        href="/about"
        className="hover:border-b-2 hover:border-b-primary"
      >
        About
      </Link>
      <Link
        prefetch
        href="/blog"
        className="hover:border-b-2 hover:border-b-primary"
      >
        Blog
      </Link>
      <Link
        prefetch
        href="/contact"
        className="hover:border-b-2 hover:border-b-primary"
      >
        Contact
      </Link>
    </nav>
  )
}
