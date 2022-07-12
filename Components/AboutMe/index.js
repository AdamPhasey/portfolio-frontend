import Image from "next/image";
import { Container } from "postcss";

function AboutMe() {
  return (
    <container className="flex flex-row justify-around items-center bg-[#4a4e69]">
      <Image className="" alt="a digital creation of a computer" src="/myComputer.svg" width={750} height={750} />

  <p className="text-white font-Chakra-Petch">

    Hello, I am Adam Phasey
    <br/>

  </p>
    </container>
  );
}


export { AboutMe };
