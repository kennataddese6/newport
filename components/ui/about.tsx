"use client"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { motion, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import { SparklesCore } from "./sparkles"
const About = () => {
  const { scrollYProgress } = useScroll()

  const y = useTransform(scrollYProgress, [0, 1], [0, -1500])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])

  const saturny = useTransform(scrollYProgress, [0, 1], [0, -2500])
  const saturnscale = useTransform(scrollYProgress, [0, 1], [1, 0.3])

  return (
    <div className="relative z-0 w-full">
      <h1 className="text-3xl font-semibold text-center mb-12">Who am I</h1>
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        image={"/developer.png"}
        title="A Developer"
        description="A developer grinding on the web for more than 2 years"
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        image={"/engineer.png"}
        title="An Engineer"
        description="A Software Engineer at Commercial bank of Ethiopia"
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        image={"/student.png"}
        title="A Student"
        description="A Student on YouTube and at Meta and IBM on Coursera"
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        image={"/scienctist.png"}
        title="A Scientist"
        description="A Bachelor Degree in Computer Science from Jimma University"
      />
      <motion.img
        style={{ y: saturny, scale: saturnscale }}
        src={"/saturn.png"}
        width={1600}
        height={1600}
        alt="Saturn Image"
        className="absolute top-0 w-[54rem] -z-10 right-0 translate-x-1/2 rotate-[320deg]"
      />
      <motion.img
        style={{ y, scale }}
        src={"/sun.png"}
        width={1600}
        height={1600}
        alt="Sun Image"
        className="absolute top-[60%] w-[102rem] -z-10 right-0 translate-x-[32%] rotate-[350deg]"
      />
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  )
}

export default About
interface GridItemProps {
  area: string
  image: string
  title: string
  description: React.ReactNode
}

const GridItem = ({ area, image, title, description }: GridItemProps) => {
  return (
    <div className="mt-8 relative h-full bg-white/10 backdrop-blur-sm  rounded-2xl border max-w-72 mx-auto  md:rounded-2xl p-px ">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />
      <div className="relative  flex flex-1 flex-col justify-between gap-3">
        <Image
          src={image}
          alt="Some Image"
          width={300}
          height={300}
          className="w-full rounded-t-2xl   max-h-56"
        />
        <div className="space-y-3 p-4">
          <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
            {title}
          </h3>
          <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
            {description}
          </h2>
        </div>
      </div>
    </div>
  )
}
