import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import {useRouter} from 'next/router'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
	hideCoverImage?: boolean
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
	hideCoverImage
}: Props) => {
	const router = useRouter();

  return (
    <div
			onClick={() => router.push(`/posts/${slug}`)}
			className="cursor-pointer pb-4 rounded-lg transition hover:bg-slate-100">
      <div className="mb-5">
        <CoverImage hideCoverImage={hideCoverImage} slug={slug} title={title} src={coverImage} />
      </div>
			<div className="p-4">
				<h3 className="text-3xl mb-3 leading-snug">
					<Link
						as={`/posts/${slug}`}
						href="/posts/[slug]"
					>
						{title}
					</Link>
				</h3>
				<div className="text-lg mb-4">
					<DateFormatter dateString={date} />
				</div>
				<p className="text-lg leading-relaxed mb-4">{excerpt}</p>
				<Avatar name={author.name} picture={author.picture} />
			</div>
    </div>
  )
}

export default PostPreview
