import Image from "next/image";
import { Container } from "postcss";

function AboutMe({ value }) {
  return (
    <container className="flex w-screen flex-row content-center items-center bg-[#faedcd] dark:bg-[#4a4e69]">
      <div className="hidden p-10 md:flex justify-center md:w-1/2">
        {value === "dark" && (
          <Image
            className="invisible md:visible"
            alt="a digital creation of a computer"
            src="/myComputerDarkmode.svg"
            width={750}
            height={750}
          />
        )}
        {value === "light" && (
          <Image
            className="hidden md:flex justify-center md:w-1/2"
            alt="a digital creation of a computer"
            src="/myComputerLightMode.svg"
            width={750}
            height={750}
          />
        )}
      </div>

      <div className="text-blue-400 text-[9vw] font-Montserrat-Alternates py-36 p-6 md:text-[4vw] md:w-1/2 md:relative md:py-0">
        <p className="text-green-400 text-[4vw] md:text-[2vw]">
          👋 Hi, I'm Adam!
        </p>
        <h1 >
          I like making fun <a className="text-green-400">apps</a> with code.
          My background is in law and business.
        </h1>
      </div>
    </container>
  );
}

export { AboutMe };
