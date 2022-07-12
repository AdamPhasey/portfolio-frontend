import Image from "next/image";
import { Container } from "postcss";

function AboutMe() {
  return (
    <container className="flex flex-row justify-around items-center bg-[#4a4e69]">
      <Image className="animate-pulse" alt="a digital creation of a computer" src="/myComputer.svg" width={750} height={750} />

  <p className="text-white font-Chakra-Petch">

    Hey, I am Adam Phasey
  </p>
    </container>
  );
}


export { AboutMe };
