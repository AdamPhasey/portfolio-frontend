import Image from "next/image";
import { Container } from "postcss";

function AboutMe({value}) {
  return (
    <container className="flex flex-row justify-around items-center bg-[#4841cb] dark:bg-[#4a4e69]">
   {value === 'dark' && <Image className="" alt="a digital creation of a computer" src="/myComputerDarkmode.svg" width={750} height={750} />}
   {value === 'light' && <Image className="" alt="a digital creation of a computer" src="/myComputerLightMode.svg" width={750} height={750} />}


  <p className="text-white font-Chakra-Petch">

    Hello, I am Adam Phasey
    <br/>

  </p>
    </container>
  );
}


export { AboutMe };
