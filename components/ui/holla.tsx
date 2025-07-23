import { motion } from "motion/react"
import Image from "next/image"
import { ShootingStars } from "./shooting-stars"
const Holla = () => {
  return (
    <div className="relative z-0 w-full">
      <h1 className="text-3xl font-semibold text-center mt-24 ">Holla at me</h1>
      <Image
        src={"/phonecall.png"}
        alt="phone call image"
        width={1800}
        height={1800}
        className="w-[28rem] cursor-pointer block mx-auto"
      />
      <motion.div className="text-white absolute top-10/12 left-[30%] font-semibold border w-fit py-1 px-3 rounded-full">
        +1 (530) 712-3425
      </motion.div>
      <div className="h-full rounded-md bg-neutral-900/0 absolute top-0 left-0 flex flex-col items-center justify-center -z-10 w-full">
        <ShootingStars />
      </div>
    </div>
  )
}
export default Holla
