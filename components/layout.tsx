import {useRouter} from 'next/router'
import Footer from './footer'
import Header from './header'
import Meta from './meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
	 const router = useRouter();

  return (
    <>
      <Meta />
      <Header shouldAnimateOnStart={router.pathname === '/'} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
