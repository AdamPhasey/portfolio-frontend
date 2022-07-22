import Image from "next/image";
import { Container } from "postcss";
import {useEffect} from 'react';
import anime from 'animejs';

function AboutMe({ value }) {

  //use effect here if needed
//   useEffect(() => {
//   let comp = document.querySelector('#Comp1')
 
// }, [])


  return (
    <container className="flex h-full w-full flex-row content-center items-center bg-[#f4f3ee] dark:bg-[#4a4e69]">
      <div  className="hidden p-10 md:flex justify-center md:h-screen md:w-1/2">
        {value === "dark" && (
          <Image
            id="Comp1"
            className="invisible md:visible"
            alt="a digital creation of a computer"
            src="/myComputerDarkmode.svg"
            width={650}
            height={650}
          />
        )}
        {value === "light" && (
          <Image
            id="Comp1"
            className="hidden md:flex justify-center md:w-1/2"
            alt="a digital creation of a computer"
            src="/myComputerLightMode.svg"
            width={650}
            height={650}
          />
        )}
      </div>

      <div className="text-blue-400 text-[9vmin] py-40 p-4 font-Montserrat-Alternates md:text-[6vmin] md:w-1/2 md:relative md:p-0">
        <p className="text-green-400 text-[4vmin] md:text-[4vmin]">
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
