import { AUTHOR_NICK } from "../lib/constants"

const Intro = () => {
  return (
    <section className="flex-col flex md:justify-between mt-16 mb-24 gap-4">
      <h1 className="text-8xl font-bold tracking-tighter leading-tight">
        {AUTHOR_NICK}.
      </h1>
      <p className="text-lg md:text-2xl leading-relaxed mb-4 max-w-4xl">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna <u>aliqua</u>. Praesent elementum facilisis
				leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet
				nulla facilities morbi <u>tempus</u>.
      </p>
    </section>
  )
}

export default Intro
