import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { AUTHOR_NICK, AUTHOR_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import SectionSeparator from '../components/section-separator'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Head>
        <title>{`${AUTHOR_NAME} (${AUTHOR_NICK}) | Frontend Developer`}</title> 
      </Head>
      <Layout>
        <Container>
          <Intro />
					<SectionSeparator />
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
