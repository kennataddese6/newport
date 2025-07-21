"use client"
import About from "@/components/ui/about"
import CodeSample from "@/components/ui/codesample"
import { FloatingNav } from "@/components/ui/floating-navbar"
import Hero from "@/components/ui/hero"
import Skills from "@/components/ui/skills"
import { SparklesCore } from "@/components/ui/sparkles"
import Works from "@/components/ui/works"
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react"
export default function Page() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Project",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ]
  return (
    <div className="relative  w-full">
      <div className="h-auto relative  w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0">
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
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Works />
        <Skills />
        <CodeSample />
      </div>
    </div>
  )
}
