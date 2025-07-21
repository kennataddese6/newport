"use client"

import { InfiniteMovingCards } from "./infinite-moving-works"

const Works = () => {
  return (
    <div className="text-white">
      <div className="h-auto rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative  overflow-hidden">
        <h1 className="text-3xl font-semibold text-center mb-12">My work</h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  )
}

export default Works
const testimonials = [
  {
    link: "https://res.cloudinary.com/dlmxydxdt/video/upload/cbeib.mp4",
  },
  {
    link: "https://res.cloudinary.com/dlmxydxdt/video/upload/v1753087353/essence_gkewrh.mp4",
  },
  {
    link: "https://res.cloudinary.com/dlmxydxdt/video/upload/v1753087548/hydration_mhdevp.mp4",
  },
  {
    link: "https://res.cloudinary.com/dlmxydxdt/video/upload/v1753087623/threecars_ynekfx.mp4",
  },
  {
    link: "https://res.cloudinary.com/dlmxydxdt/video/upload/v1753088536/0716_10_lk2zv1.mp4",
  },
]
