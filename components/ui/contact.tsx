const Contact = () => {
  return (
    <div className="relative z-10 w-full">
      <h1 className="text-3xl font-semibold text-center mt-24 mb-12">
        Talk to me
      </h1>
      <form className="w-full md:w-[40%]  border-2 border-neutral-800 mx-auto px-8 py-16 rounded-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="border-2 border-neutral-800 p-3 w-full rounded-md"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Your Email"
          className=" border-2 border-neutral-800 p-3 w-full rounded-md"
        />
        <br />
        <br />
        <textarea
          className="w-full border-2 border-neutral-800 p-3"
          placeholder="Your Message"
        ></textarea>
        <br />
        <br />
        <button className="border-2 border-neutral-800 w-full p-3 rounded-md">
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
