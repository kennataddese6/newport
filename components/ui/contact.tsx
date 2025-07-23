import Image from "next/image"
import { Input } from "../ui/input"
const Contact = () => {
  return (
    <div className="w-full" id="contact">
      <h1 className="text-3xl font-semibold text-center mt-24 mb-12 md:pb-48">
        Talk to me
      </h1>
      <div className="relative  z-10 w-full">
        <Image
          src={"/contactholder.png"}
          width={1200}
          height={1200}
          alt="Contact"
          className="hidden md:block w-[42rem] absolute left-1/2 -translate-x-1/2 bottom-0 -z-10"
        />
        <Image
          src={"/egghead.png"}
          width={1200}
          height={1200}
          alt="Contact"
          className="hidden md:block w-[24rem] absolute left-1/6 -translate-x-1/2 -bottom-5 -z-10"
        />
        <Image
          src="https://apuedge.com/wp-content/uploads/bh_accretiondisk_sim_stationary_websize.gif"
          width={1200}
          height={1200}
          unoptimized
          alt="Contact"
          className="w-[24rem] -rotate-z-12 absolute -right-32 -translate-x-1/2 bottom-36 -z-10"
        />

        <form className="w-[96%] md:w-[32%] bg-black/20 backdrop-blur-lg  border-2 border-neutral-800 mx-auto px-8 py-14 rounded-lg">
          <Input id="firstname" placeholder="Your Name" type="text" />
          <br />
          <Input id="firstname" placeholder="Your Email" type="text" />
          <br />

          <textarea
            className="w-full border-2 border-neutral-800/50 p-3 "
            placeholder="Your Message"
          ></textarea>
          <br />
          <br />
          <button className="border-2 cursor-pointer border-neutral-800/50 hover:bg-black/40 w-full p-3 rounded-md">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
