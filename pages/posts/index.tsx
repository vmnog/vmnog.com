import Layout from '../../components/layout'
import { getAllPosts } from '../../lib/api'
import {motion} from 'framer-motion'
import Container from '../../components/container'
import Post from '../../interfaces/post'
import PostPreview from '../../components/post-preview'
import {AUTHOR_NAME} from '../../lib/constants'
import {AUTHOR_NICK} from '../../lib/constants'
import Head from 'next/head'

type Props = {
  posts: Post[]
}

export default function BlogPage({ posts }: Props) {

	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2
			}
		}
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1
		}
	};

	return (
			<>
				<Head>
					<title>{`Blog - ${AUTHOR_NAME} (${AUTHOR_NICK}) | Frontend Developer`}</title> 
				</Head>
				<Layout>
					<Container>
						<section className="max-w-4xl mx-auto">
							<motion.h2
								transition={{ duration: 0.5 }}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								className="text-7xl font-bold tracking-tighter leading-[3rem] lowercase mb-8"
							>
								Blog
							</motion.h2>
							<motion.div 
								variants={container}
								initial="hidden"
								animate="visible"
								className="grid grid-cols-1 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32"
							>
								{posts.map((post) => (
									<motion.div variants={item}>
										<PostPreview
											hideCoverImage
											key={post.slug}
											title={post.title}
											coverImage={post.coverImage}
											date={post.date}
											author={post.author}
											slug={post.slug}
											excerpt={post.excerpt}
										/>
									</motion.div>
								))}
							</motion.div>
						</section>
					</Container>
				</Layout>
			</>
	);
}

export const getStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { posts },
  }
}
