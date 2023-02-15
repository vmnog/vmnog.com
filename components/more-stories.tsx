import PostPreview from './post-preview'
import type Post from '../interfaces/post'
import {motion} from 'framer-motion'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
	const container = {
		hidden: { opacity: 1, scale: 0 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.8,
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
    <section>
      <motion.h2
				transition={{ duration: 0.5, delay: 0.6 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
			>
        Last posts
      </motion.h2>
      <motion.div 
				variants={container}
				initial="hidden"
				animate="visible"
				className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32"
			>
        {posts.map((post) => (
					<motion.div variants={item}>
						<PostPreview
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
  )
}

export default MoreStories
