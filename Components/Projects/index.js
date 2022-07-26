import Image from "next/image";
import Cards from "../Cards";
import anime from "animejs";
import { useEffect, useState } from "react" ;

function Projects() {

  return (
    <>
    <h1 className="flex py-2 font-Montserrat-Alternates text-2xl md:text-5xl justify-center">PROJECTS</h1>
    <div className="flex flex-wrap p-10 gap-11 justify-around items-center mb-12">
     <Cards/>
    </div>
    </>
      

  );
}

export { Projects };
