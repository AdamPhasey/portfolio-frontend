import Image from "next/image";
import { Container } from "postcss";
import { useEffect, useRef } from "react";
import anime from "animejs";

function AboutMe({ value }) {

const ref = useRef(null);
//   use effect here if needed
  useEffect(() => {
let el = ref.current
let xPos = 0;
let yPos = 0;
if (el.querySelector('header'))
  el.querySelector('header').addEventListener('mousedown', dragMouseDown);
else
  el.addEventListener('mousedown', dragMouseDown);

function dragMouseDown(event) {
  event.preventDefault();
  document.addEventListener('mouseup', closeDragElement);
  document.addEventListener('mousemove', elementDrag);
}
function elementDrag(event) {
  event.preventDefault();
  xPos += event.movementX;
  yPos += event.movementY;
  el.style.transform = `translate(${xPos}px, ${yPos}px)`;
}
function closeDragElement() {
  document.removeEventListener('mouseup', closeDragElement);
  document.removeEventListener('mousemove', elementDrag);
}
  }, []);
  


  return (
    <container className="flex text-center h-full w-full flex-row content-center items-center bg-[#4a4e69] dark:bg-[#000]">
      <div ref={ref} className="hidden z-50 cursor-move sm:p-10 md:p-10 lg:p-28 md:flex justify-center md:h-screen md:w-1/2">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
    <defs>
        <style>.cls-1{"{stroke:gray;stroke-miterlimit:10;stroke-width:5px;}.cls-2{fill:gray;}.cls-3{fill:#d90028;}.cls-4{fill:#ffc10b;}.cls-5{fill:#00cf00;}.cls-6{font-size:17.43px;fill:#f2f2f2;}.cls-6,.cls-7{font-family:Silom;}.cls-7{font-size:24.9px;fill:lime;{"}</style>
    </defs>
    <g id="Background">
        <rect className="cls-1" x="2.5" y="2.5" width="495" height="495" />
    </g>
    <g id="Nav">
        <rect className="cls-2" x="2" y="1" width="498" height="28.39" />
        <circle className="cls-3" cx="21.42" cy="14.94" r="7.97" />
        <circle className="cls-4" cx="45.53" cy="14.94" r="7.97" />
        <circle className="cls-5" cx="69.23" cy="14.94" r="7.97" />
        <circle cx="21.63" cy="15.15" r="2.45" />
        <text className="cls-6" transform="translate(152.25 23.09)">Adam Phasey’s Stack</text>
    </g>
    <path id="path">
        <animate attributeName="d" from="m0,0 h0" to="m0,0 h1100" dur="2s" begin="0s" repeatCount="0" fill="freeze"/>
    </path>
    <g id="Text">
        <text className="cls-7" transform="translate(31.58 77.28)"><textPath xlinkHref="#path">JavaScript</textPath></text>
        <text className="cls-7" transform="translate(31.63 114.48)"><textPath xlinkHref="#path">TypeScript</textPath></text>
        <text className="cls-7" transform="translate(32.62 189.18)"><textPath xlinkHref="#path">HTML &amp; CSS</textPath></text>
        <text className="cls-7" transform="translate(32.62 151.83)"><textPath xlinkHref="#path">Node.js</textPath></text>
        <text className="cls-7" transform="translate(33.87 224.04)"><textPath xlinkHref="#path">Python</textPath></text>
        <text className="cls-7" transform="translate(33.12 258.9)"><textPath xlinkHref="#path">Express</textPath></text>
        <text className="cls-7" transform="translate(34.12 293.26)"><textPath xlinkHref="#path">React</textPath></text>
        <text className="cls-7" transform="translate(34.12 325.63)"><textPath xlinkHref="#path">AWS</textPath></text>
        <text className="cls-7" transform="translate(34.12 356.32)"><textPath xlinkHref="#path">Deployment</textPath></text>
        <text className="cls-7" transform="translate(35.11 391.18)"><textPath xlinkHref="#path">PostgreSQL/MySQL</textPath></text>
        <text className="cls-7" transform="translate(32.62 468.06)"><textPath xlinkHref="#path">&gt;_</textPath></text>
    </g>
</svg>
</div>

      <div className="text-white text-[9vmin] py-40 p-4 font-Montserrat-Alternates md:text-[5vmin] md:w-1/2 md:relative md:p-0">
        <p className="text-green-400 text-[4vmin] md:text-[4vmin]">
          👋 Hi, I am Adam!
        </p>
        <h1>
          I am a London based full stack developer. I enjoy making <a className="text-green-400">fun</a> and <a className="text-green-400">interactive</a> things with <a className="text-green-400">code</a>.
        </h1>
      </div>
    </container>
  );
}

export { AboutMe };
