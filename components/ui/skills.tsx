import { motion } from "motion/react"
import Image from "next/image"
import { InfiniteMovingSkills } from "./infinite-moving-skills"
const Skills = () => {
  return (
    <div className="relative z-0">
      <h1 className="text-3xl font-semibold text-center mt-24 mb-12">
        What I use
      </h1>
      <InfiniteMovingSkills items={skills} direction="left" speed="slow" />
      <motion.img
        animate={{
          rotate: 360,
          transition: {
            duration: 75,
            repeat: Infinity,
            repeatType: "loop",
          },
        }}
        src="/mikgalaxy.png"
        alt="Milkway Galaxy"
        width={1200}
        height={1200}
        className="absolute top-1 -z-10 left-1/2 w-[64rem]"
      />
      <Image
        src="/andromeda.png"
        alt="Andromeda Galaxy"
        width={1200}
        height={1200}
        className="absolute top-11/12 -z-10 left-[30%] w-[12rem]"
      />
    </div>
  )
}

export default Skills

const skills = [
  {
    link: "/html.png",
  },
  {
    link: "/css.png",
  },
  {
    link: "/javascript.png",
  },
  {
    link: "/typescript.png",
  },
  {
    link: "/react.png",
  },
  {
    link: "/tailwind.png",
  },
  {
    link: "/nextjs.png",
  },
  {
    link: "/nodejs.png",
  },
  {
    link: "/mongodb.png",
  },
  {
    link: "/postgres.png",
  },
  {
    link: "/firebase.png",
  },
  {
    link: "/git.png",
  },
  {
    link: "/vscode.png",
  },
]
