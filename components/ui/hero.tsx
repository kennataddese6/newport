"use client"
import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
const Hero = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.3])
  const y = useTransform(scrollYProgress, [0, 1], [0, -150])
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
      <button className="backdrop-blur-sm font-semibold py-2 cursor-pointer px-8 mx-auto border border-transparent dark:border-white/[0.4] rounded-full dark:bg-black/20 backdrop-blur-2l bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        Let{"'"}s Work
      </button>
      <motion.div style={{ scale, y, opacity }}>
        <Image
          src={"/earth.png"}
          alt="Earth image"
          width={500}
          height={500}
          className="w-[56rem] h-[56rem]"
        />
      </motion.div>
    </>
  )
}

export default Hero
