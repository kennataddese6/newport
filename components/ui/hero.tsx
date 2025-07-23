"use client"
import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { HoverBorderGradient } from "./hover-border-gradient"
const Hero = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.2])
  const y = useTransform(scrollYProgress, [0, 1], [0, -1700])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6])

  return (
    <>
      <h1 className="md:text-7xl mt-56 text-3xl lg:text-5xl font-bold text-center text-white relative z-20">
        I am a creative developer
      </h1>
      <p className="text-xl text-center my-3">
        Working to bring imagination to reality and thriving to make
        masterpieces <br /> of the generation{" "}
      </p>
      <Link
        href="https://www.upwork.com/freelancers/~013312695998cc584d"
        target="_blank"
        className=" flex justify-center text-center"
      >
        <HoverBorderGradient
          containerClassName="rounded-full cursor-pointer"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <span>Let{"'"}s Work</span>
        </HoverBorderGradient>
      </Link>
      <motion.div style={{ scale, y, opacity }}>
        <Image
          src={"/earth.png"}
          alt="Earth image"
          width={500}
          height={500}
          className="w-[36rem] md:w-[56rem] md:h-[56rem]"
        />
      </motion.div>
    </>
  )
}

export default Hero
