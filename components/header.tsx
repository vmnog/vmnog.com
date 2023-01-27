import Link from 'next/link'
import { useRouter } from 'next/router'
import { AUTHOR_NICK } from '../lib/constants'
import Container from './container'

const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 grid grid-cols-header">
        <div>
          {!(router.pathname === '/') && (
            <Link href="/" className="hover:underline">
              {AUTHOR_NICK}.
            </Link>
          )}
        </div>
        <div className='flex justify-end gap-6 text-2xl flex-wrap'>
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/" className="hover:underline">
            About me
          </Link>
          <Link href="/" className="hover:underline">
            Blog
          </Link>
        </div>
      </h2>
    </Container>
  )
}

export default Header
