import Link from 'next/link'
import { useRouter } from 'next/router'
import { AUTHOR_NICK } from '../lib/constants'
import Container from './container'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import { Menu as MenuIcon} from 'react-feather'
import {white} from 'tailwindcss/colors'

type Tab = { name: string; path: string; };

const TABS: Tab[] = [
  { name: 'Home', path: '/' },
  { name: 'About me', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Projects', path: '/projects' },
]


const Header = () => {
  const router = useRouter();

  return (
    <Container>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 grid grid-cols-1 md:grid-cols-header">
        <div>
          {!(router.pathname === '/') && (
            <Link href="/" className="hover:underline">
              {AUTHOR_NICK}.
            </Link>
          )}
        </div>

          <div className="w-full flex justify-between items-center md:hidden">
						<strong className="text-4xl font-bold tracking-tighter leading-tight">
              {AUTHOR_NICK}.
						</strong>

            <Menu>
              <MenuButton as={Button} bgColor={white}>
                <MenuIcon />
              </MenuButton>
              <MenuList>
                {TABS.map(tab => (
                    <Link key={tab.name} href={tab.path} className="hover:underline font-normal">
                      <MenuItem className="text-red-500">
                          {tab.name}
                      </MenuItem>
                    </Link>
                ))}
              </MenuList>
            </Menu>
          </div>

        <div className="justify-end gap-6 text-2xl flex-wrap hidden md:flex">
          {TABS.map(tab => (
            <Link key={tab.name} href={tab.path} className="hover:underline">
              {tab.name}
            </Link>
          ))}
        </div>
      </h2>
    </Container>
  )
}

export default Header
