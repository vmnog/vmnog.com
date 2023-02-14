import Layout from '../components/layout'
import { motion } from "framer-motion"
import Container from '../components/container'
import Image from 'next/image';
import {AUTHOR_NAME, AUTHOR_NICK} from '../lib/constants';
import Link from 'next/link';
import Head from 'next/head';

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>{`About - ${AUTHOR_NAME} (${AUTHOR_NICK}) | Frontend Developer`}</title> 
			</Head>
			<Layout>
				<Container className="grid gap-20 max-w-lg">
					<motion.div
						transition={{ duration: 0.5 }}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-4xl mx-auto"
					>
						<div className="grid gap-10">
							<motion.h1 
								transition={{ duration: 0.5 }}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
							className="text-7xl font-bold tracking-tighter leading-[3rem] lowercase">About</motion.h1>
							<Image
								className="rounded-lg grayscale"
								src={'https://github.com/vmnog.png'}
								alt={`${AUTHOR_NAME}`}
								width={400}
								height={400}
							/>
						</div>

						<section className="md:mt-20 h-fit grid gap-2 leading-loose">
							<p>I started my journey in the field of software development in 2017 and currently serve as a Senior Frontend Developer at <a target="_blank" className="hover:opacity-80 font-semibold" href="https://www1.brasilprev.com.br">@brasilprev</a> <span>🇧🇷</span>.  Throughout my professional experience, I have had the privilege of working at also others well-established financial institutions such as <a target="_blank" className="hover:opacity-80 font-semibold" href="https://www.bullla.com.br/">@bulla</a> and <a target="_blank" className="hover:opacity-80 font-semibold" href="https://www.wexinc.com/">@wex</a>.</p>
							<p>I am particularly passionate about my side project <a target="_blank" className="hover:opacity-80 font-semibold" href="https://vendeutudo.com.br">Vendeu Tudo</a>, which allows me to explore and implement innovative solutions to real-world problems.</p>
							<p>In my spare time, I enjoy sharing my experiences and knowledge by writing technical articles about the challenges I face in my daily work. Feel free to check them out <Link className="hover:opacity-80 font-semibold" href="/blog">here</Link>.</p>
						</section>
					</motion.div>

					<motion.section
						transition={{ duration: 0.5, delay: 0.4 }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
					className="w-full h-full grid gap-4 items-center leading-loose max-w-3xl m-auto">
					<h1 className="text-4xl font-bold tracking-tighter leading-[3rem] lowercase">personal</h1>
						<p>I'm always on the lookout for the newest tech and developments in the dev world. I'm a huge fan of the Vim text editor and I love spending time in the terminal because it makes my workflow super smooth and efficient.</p>
						<p>When I'm not typing away, I love hanging out with my wife and our two cute cats. I'm into fitness too, so I hit the gym regularly and eat healthy to stay in shape.</p>
					</motion.section>
				</Container>
			</Layout>
		</>
	);
}
