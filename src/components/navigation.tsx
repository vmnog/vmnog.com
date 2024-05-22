import Link from 'next/link'

export function Navigation() {
  return (
    <nav className='flex items-center gap-4'>
      <Link href="/" className="hover:border-b-primary hover:border-b">
        Home
      </Link>
      <Link href="/about" className="hover:border-b-primary hover:border-b">
        About
      </Link>
      <Link href="/blog" className="hover:border-b-primary hover:border-b">
        Blog
      </Link>
    </nav>
  )
}
