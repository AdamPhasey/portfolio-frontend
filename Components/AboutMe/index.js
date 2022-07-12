import Image from "next/image";
import { Container } from "postcss";

function AboutMe() {
  return (
    <container className="flex flex-row justify-around items-center bg-[#4a4e69]">
      <Image className="" src="/myComputer.svg" width={750} height={750} />

      <p className="font-Chakra-Petch md:text-5xl text-[#f2e9e4]">
        <Image src="/helloEmoji.svg" height={50} width={50} className="animate-pulse"/>I am Adam Phasey <br />A Software Developer <br />
        WHO LOVES A CHALLENGE
      </p>
    </container>
  );
}

export { AboutMe };
