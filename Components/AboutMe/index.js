import Image from "next/image";
import { Container } from "postcss";

function AboutMe({ value }) {
  return (
    <container className="flex flex-row content-center items-center bg-[#faedcd] dark:bg-[#4a4e69]">
      <div className="hidden p-10  md:flex justify-center md:w-1/2">
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
            className="hidden  md:flex justify-center md:w-1/2"
            alt="a digital creation of a computer"
            src="/myComputerLightMode.svg"
            width={750}
            height={750}
          />
        )}
      </div>

      <div className="text-blue-400 lg:text-6xl font-Montserrat-Alternates p-20 md:w-1/2 md:relative md:py-0">
        <p className="text-green-400 lg:text-2xl relative">
          👋 Hi, I'm Adam!
        </p>
        <h1>
          I like making fun <a className="text-green-400">apps</a> with code.
          I have a background in law and business.
        </h1>
      </div>
    </container>
  );
}

export { AboutMe };
