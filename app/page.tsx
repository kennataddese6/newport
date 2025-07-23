"use client"
import About from "@/components/ui/about"
import CodeSample from "@/components/ui/codesample"
import Contact from "@/components/ui/contact"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { FollowerPointerCard } from "@/components/ui/following-pointer"
import Hero from "@/components/ui/hero"
import Holla from "@/components/ui/holla"
import Skills from "@/components/ui/skills"
import { SparklesCore } from "@/components/ui/sparkles"
import Works from "@/components/ui/works"
import {
  IconBriefcase,
  IconHome,
  IconMessage,
  IconUser,
} from "@tabler/icons-react"
export default function Page() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Project",
      link: "#project",
      icon: (
        <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ]
  return (
    <div className="relative  w-full">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={blogContent.author}
            avatar={blogContent.authorAvatar}
          />
        }
      >
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
          <Holla />
          <Contact />
        </div>
      </FollowerPointerCard>
    </div>
  )
}
const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Kenna Taddese",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "/MyPic.jpg",
  authorAvatar: "/MyPic.jpg",
}
const TitleComponent = ({
  title,
  avatar,
}: {
  title: string
  avatar: string
}) => (
  <div className="flex items-center space-x-2">
    <img
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
)
