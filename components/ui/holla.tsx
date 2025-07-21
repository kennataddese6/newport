import { motion } from "motion/react"
import Image from "next/image"
const Holla = () => {
  return (
    <div className="relative">
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
    </div>
  )
}
export default Holla
