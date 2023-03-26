import {useCallback, useState} from "react"
import { AUTHOR_NAME, AUTHOR_NICK } from "../lib/constants"
import { motion, useAnimationControls } from "framer-motion"
import Link from "next/link";
import {AtSign, Calendar, Clock, MapPin} from 'react-feather';

const Intro = () => {
	const [showName, setShowName] = useState(true);
	const controls = useAnimationControls();

	const toggleName = useCallback(() => {
		setShowName(!showName);

		controls.start({
			translateX: [-300, 150, -50, 0],
			opacity: [0, 1, 1, 1, 1],
			transition: { duration: 0.5 },
		});
	}, [showName, setShowName]);

  return (
    <motion.section
			transition={{ duration: 0.5, delay: 0.2 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="flex-col flex md:justify-between mt-16 mb-24 gap-4"
		>
			<motion.h1
				className="w-fit text-7xl md:text-8xl font-bold tracking-tighter leading-[3rem] break-all xs:break-normal h-auto xs:h-28 md:h-16 lowercase cursor-pointer select-none"
				onClick={toggleName}
				animate={controls}
			>
					{showName ? AUTHOR_NAME : AUTHOR_NICK}
			</motion.h1>
      <motion.p
				transition={{ duration: 0.5, delay: 0.4 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="text-lg md:text-2xl leading-relaxed mb-4 mt-4 max-w-4xl"
				>
					<span title="Currently working at Brasilprev as Senior Software Engineer" className="flex flex-wrap items-center gap-1"><Calendar /> Sr. Frontend Engineer <a target="_blank" className="hover:opacity-80 font-semibold ml-6 md:ml-0" href="https://www1.brasilprev.com.br">@brasilprev</a> <span>🇧🇷</span></span><br />
					Skilled in <a target="_blank" className="hover:opacity-80 font-bold" href="https://reactjs.org/">React</a>
					&nbsp;&&nbsp;<a target="_blank" className="hover:opacity-80 font-bold" href="https://angular.io/">Angular</a>. 
					Not just coding, but writing <Link className="hover:opacity-80 font-semibold" href="/posts">tech articles</Link> to share knowledge. Takes big challenges head-on, driven to elevate
					projects to new heights. Currently founder and maintainer of the project&nbsp;
					<a target="_blank" className="hover:opacity-80 font-bold" href="https://vendeutudo.com.br/">@vendeutudo</a>.&nbsp;
					<Link href="/about" className="text-blue-500 hover:opacity-80">read more</Link>
      </motion.p>
    </motion.section>
  )
}

export default Intro
