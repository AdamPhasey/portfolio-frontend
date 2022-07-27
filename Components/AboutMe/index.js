import Image from "next/image";
import { Container } from "postcss";
import { useEffect } from "react";
import anime from "animejs";

function AboutMe({ value }) {


//   use effect here if needed
  useEffect(() => {
let el = document.querySelector("#terminal")
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
    <container className="flex h-full w-full flex-row content-center items-center bg-[#f4f3ee] dark:bg-[#4a4e69]">
      <div id="terminal" className="hidden z-50 cursor-move sm:p-10 lg:p-24 md:flex justify-center md:h-screen md:w-1/2">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" >
    <defs>
        <style>.cls-1{"{fill:gray;}.cls-2{fill:#d90028;}.cls-3{fill:#ffc10b;}.cls-4{fill:#00cf00;}.cls-5{font-size:35px;fill:#f2f2f2;}.cls-5,.cls-6{font-family:Silom;}.cls-6{font-size:5vmin;fill:lime;{"}</style>
    </defs>
    <g id="Background">
        <rect width="1000" height="1000" />
    </g>
    <g id="Nav">
        <rect className="cls-1" width="1000" height="57" />
        <circle className="cls-2" cx="39" cy="28" r="16" />
        <circle className="cls-3" cx="87.41" cy="28" r="16" />
        <circle className="cls-4" cx="135" cy="28" r="16" />
        <circle cx="39.41" cy="28.41" r="4.92" />
        <text className="cls-5" transform="translate(301.7 44.36)">Adam Phasey’s Stack</text>
    </g>
    <path id="path">
        <animate attributeName="d" from="m0,0 h0" to="m0,0 h1100" dur="2s" begin="0s" repeatCount="0" fill="freeze"/>
    </path>
    <g id="Text">
        <text className="cls-6" transform="translate(59.4 153.18)"><textPath xlinkHref="#path">JavaScript</textPath></text>
        <text className="cls-6" transform="translate(59.49 227.87)"><textPath xlinkHref="#path">TypeScript</textPath></text>
        <text className="cls-6" transform="translate(61.49 377.87)"><textPath xlinkHref="#path">HTML &amp; CSS</textPath></text>
        <text className="cls-6" transform="translate(61.49 302.87)"><textPath xlinkHref="#path">Node.js</textPath></text>
        <text className="cls-6" transform="translate(64 447.87)"><textPath xlinkHref="#path">Python</textPath></text>
        <text className="cls-6" transform="translate(62.49 517.87)"><textPath xlinkHref="#path">Express</textPath></text>
        <text className="cls-6" transform="translate(64.49 586.87)"><textPath xlinkHref="#path">React</textPath></text>
        <text className="cls-6" transform="translate(64.49 651.87)"><textPath xlinkHref="#path">AWS</textPath></text>
        <text className="cls-6" transform="translate(64.49 713.5)"><textPath xlinkHref="#path">Deployment</textPath></text>
        <text className="cls-6" transform="translate(66.49 783.5)"><textPath xlinkHref="#path">PostgreSQL/MySQL</textPath></text>
        <text className="cls-6" transform="translate(61.49 937.87)"><textPath xlinkHref="#path">&gt;_</textPath></text>
    </g>
</svg>
</div>

      <div className="text-blue-400 text-[9vmin] py-40 p-4 font-Montserrat-Alternates md:text-[6vmin] md:w-1/2 md:relative md:p-0">
        <p className="text-green-400 text-[4vmin] md:text-[4vmin]">
          👋 Hi, I am Adam!
        </p>
        <h1>
          I used to be in law and business. Now I make <a className="text-green-400">fun</a> and <a className="text-green-400">interactive</a> things with <a className="text-green-400">code</a>.
        </h1>
      </div>
    </container>
  );
}

export { AboutMe };
