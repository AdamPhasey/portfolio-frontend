import Image from "next/image";
import { Container } from "postcss";
import { useEffect, useRef } from "react";
import anime from "animejs";

function Hero({ value }) {

const ref = useRef(null);

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
    <div className="flex flex-col content-center items-center bg-[#4a4e69] dark:bg-[#000]">
    <div className="flex text-center h-full w-full flex-row md:flex-col lg:flex-row content-center items-center bg-[#4a4e69] dark:bg-[#000]">
      <div ref={ref} className="hidden z-50 cursor-move md:flex md:justify-center md:h-full md:w-1/2 md:pt-4 lg:flex lg:justify-center lg:h-screen lg:w-1/2 lg:p-20">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 542.61 740">
    <defs>
        <style>.cls-1{"{stroke:gray;stroke-miterlimit:10;stroke-width:5px;}.cls-2{fill:gray;}.cls-3{fill:#d90028;}.cls-4{fill:#ffc10b;}.cls-5{fill:#00cf00;}.cls-6{font-size:18.92px;fill:#f2f2f2;}.cls-6,.cls-7{font-size:27.03px;fill:lime;{"}</style>
    </defs>
    <g id="Layer_1" data-name="Layer 1">
        <rect className="cls-1" x="2.5" y="200.11" width="537.39" height="537.39" />
        <rect className="cls-2" x="1.96" y="198.48" width="540.65" height="30.82" />
        <circle className="cls-3" cx="23.04" cy="213.62" r="8.65" />
        <circle className="cls-4" cx="49.22" cy="213.62" r="8.65" />
        <circle className="cls-5" cx="74.94" cy="213.62" r="8.65" />
        <circle cx="23.26" cy="213.84" r="2.66" />
        <text className="cls-6" transform="translate(165.07 222.46)">Adam Phasey’s Stack</text>
    </g>

    <path id="path">
        <animate attributeName="d" from="m0,0 h0" to="m0,0 h1100" dur="2s" begin="0.5s" repeatCount="0" fill="freeze"/>
    </path>
    <g id="Text" className="font-Orbitron">
        <text className="cls-7" transform="translate(34.07 281.3)"><textPath xlinkHref="#path">JavaScript</textPath></text>
        <text className="cls-7" transform="translate(34.12 321.68)"><textPath xlinkHref="#path">TypeScript</textPath></text>
        <text className="cls-7" transform="translate(35.2 402.78)"><textPath xlinkHref="#path">HTML &amp; CSS</textPath></text>
        <text className="cls-7" transform="translate(35.2 362.23)"><textPath xlinkHref="#path">Node.js</textPath></text>
        <text className="cls-7" transform="translate(36.56 440.62)"><textPath xlinkHref="#path">Python</textPath></text>
        <text className="cls-7" transform="translate(35.74 478.47)"><textPath xlinkHref="#path">Express</textPath></text>
        <text className="cls-7" transform="translate(36.82 515.77)"><textPath xlinkHref="#path">React</textPath></text>
        <text className="cls-7" transform="translate(36.82 550.91)"><textPath xlinkHref="#path">AWS</textPath></text>
        <text className="cls-7" transform="translate(36.82 584.23)"><textPath xlinkHref="#path">Deployment</textPath></text>
        <text className="cls-7" transform="translate(37.9 622.08)"><textPath xlinkHref="#path">PostgreSQL/MySQL</textPath></text>
        <text className="cls-7" transform="translate(35.2 705.54)"><textPath xlinkHref="#path">&gt;_</textPath></text>
    </g>
    <g id="Layer_3" data-name="Layer 3">
        <image width="1418" height="771" transform="translate(81.26) scale(0.28)" xlinkHref="/myterminalphoto.png" />
    </g>
</svg>
</div>
      <div className="text-white text-[9vmin] py-40 p-4 font-Montserrat-Alternates md:text-[3vmax] lg:mr-20 lg:w-1/2 md:relative">
        <p className="text-green-400 text-[4vmin] md:text-[2vmax]">
          👋 Hi, I am Adam!
        </p>
        <h1>
          I am a London based full stack developer. I enjoy making <a className="text-green-400">fun</a> and <a className="text-green-400">interactive</a> things with <a className="text-green-400">code</a>.
        </h1>
      </div>
    </div>
    </div>
  );
}

export { Hero };
