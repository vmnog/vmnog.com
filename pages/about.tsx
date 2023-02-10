import Layout from '../components/layout'
import Container from '../components/container'
import Image from 'next/image';
import {AUTHOR_NAME} from '../lib/constants';
import Link from 'next/link';

export default function AboutPage() {
	return (
		<Layout>
			<Container className="grid gap-20 max-w-lg">
				<div className="grid grid-cols-2 items-center gap-10 max-w-4xl m-auto">
					<div className="grid gap-10">
						<h1 className="text-4xl font-bold tracking-tighter leading-[3rem] lowercase">nowadays</h1>
						<Image
							className="rounded-lg grayscale"
							src={'https://github.com/vmnog.png'}
							alt={`${AUTHOR_NAME}`}
							width={400}
							height={400}
						/>
					</div>

					<section className="md:mt-20 h-fit grid gap-2 leading-loose">
						<p>Hey, I'm Victor Nogueira. I started my career as a software developer in 2017 and have since honed my skills as a Senior Frontend Developer at <a target="_blank" className="hover:opacity-80 underline font-semibold" href="https://www1.brasilprev.com.br">Brasilprev</a>. I have also had the opportunity to work at companies such as Bulla, WEX, Sociax, and AitiaLabs.</p>
						<p>In my free time, I am particularly passionate about my side project <a target="_blank" className="hover:opacity-80 underline font-semibold" href="https://vendeutudo.com.br">Vendeu Tudo</a>, which allows me to explore and implement innovative solutions to real-world problems.</p>
						<p>In my spare time, I enjoy sharing my experiences and knowledge by writing technical articles about the challenges I face in my daily work. Feel free to check them out <Link className="hover:opacity-80 underline font-semibold" href="/blog">here</Link></p>
					</section>
				</div>

				<section className="w-full h-full grid gap-4 items-center leading-loose max-w-3xl m-auto">
				<h1 className="text-4xl font-bold tracking-tighter leading-[3rem] lowercase">More about me</h1>
					<p>I have a strong interest in staying up-to-date with the latest technologies and advancements in the developer community. I am a big fan of the Vim text editor and often spend time in the terminal, as I believe it optimizes my workflow and increases my productivity.</p>
					<p>When I'm not coding, I like to spend quality time with my wife and our two cats. I am also a health enthusiast and enjoy staying active through regular gym workouts and eating nutritious food.</p>
				</section>
			</Container>
		</Layout>
	);
}
