import {useEffect, useState} from "react"
import { AUTHOR_NAME, AUTHOR_NICK } from "../lib/constants"
import { motion, useAnimationControls } from "framer-motion"

const Intro = () => {
	const [showName, setShowName] = useState(true);
	const controls = useAnimationControls();

	useEffect(() => {
		controls.start({
			translateX: [-300, 150, -50, 0],
			opacity: [0, 1, 1, 1, 1],
			transition: { duration: 0.5 },
		});
	}, [showName])

  return (
    <motion.section
			transition={{ duration: 0.5, delay: 0.5 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="flex-col flex md:justify-between mt-16 mb-24 gap-4"
		>
			<motion.h1
				className="w-fit text-8xl font-bold tracking-tighter leading-tight lowercase cursor-pointer select-none"
				onClick={() => setShowName(!showName)}
				animate={controls}
			>
					{showName ? AUTHOR_NAME : AUTHOR_NICK}
			</motion.h1>
      <motion.p
				transition={{ duration: 0.5, delay: 0.8 }}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="text-lg md:text-2xl leading-relaxed mb-4 max-w-4xl">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna <u>aliqua</u>. Praesent elementum facilisis
				leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet
				nulla facilities morbi <u>tempus</u>.
      </motion.p>
    </motion.section>
  )
}

export default Intro
