import Image from "next/image";
import { Container } from "postcss";

function AboutMe({ value }) {
  return (
    <container className="flex flex-row content-center items-center bg-[#4841cb] dark:bg-[#4a4e69]">
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
      
      <div className="p-10 md:w-1/2 md:relative md:py-0">
        <p className="text-white lg:text-5xl font-Chakra-Petch">
          Hello, I am Adam Phasey I come from an entrepreneurial background background n entrepreneurial background background ban entrepreneurial background background ban entrepreneurial background background ban entrepreneurial background background ba background background background background background
        </p>
      </div>
      </container>
  );
}

export { AboutMe };
