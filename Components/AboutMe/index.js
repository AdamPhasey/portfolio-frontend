import Image from "next/image";
import { Container } from "postcss";

function AboutMe() {
  return (
    <container className="flex flex-row justify-around items-center bg-[#4a4e69]">
      <Image className="animate-pulse" src="/myComputer.svg" width={750} height={750} />

  <h1 className="mb-2 font-Chakra-Petch text-4xl text-gray-100 md:text-6xl">
  hi, I&apos;m <br className="block md:hidden" />
  <span className="relative">
    <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap text-brand-accent">
      vanntile <span className="text-3xl md:text-5xl">👋</span>
    </span>
    <span
      className="{`${styles.cursor} absolute -bottom-0 left-0 -top-1 inline-block bg-gray-900 w-full animate-type will-change`}"
    ></span>
  </span>
</h1>
    </container>
  );
}


export { AboutMe };
