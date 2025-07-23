import emailjs from "@emailjs/browser"
import Image from "next/image"
import { useRef } from "react"
import { toast } from "sonner"
import { Input } from "../ui/input"
const Contact = () => {
  const form: any = useRef(null)
  const sendEmail = (formData: FormData) => {
    try {
      emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_KEY || "",
        process.env.NEXT_PUBLIC_TEMPLATEID || "",
        {
          user_name: formData.get("user_name"),
          user_email: formData.get("user_email"),
          message: formData.get("message"),
          email: process.env.NEXT_PUBLIC_EMAIL,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_KEY,
        },
      )
      form.current?.reset()
      toast.success("Message recieved", {
        description: "I will reply to you very soon.",
        style: { backgroundColor: "black" },
      })
    } catch (error: any) {
      toast.error("error")
    }
  }

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

        <form
          action={sendEmail}
          ref={form}
          className="w-[96%] md:w-[32%] bg-black/20 backdrop-blur-lg  border-2 border-neutral-800 mx-auto px-8 py-14 rounded-lg"
        >
          <Input
            id="firstname"
            name="user_name"
            placeholder="Your Name"
            type="text"
            required
          />
          <br />
          <Input
            id="firstname"
            name="user_email"
            placeholder="Your Email"
            type="email"
            required
          />
          <br />

          <textarea
            required
            className="w-full border-2 border-neutral-800/50 p-3"
            placeholder="What do you want to say?"
            name="message"
          ></textarea>
          <br />
          <br />
          <button
            type="submit"
            className="border-2 cursor-pointer border-neutral-800/50 hover:bg-black/40 w-full p-3 rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
