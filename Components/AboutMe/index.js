import Image from "next/image";
import { Container } from "postcss";

function AboutMe({ value }) {
  return (
    <container className="flex flex-row justify-around items-center bg-[#4841cb] dark:bg-[#4a4e69]">
      <div className="w-1/2">
        {value === "dark" && (
          <Image
            className="md:visible"
            alt="a digital creation of a computer"
            src="/myComputerDarkmode.svg"
            width={750}
            height={750}
          />
        )}
        {value === "light" && (
          <Image
            className="md:visible"
            alt="a digital creation of a computer"
            src="/myComputerLightMode.svg"
            width={750}
            height={750}
          />
        )}
      </div>

      <div className="w-1/2">
        <p className="text-white lg:text-5xl font-Chakra-Petch">
          Hello, I am Adam Phasey I come from an entrepreneurial background
        </p>
      </div>
    </container>
  );
}

export { AboutMe };
