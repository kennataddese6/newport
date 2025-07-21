import Image from "next/image"
import Link from "next/link"

const CodeSample = () => {
  return (
    <div className="mt-12 relative z-10 w-11/12">
      <h1 className="text-3xl font-semibold text-center mt-24 mb-12">
        See my code
        <Link href={"https://github.com/kennataddese6"} target="_blank">
          <Image
            alt="Github Image"
            src={"/github.png"}
            width={500}
            height={400}
            className="w-18 rounded-full inline-block object-cover cursor-pointer"
          />
        </Link>
      </h1>
      <iframe
        src="https://codesandbox.io/p/devbox/dummy-2hqqyh?embed=1&file=%2Fapp%2Fpage.tsx"
        className="w-full h-[42rem] rounded-lg"
        title="dummy"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
      <h1 className="text-3xl font-semibold text-center mt-24 mb-12">
        See my code
      </h1>{" "}
      <h1 className="text-3xl font-semibold text-center mt-24 mb-12">
        See my code
      </h1>
    </div>
  )
}

export default CodeSample
