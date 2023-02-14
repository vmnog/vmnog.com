import Link from 'next/link'
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
import {motion} from 'framer-motion'
import {useCallback } from 'react'
import {useRouter} from 'next/router'
import classNames from 'classnames'

type Tab = { name: string; path: string; isActive: boolean };

const TABS: Tab[] = [
  { name: 'About', path: '/about', isActive: false },
  { name: 'Blog', path: '/blog', isActive: false },
]

type Props = {
	shouldAnimateOnStart: boolean;
}

const Header = ({ shouldAnimateOnStart }: Props) => {
	const router = useRouter();

	const reloadPage = useCallback(() => {
		if(router.pathname === '/') {
			location.reload();
		}
	}, [router]);

	const isActiveRoute = useCallback((route: Tab) => {
		return router.pathname === route.path;
	}, [router]);

  return (
		<motion.header
			transition={{ duration: 0.5 }}
			initial={{ opacity: shouldAnimateOnStart ? 0 : 1 }}
			animate={{ opacity: 1 }}
		>
			<Container>
				<h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 grid grid-cols-1 md:grid-cols-header">
						<div className="w-full flex justify-between items-center">
							<Link onClick={reloadPage} href="/" className="text-4xl font-bold tracking-tighter leading-tight hover:underline">
								{AUTHOR_NICK}.
							</Link>

							<nav  className="md:hidden">
								<Menu>
									<MenuButton as={Button} bgColor={white}>
										<MenuIcon />
									</MenuButton>
									<MenuList>
										{TABS.map((tab) => (
												<Link key={tab.name} href={tab.path} className={
														classNames("hover:underline", { "underline": isActiveRoute(tab) })
												}>
													<MenuItem>
															<span className="lowercase font-normal">{tab.name}</span>
													</MenuItem>
												</Link>
										))}
									</MenuList>
								</Menu>
							</nav>
						</div>

					<div className="justify-end gap-6 text-2xl flex-wrap hidden md:flex lowercase">
						{TABS.map((tab) => (
							<Link key={tab.name} href={tab.path} className={
														classNames("hover:underline font-normal", { "underline": isActiveRoute(tab) })
												}>
								{tab.name}
							</Link>
						))}
					</div>
				</h2>
			</Container>
		</motion.header>
  )
}

export default Header
