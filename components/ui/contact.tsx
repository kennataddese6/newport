import Image from "next/image"

const Contact = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-semibold text-center mt-24 mb-12 pb-48">
        Talk to me
      </h1>
      <div className="relative  z-10 w-full">
        <Image
          src={"/contactholder.png"}
          width={600}
          height={600}
          alt="Contact"
          className="w-[42rem] absolute left-1/2 -translate-x-1/2 bottom-0 -z-10"
        />

        <form className="w-full md:w-[32%] bg-black/20 backdrop-blur-lg  border-2 border-neutral-800 mx-auto px-8 py-14 rounded-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 border-neutral-800/50 p-3 w-full rounded-md"
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Your Email"
            className=" border-2 border-neutral-800/50 p-3 w-full rounded-md"
          />
          <br />
          <br />
          <textarea
            className="w-full border-2 border-neutral-800/50 p-3"
            placeholder="Your Message"
          ></textarea>
          <br />
          <br />
          <button className="border-2 border-neutral-800/50 w-full p-3 rounded-md">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
