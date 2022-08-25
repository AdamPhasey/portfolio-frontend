import Image from "next/image";
import { Container } from "postcss";
import { useEffect, useRef } from "react";
import { Button } from "@mui/material";
import { useState } from 'react';



function Hero({ value }) {
  
  const toggle = { showGoal: false, showSkills: true };

  const ref = useRef(null);

  useEffect(() => {
    let el = ref.current;
    let xPos = 0;
    let yPos = 0;
    if (el.querySelector("header"))
      el.querySelector("header").addEventListener("mousedown", dragMouseDown);
    else el.addEventListener("mousedown", dragMouseDown);

    function dragMouseDown(event) {
      event.preventDefault();
      document.addEventListener("mouseup", closeDragElement);
      document.addEventListener("mousemove", elementDrag);
    }
    function elementDrag(event) {
      event.preventDefault();
      xPos += event.movementX;
      yPos += event.movementY;
      el.style.transform = `translate(${xPos}px, ${yPos}px)`;
    }
    function closeDragElement() {
      document.removeEventListener("mouseup", closeDragElement);
      document.removeEventListener("mousemove", elementDrag);
    }
  }, []);

  const [show, setShow] = useState(toggle);
  function toggleClick() {
    const copy = {
      ...show,
      showGoal: !show.showGoal,
      showSkills: !show.showSkills,
    };
    setShow(copy);
  }
  

  return (
    <div className="flex flex-col content-center items-center bg-[#4a4e69] dark:bg-[#000]">
      <div className="flex text-center h-full w-full flex-row md:flex-col lg:flex-row content-center items-center bg-[#4a4e69] dark:bg-[#000]">
        <div
          ref={ref}
          className="hidden z-50 cursor-move md:flex md:justify-center md:h-full md:w-1/2 md:pt-4 lg:flex lg:justify-center lg:h-screen lg:w-1/2 lg:p-20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 542.61 740">
            <defs>
            <style>.cls-1{"{stroke:gray;stroke-miterlimit:10;stroke-width:5px;}.cls-2{fill:gray;}.cls-3{fill:#d90028;}.cls-4{fill:#ffc10b;}.cls-5{fill:#00cf00;}.cls-6{font-size:18.92px;fill:#f2f2f2;}.cls-6,.cls-7,.cls-9{font-family:Silom;}.cls-7{font-size:27.03px;}.cls-7,.cls-8{fill:lime;}.cls-9{font-size:18.24px;{"}</style>
            </defs>
            <g id="Layer_1" data-name="Layer 1">
              <rect
                className="cls-1"
                x="2.5"
                y="200.11"
                width="537.39"
                height="537.39"
              />
              <rect
                className="cls-2"
                x="1.96"
                y="198.48"
                width="540.65"
                height="30.82"
              />
              <circle className="cls-3" cx="23.04" cy="213.62" r="8.65" />
              <circle className="cls-4" cx="49.22" cy="213.62" r="8.65" />
              <circle className="cls-5" cx="74.94" cy="213.62" r="8.65" />
              <circle cx="23.26" cy="213.84" r="2.66" />
              <text className="cls-6" transform="translate(165.07 222.46)">
                Adam Phasey’s Stack
              </text>
            </g>

            <g id="Text" className="font-Orbitron">
            <g id="Btn" onClick={toggleClick} className="cursor-pointer">
        <rect className="cls-8" x="193.26" y="243" width="155" height="34" />
        <text className="cls-9" transform="translate(218.43 266.96) scale(1.07 1)">TOGGLE ME</text>
    </g>
              {show.showSkills ? (
<>

<path id="path">
              <animate
                attributeName="d"
                from="m0,0 h0"
                to="m0,0 h1100"
                dur="2s"
                begin="0.5s"
                repeatCount="0"
                fill="freeze"
              />
            </path>
<g id="Text">
        <text className="cls-7" transform="translate(34.07 321.3)"><textPath xlinkHref="#path">JavaScript</textPath></text>
        <text className="cls-7" transform="translate(34.12 361.68)"><textPath xlinkHref="#path">TypeScript</textPath></text>
        <text className="cls-7" transform="translate(35.2 442.78)"><textPath xlinkHref="#path">HTML &amp; CSS</textPath></text>
        <text className="cls-7" transform="translate(35.2 402.23)"><textPath xlinkHref="#path">Node.js</textPath></text>
        <text className="cls-7" transform="translate(36.56 480.62)"><textPath xlinkHref="#path">React.js & Next.js</textPath></text>
        <text className="cls-7" transform="translate(35.74 518.47)"><textPath xlinkHref="#path">Express.js</textPath></text>
        <text className="cls-7" transform="translate(36.82 555.77)"><textPath xlinkHref="#path">Jest & Cypress</textPath></text>
        <text className="cls-7" transform="translate(36.82 590.91)"><textPath xlinkHref="#path">AWS</textPath></text>
        <text className="cls-7" transform="translate(36.82 624.23)"><textPath xlinkHref="#path">CI/CD</textPath></text>
        <text className="cls-7" transform="translate(37.9 662.08)"><textPath xlinkHref="#path"><textPath xlinkHref="#path">&gt;_</textPath></textPath></text>
        <text className="cls-7" transform="translate(37.9 662.08)"><textPath xlinkHref="#path">PostgreSQL/MySQL</textPath></text>
        <text className="cls-7" transform="translate(35.2 705.54)">&gt;_</text>
    </g>
              </>

            ) : (
              <>

            <path id="path">
              <animate
                attributeName="d"
                from="m0,0 h0"
                to="m0,0 h1100"
                dur="2s"
                begin="0.5s"
                repeatCount="0"
                fill="freeze"
              />
            </path>
        <g id="Text">
        <text className="cls-7" transform="translate(34.07 321.3)"><textPath xlinkHref="#path">Agile</textPath></text>
        <text className="cls-7" transform="translate(34.12 361.68)">Scrum</text>
        <text className="cls-7" transform="translate(35.2 442.78)">Analytical</text>
        <text className="cls-7" transform="translate(35.2 402.23)">Team Player</text>
        <text className="cls-7" transform="translate(36.56 480.62)">Innovative</text>
        <text className="cls-7" transform="translate(35.74 518.47)">Disciplined</text>
        <text className="cls-7" transform="translate(36.82 555.77)">Determined</text>
        <text className="cls-7" transform="translate(36.82 590.91)">Friendly</text>
        <text className="cls-7" transform="translate(36.82 624.23)">Precise</text>
        <text className="cls-7" transform="translate(37.9 662.08)">Problem Solving</text>
        <text className="cls-7" transform="translate(35.2 705.54)">&gt;_</text>
    </g>
</>

              )}





             
            </g>
            <g id="Layer_3" data-name="Layer 3">
              <image
                width="1418"
                height="771"
                transform="translate(81.26) scale(0.28)"
                xlinkHref="/myterminalphoto.png"
              />
            </g>
          </svg>
        </div>

        <div className="text-white text-[9vmin] py-40 p-4 font-Montserrat-Alternates md:text-[3vmax] lg:mr-20 lg:w-1/2 md:relative">
          <div className="text-white text-xl mb-10 md:hidden">
            <Button className="bg-blue-400" variant="contained">
              <a
                href="https://drive.google.com/file/d/1hXqO6ooaTS8FRyfMeusjFzYVpH8YLLuj/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                MY CV
              </a>
            </Button>
          </div>
          <p className="text-green-400 text-[4vmin] md:text-[2vmax]">
            👋 Hi, I am Adam!
          </p>
          <h1>
            I am a London based full-stack developer. I enjoy making{" "}
            <a className="text-green-400">fun</a> and{" "}
            <a className="text-green-400">interactive</a> things with{" "}
            <a className="text-green-400">code</a>.
          </h1>
        </div>
      </div>
    </div>
  );
}

export { Hero };
