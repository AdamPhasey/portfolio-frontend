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
            <style>.cls-1{"{stroke:gray;stroke-miterlimit:10;stroke-width:5px;}.cls-2{fill:gray;}.cls-3{fill:#d90028;}.cls-4{fill:#ffc10b;}.cls-5{fill:#00cf00;}.cls-6{font-size:18.92px;fill:#f2f2f2;}.cls-6,.cls-7,.cls-9{font-family:Orbitron;}.cls-7{font-size:27.03px;}.cls-7,.cls-8{fill:lime;}.cls-9{font-size:18.24px;}.cls-10{fill:#fff;}.cls-11{fill:#f90;fill-rule:evenodd;}.cls-12{fill:#0277bd;}.cls-13{fill:#039be5;}.cls-14{fill:#eee;}.cls-15{fill:#f4511e;}.cls-16{fill:#e65100;}.cls-17{fill:#ff6d00;}.cls-18{fill:#ffd600;}.cls-19{fill:#000001;}.cls-20{fill:#8bb7f0;}.cls-21{fill:#4e7ab5;}.cls-22{fill:#1976d2;}.cls-23{fill:#c63d14;{"}</style>
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
        <text className="cls-9" transform="translate(204.43 266.96) scale(1.07 1)">TOGGLE ME</text>
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
        <text className="cls-7" transform="translate(80.07 321.3)"><textPath xlinkHref="#path">JavaScript</textPath></text>
        <text className="cls-7" transform="translate(80.12 361.68)"><textPath xlinkHref="#path">TypeScript</textPath></text>
        <text className="cls-7" transform="translate(81.2 442.78)"><textPath xlinkHref="#path">HTML &amp; CSS</textPath></text>
        <text className="cls-7" transform="translate(81.2 402.23)"><textPath xlinkHref="#path">Node.js</textPath></text>
        <text className="cls-7" transform="translate(82.56 480.62)"><textPath xlinkHref="#path">React.js & Next.js</textPath></text>
        <text className="cls-7" transform="translate(81.74 518.47)"><textPath xlinkHref="#path">Express.js</textPath></text>
        <text className="cls-7" transform="translate(82.82 555.77)"><textPath xlinkHref="#path">Jest & Cypress</textPath></text>
        <text className="cls-7"  transform="translate(82.82 590.91)"><textPath xlinkHref="#path">AWS</textPath></text>
        <text className="cls-7" transform="translate(82.82 624.23)"><textPath xlinkHref="#path">Git &amp; CI/CD</textPath></text>
        <text className="cls-7" transform="translate(83.9 662.08)"><textPath xlinkHref="#path">PostgreSQL/MySQL</textPath></text>
        <text className="cls-7" transform="translate(81.2 705.54)">&gt;_</text>
        <g id="Logos">
        <path className="cls-10" d="M154.59,586.14a4,4,0,0,0,.16,1.23,6.5,6.5,0,0,0,.45,1,.57.57,0,0,1,.09.31.55.55,0,0,1-.26.42l-.89.58a.58.58,0,0,1-.78-.07,4.27,4.27,0,0,1-.51-.65c-.14-.23-.28-.5-.43-.81a5.22,5.22,0,0,1-4.12,1.9,3.9,3.9,0,0,1-2.81-1,3.85,3.85,0,0,1,.24-5.5,5.14,5.14,0,0,1,3.44-1.08,11.11,11.11,0,0,1,1.48.11c.52.07,1,.18,1.61.31v-1a3,3,0,0,0-.65-2.21,3.27,3.27,0,0,0-2.29-.64,6.77,6.77,0,0,0-1.52.18,13.2,13.2,0,0,0-1.51.47,3.59,3.59,0,0,1-.49.18.79.79,0,0,1-.23,0c-.19,0-.29-.14-.29-.43v-.67a.9.9,0,0,1,.1-.49,1.11,1.11,0,0,1,.39-.29,8.07,8.07,0,0,1,1.75-.62,8.49,8.49,0,0,1,2.17-.26,5.1,5.1,0,0,1,3.65,1.12,4.53,4.53,0,0,1,1.16,3.4v4.47Zm-5.71,2.14a4.41,4.41,0,0,0,1.44-.25,3.08,3.08,0,0,0,1.33-.88,2.15,2.15,0,0,0,.47-.88,4.73,4.73,0,0,0,.14-1.21v-.58a11.7,11.7,0,0,0-1.28-.23,9.8,9.8,0,0,0-1.31-.08,3.24,3.24,0,0,0-2.09.55,2,2,0,0,0,1.3,3.56Zm11.27,1.59a.81.81,0,0,1-.54-.14,1.11,1.11,0,0,1-.29-.54L156,578.35a2.54,2.54,0,0,1-.12-.56.31.31,0,0,1,.34-.35h1.38a.76.76,0,0,1,.54.14,1.06,1.06,0,0,1,.28.54l2.35,9.16,2.19-9.16a1,1,0,0,1,.26-.54.94.94,0,0,1,.56-.14h1.12a.82.82,0,0,1,.56.14.88.88,0,0,1,.27.54l2.21,9.27,2.42-9.27a1.29,1.29,0,0,1,.28-.54.91.91,0,0,1,.55-.14h1.3a.31.31,0,0,1,.35.34,1,1,0,0,1,0,.23,1.94,1.94,0,0,1-.09.34l-3.38,10.71a1.11,1.11,0,0,1-.29.54.94.94,0,0,1-.53.13h-1.21s-.45,0-.56-.08a1,1,0,0,1-.27-.55l-2.16-8.91-2.15,8.89a1.12,1.12,0,0,1-.27.56,2.87,2.87,0,0,1-.56.23Zm17.91.29a9.74,9.74,0,0,1-2.16-.25,7,7,0,0,1-1.61-.55,1.11,1.11,0,0,1-.43-.39.94.94,0,0,1-.08-.39v-.71c0-.29.11-.42.32-.42a.73.73,0,0,1,.25,0,3.13,3.13,0,0,1,.35.14,8.14,8.14,0,0,0,1.54.48,8.5,8.5,0,0,0,1.66.17,3.87,3.87,0,0,0,2-.46,1.5,1.5,0,0,0,.72-1.32,1.33,1.33,0,0,0-.37-1,3.41,3.41,0,0,0-1.42-.72l-2-.63a4.21,4.21,0,0,1-2.23-1.41,3.21,3.21,0,0,1-.7-2,3.05,3.05,0,0,1,.37-1.54,3.64,3.64,0,0,1,1-1.13,4.34,4.34,0,0,1,1.46-.72,6.83,6.83,0,0,1,2.7-.18c.32,0,.61.09.91.15s.54.14.79.22a2.88,2.88,0,0,1,.59.25,1.17,1.17,0,0,1,.42.34.74.74,0,0,1,.13.46v.65c0,.29-.11.44-.32.44a1.44,1.44,0,0,1-.54-.16,6.42,6.42,0,0,0-2.68-.54,3.55,3.55,0,0,0-1.86.39,1.31,1.31,0,0,0-.66,1.23,1.3,1.3,0,0,0,.42,1,4.18,4.18,0,0,0,1.54.76l2,.62a4.24,4.24,0,0,1,2.16,1.33,3.09,3.09,0,0,1,.65,1.94,3.49,3.49,0,0,1-.37,1.6,3.62,3.62,0,0,1-1,1.22,4.43,4.43,0,0,1-1.55.78A6.86,6.86,0,0,1,178.06,590.16Z" transform="translate(-117.74 -7)" />
        <path className="cls-11" d="M180.71,596.86c-4.59,3.36-11.27,5.14-17,5.14a31,31,0,0,1-20.78-7.83c-.43-.39,0-.91.48-.61A42.24,42.24,0,0,0,164.19,599,41.79,41.79,0,0,0,180,595.81C180.81,595.47,181.47,596.31,180.71,596.86Z" transform="translate(-117.74 -7)" />
        <path className="cls-11" d="M182.62,594.71c-.58-.75-3.88-.36-5.37-.18-.45.05-.52-.34-.12-.63,2.63-1.82,7-1.29,7.45-.69s-.14,4.89-2.6,6.94c-.38.32-.74.15-.57-.26C182,598.52,183.21,595.44,182.62,594.71Z" transform="translate(-117.74 -7)" />
        <path className="cls-10" d="M176.56,524.33a1.87,1.87,0,0,1-2.31-.87l-4.2-5.81-.61-.81-4.9,6.64a1.79,1.79,0,0,1-2.2.86l6.29-8.43-5.85-7.62a2,2,0,0,1,2.32.81l4.35,5.88,4.39-5.85a1.75,1.75,0,0,1,2.18-.81l-2.27,3-3.07,4a.82.82,0,0,0,0,1.21ZM147.34,516l.52-2.53a7,7,0,0,1,11.08-4c2.31,1.82,2.89,4.39,2.77,7.27h-13c-.2,5.19,3.53,8.32,8.29,6.72a5,5,0,0,0,3.15-3.5c.25-.82.66-1,1.43-.72a6.56,6.56,0,0,1-3.16,4.83,7.63,7.63,0,0,1-8.9-1.15,7.9,7.9,0,0,1-2-4.67c0-.29-.11-.56-.16-.84V516Zm1.34-.62h11.77c-.07-3.75-2.41-6.41-5.6-6.43C151.35,508.89,148.83,511.49,148.68,515.35Z" transform="translate(-117.74 -7)" />
        <path className="cls-12" d="M183.11,430H160.74l2,22.37,9.21,2.63,9.21-2.63,2-22.37Z" transform="translate(-117.74 -7)" />
        <path className="cls-13" d="M171.86,432v21l7.37-2.1L180.87,432Z" transform="translate(-117.74 -7)" />
        <path className="cls-10" d="M177.85,435.26h-6v2.63h3.23l-.2,2.64h-3v2.63h2.9l-.2,3-2.7.92v2.76l5.2-1.71.46-7.56h0Z" transform="translate(-117.74 -7)" />
        <path className="cls-14" d="M171.86,435.26v2.63H166l-.2-2.63Zm-3,5.27.13,2.63h2.89v-2.63Zm.26,3.94h-2.63l.19,3.62,5.2,1.71V447l-2.7-.92Z" transform="translate(-117.74 -7)" />
        <path className="cls-15" d="M177.31,623.38,163.6,609.67A2.3,2.3,0,0,0,162,609h0a2.3,2.3,0,0,0-1.6.67l-2.94,3,3.45,3.44a2.32,2.32,0,0,1,1.25-.24,2.49,2.49,0,0,1,2.36,2.35,2.44,2.44,0,0,1-.25,1.26l3.36,3.36a2.35,2.35,0,0,1,.68-.22,2.56,2.56,0,0,1,2.94,2.5,2.48,2.48,0,0,1-2.52,2.52,2.56,2.56,0,0,1-2.49-3,2.29,2.29,0,0,1,.22-.67l-3.37-3.36c-.08,0-.16.08-.25.08v8.75a2.45,2.45,0,0,1,1.68,2.43,2.55,2.55,0,0,1-2.58,2.44,2.47,2.47,0,0,1-2.46-2.52,2.44,2.44,0,0,1,1.68-2.35v-8.83a2.46,2.46,0,0,1-1.68-2.36,2.28,2.28,0,0,1,.25-1.09l-3.45-3.45-9.59,9.67a2.25,2.25,0,0,0,0,3.2l13.71,13.71h0a2.25,2.25,0,0,0,3.2,0l13.71-13.71a2.25,2.25,0,0,0,0-3.2Z" transform="translate(-117.74 -7)" />
        <path className="cls-16" d="M166.42,430H144.05l2,22.37,9.21,2.63,9.22-2.63,2-22.37Z" transform="translate(-117.74 -7)" />
        <path className="cls-17" d="M155.14,432v21l7.36-2.1L164.15,432Z" transform="translate(-117.74 -7)" />
        <path className="cls-10" d="M155.14,443.16v-2.63h5.65l-.46,7.56-5.19,1.71V447l2.69-.92.2-3Zm5.85-5.27.2-2.63h-6.05v2.63Z" transform="translate(-117.74 -7)" />
        <path className="cls-14" d="M155.14,447v2.76l-5.2-1.71-.27-3.62h2.64l.13,1.65Zm-3.23-9.15h3.23v-2.63h-6l.46,7.9h5.53v-2.63h-3Z" transform="translate(-117.74 -7)" />
        <path className="cls-18" d="M144,375V347h28v28Z" transform="translate(-117.74 -7)" />
        <path className="cls-19" d="M162.23,367.94c.54.87,1.13,1.71,2.37,1.71,1,0,1.58-.52,1.58-1.24s-.56-1.16-1.71-1.65l-.63-.27c-1.81-.77-3-1.73-3-3.77,0-1.87,1.43-3.3,3.68-3.3a3.72,3.72,0,0,1,3.57,2l-2,1.25a1.7,1.7,0,0,0-1.61-1.07,1.1,1.1,0,0,0-1.21,1.07c0,.75.47,1.06,1.55,1.52l.63.27c2.13.91,3.33,1.84,3.33,3.92,0,2.25-1.77,3.49-4.16,3.49a4.6,4.6,0,0,1-4.39-2.62Zm-9.09.08a2.22,2.22,0,0,0,1.94,1.25c.87,0,1.36-.33,1.36-1.59v-8.24h2.73v8.64c0,2.62-1.6,3.81-3.93,3.81a4.79,4.79,0,0,1-4.24-2.62Z" transform="translate(-117.74 -7)" />
        <path className="cls-10" d="M158,386a2.62,2.62,0,0,0-1.26.32l-11.94,6.9a2.54,2.54,0,0,0-1.25,2.18v12.35a2.51,2.51,0,0,0,1.27,2.19l3.18,1.8a5.27,5.27,0,0,0,2.79.75c2.29,0,3.6-1.36,3.6-3.72V395.85a.34.34,0,0,0-.34-.34h-1.31a.34.34,0,0,0-.36.35v12.89c0,1.06-1.11,2.1-2.9,1.22l-3.33-1.89a.36.36,0,0,1-.19-.33V395.39a.37.37,0,0,1,.19-.33L158,388.2a.37.37,0,0,1,.38,0l11.87,6.86a.38.38,0,0,1,.2.32v12.53s-.07.27-.17.33l-12,6.91a.42.42,0,0,1-.38,0l-3.07-1.82a.28.28,0,0,0-.29,0,8.16,8.16,0,0,1-1.81.82c-.19.06-.49.18.11.52l4,2.36a2.5,2.5,0,0,0,2.52,0l12-6.9c.77-.45,1.1-2.19,1.1-2.19v-12.5a2.53,2.53,0,0,0-1.25-2.18l-12-6.91A2.62,2.62,0,0,0,158,386Zm3.36,9.66c-3.49,0-5.57,1.48-5.57,3.94,0,2.68,2.07,3.41,5.42,3.75,4,.39,4.31,1,4.31,1.77,0,1.36-1.09,1.94-3.67,1.94-3.25,0-4-.82-4.19-2.43a.34.34,0,0,0-.34-.28h-1.6a.34.34,0,0,0-.34.34c0,2.06,1.12,4.51,6.47,4.51,3.87,0,6.09-1.52,6.09-4.19s-1.79-3.34-5.54-3.84-4.19-.76-4.19-1.64.34-1.72,3.15-1.72c2.5,0,3.44.55,3.82,2.23a.36.36,0,0,0,.34.29h1.59a.37.37,0,0,0,.26-.12.38.38,0,0,0,.09-.28C167.2,397,165.27,395.66,161.35,395.66Z" transform="translate(-117.74 -7)" />
        <path className="cls-10" d="M174,668a1.56,1.56,0,0,0-1.63-1.19,3.75,3.75,0,0,0-.69.08,7.88,7.88,0,0,1-1.22.16c2.75-4.66,4.53-11.14,2.77-13.39a8.92,8.92,0,0,0-7.13-3.4h-.15a9.82,9.82,0,0,0-1.91.22l-2.38.51c-.33,0-.66-.06-1-.07h-.14a6.44,6.44,0,0,0-2.87.64l-.83-.32a13,13,0,0,0-4.56-1h-.28a5.77,5.77,0,0,0-4.16,1.83c-1.3,1.42-1.9,3.51-1.76,6.19,0,.14,1.63,13.86,6.23,13.86h.06a2.7,2.7,0,0,0,1.7-.72,3.08,3.08,0,0,0,1.42.56,7.59,7.59,0,0,0,1.6.18,5.2,5.2,0,0,0,2.28-.49c0,.59,0,1.33,0,2.27V674a8.74,8.74,0,0,0,.47,2.45c.7,1.89,1.9,2.93,3.4,2.93h.19a4.75,4.75,0,0,0,3.32-1.84,5.9,5.9,0,0,0,1.23-3.33v-2.81H168l.29,0h.31a8,8,0,0,0,3.07-.65C172.46,670.39,174.28,669.38,174,668Z" transform="translate(-117.74 -7)" />
        <path className="cls-12" d="M166.6,670.76c0-.14,0-.25,0-.37s0-.29,0-.29l0,0c.1-1.77.58-2.45,1.11-2.84l-.24-.32c-.22-.29-.49-.65-.79-1.11l0-.1c-.05-.11-.16-.3-.29-.54-.79-1.42-2.42-4.38-1.3-6.24a3.27,3.27,0,0,1,2.73-1.4,7.82,7.82,0,0,0-7.17-5.33h0c-4-.07-5.27,3.54-5.7,5.7a4.91,4.91,0,0,1,1.87-.4h0a2.7,2.7,0,0,1,2.85,2.21,12.89,12.89,0,0,1,.32,2.73,8.78,8.78,0,0,1-.69,3.55l-.1.27c-.08.22-.16.43-.25.62s-.15.37-.2.53a3.57,3.57,0,0,1,.73.25l.1,0a.19.19,0,0,1,.09,0,2,2,0,0,1,1,1.46c0,.33,0,2.56,0,4.51a7.7,7.7,0,0,0,.39,2.07c.27.73.94,2.13,2.24,2.05a3.36,3.36,0,0,0,2.34-1.33,4.67,4.67,0,0,0,.93-2.6v-3.15Z" transform="translate(-117.74 -7)" />
        <path className="cls-12" d="M154.75,667.38a4.91,4.91,0,0,1-1.39-4,15.2,15.2,0,0,0,0-3.38q0-.36,0-.51v0h0c.08-2,.86-5.17,3-7a11.29,11.29,0,0,0-4.3-.89c-2.48.09-4.89,1.8-4.64,6.63.09,1.81,2.13,12.66,4.93,12.6a1.8,1.8,0,0,0,1.24-.78c.67-.81,1.33-1.55,1.8-2.06A6.09,6.09,0,0,1,154.75,667.38ZM169.28,658a1.17,1.17,0,0,1,0,.27,11.57,11.57,0,0,1-.12,1.78c0,.42-.1.85-.11,1.29a8.35,8.35,0,0,0,.11,1.3,5,5,0,0,1-.51,3.6c.15.2.28.38.39.56,3.06-5,4.29-10.85,3.11-12.35a7.55,7.55,0,0,0-6.19-2.9,8.6,8.6,0,0,0-1.64.19A9.47,9.47,0,0,1,169.28,658Zm2.64,10.17c-1.77.37-2.62.17-3-.08a1.06,1.06,0,0,1-.2.12c-.24.15-.63.39-.73,1.85l.16,0,.29,0a6.67,6.67,0,0,0,2.7-.51C172.56,668.89,173.35,667.85,171.92,668.14Zm-12.58,1.37A.71.71,0,0,0,159,669l-.07,0a2.06,2.06,0,0,0-.95-.23h-.35a4.39,4.39,0,0,1-1.87.65c-2,.51-.81,1.1-.05,1.19a4.39,4.39,0,0,0,3.63-.53C159.35,669.79,159.34,669.59,159.34,669.51Z" transform="translate(-117.74 -7)" />
        <path className="cls-12" d="M158.45,660.47a1,1,0,0,1-.84.32,1.26,1.26,0,0,1-.94-1h0c0-.25.5-.38,1.05-.29a2.11,2.11,0,0,1,.5.15,1.34,1.34,0,0,0-1.18-.78,3.18,3.18,0,0,0-2.36.73,1.87,1.87,0,0,1,0,.27,16.07,16.07,0,0,1,0,3.67,3.62,3.62,0,0,0,1,2.92,3.11,3.11,0,0,0,1.67.95,5.34,5.34,0,0,1,.34-.94l.23-.57.1-.28a7.59,7.59,0,0,0,.61-3.12A11.2,11.2,0,0,0,158.45,660.47Zm9.39,2.32a8.22,8.22,0,0,1-.12-1.52c0-.49.07-1,.12-1.41s.07-.69.09-1a2.12,2.12,0,0,0-1.69.74,1.82,1.82,0,0,1,.37-.09c.6-.07,1,.1,1.08.43a.74.74,0,0,1-.26.55,1.15,1.15,0,0,1-.65.32h-.13a1.12,1.12,0,0,1-.63-.2,11.08,11.08,0,0,0,1.52,3.92c.1.18.18.33.24.46A4.35,4.35,0,0,0,167.84,662.79Z" transform="translate(-117.74 -7)" />
        <path className="cls-20" d="M161.62,478a2.41,2.41,0,1,1-2.4-2.4A2.4,2.4,0,0,1,161.62,478Z" transform="translate(-117.74 -7)" />
        <path className="cls-21" d="M159.22,480.56A2.59,2.59,0,1,1,161.8,478,2.59,2.59,0,0,1,159.22,480.56Zm0-4.81a2.22,2.22,0,1,0,2.21,2.22A2.22,2.22,0,0,0,159.22,475.75Z" transform="translate(-117.74 -7)" />
        <path className="cls-20" d="M153.48,491.09a3.37,3.37,0,0,1-1.71-.43,3.74,3.74,0,0,1-1.73-2.44,11.23,11.23,0,0,1,.12-5.13c-3.52-1.22-5.54-3.07-5.54-5.12s2-3.9,5.54-5.11a11.39,11.39,0,0,1-.13-5.13,3.78,3.78,0,0,1,1.74-2.45,3.47,3.47,0,0,1,1.71-.43c1.62,0,3.65,1,5.74,2.85,2.08-1.84,4.12-2.85,5.74-2.85a3.5,3.5,0,0,1,1.71.43,3.8,3.8,0,0,1,1.73,2.45,11.39,11.39,0,0,1-.13,5.13c3.53,1.21,5.55,3.07,5.55,5.11s-2,3.91-5.55,5.12a11.39,11.39,0,0,1,.13,5.13,3.8,3.8,0,0,1-1.73,2.44,3.5,3.5,0,0,1-1.71.43c-1.63,0-3.66-1-5.74-2.84C157.13,490.08,155.1,491.09,153.48,491.09Zm-1.9-7.57a9.65,9.65,0,0,0-.12,4.31,2.39,2.39,0,0,0,1,1.55,2,2,0,0,0,1,.23c1.25,0,2.9-.84,4.66-2.37a29.42,29.42,0,0,1-2.56-3A27.89,27.89,0,0,1,151.58,483.52Zm8.71,3.71c1.76,1.54,3.41,2.38,4.67,2.38a2,2,0,0,0,1-.24,2.36,2.36,0,0,0,1-1.54,9.65,9.65,0,0,0-.12-4.31,27.89,27.89,0,0,1-4,.73A28.23,28.23,0,0,1,160.29,487.23Zm-2.71-2.83a20.87,20.87,0,0,0,1.64,1.82,22.54,22.54,0,0,0,1.63-1.82c-.55,0-1.1,0-1.63,0S158.13,484.43,157.58,484.4Zm-1.19-1.56c.92.08,1.87.12,2.83.12s1.9,0,2.82-.12c.55-.77,1.08-1.58,1.56-2.4s.91-1.63,1.31-2.47c-.4-.84-.84-1.67-1.31-2.47s-1-1.63-1.56-2.4c-.92-.08-1.87-.12-2.82-.12s-1.91,0-2.83.12c-.55.77-1.07,1.58-1.56,2.4s-.91,1.63-1.31,2.47c.4.84.84,1.67,1.31,2.47S155.84,482.07,156.39,482.84Zm9.29-3.1c-.26.49-.53,1-.81,1.45s-.57.95-.88,1.42a24.45,24.45,0,0,0,2.5-.52A22.65,22.65,0,0,0,165.68,479.74Zm-13.74,2.35a24.45,24.45,0,0,0,2.5.52c-.31-.47-.61-.95-.88-1.42s-.55-.95-.81-1.45C152.43,480.54,152.16,481.33,151.94,482.09Zm14.6-4.12a26.08,26.08,0,0,1,1.37,3.69c2.74-1,4.43-2.37,4.43-3.69s-1.69-2.72-4.43-3.69A26.08,26.08,0,0,1,166.54,478Zm-16-3.69c-2.73,1-4.42,2.37-4.42,3.69s1.69,2.73,4.42,3.69a28.79,28.79,0,0,1,1.37-3.69A28.79,28.79,0,0,1,150.52,474.28Zm1.42-.43c.22.76.49,1.55.81,2.35.26-.49.53-1,.81-1.45s.57-.95.88-1.42A24.45,24.45,0,0,0,151.94,473.85Zm12.05-.52c.31.48.61.95.88,1.42s.55,1,.81,1.45c.32-.8.6-1.59.82-2.35A25.24,25.24,0,0,0,164,473.33Zm-10.51-7a1.9,1.9,0,0,0-1,.24,2.34,2.34,0,0,0-1,1.54,9.7,9.7,0,0,0,.12,4.32,26.57,26.57,0,0,1,4-.73,28.37,28.37,0,0,1,2.56-3C156.38,467.17,154.73,466.33,153.48,466.33Zm9.37,5.37a27.91,27.91,0,0,1,4,.72,9.65,9.65,0,0,0,.12-4.31,2.36,2.36,0,0,0-1-1.54,2,2,0,0,0-1-.24c-1.26,0-2.91.84-4.67,2.38A27.39,27.39,0,0,1,162.85,471.7Zm-3.63-.2c.53,0,1.08,0,1.63,0-.53-.65-1.08-1.26-1.63-1.82-.56.56-1.1,1.17-1.64,1.82C158.13,471.52,158.68,471.5,159.22,471.5Z" transform="translate(-117.74 -7)" />
        <path className="cls-21" d="M153.48,465.05c1.66,0,3.69,1.08,5.74,2.91,2-1.83,4.08-2.9,5.74-2.9a3.24,3.24,0,0,1,1.62.4,3.62,3.62,0,0,1,1.64,2.33,10.71,10.71,0,0,1-.16,5.21c3.41,1.13,5.57,2.93,5.57,5s-2.16,3.85-5.57,5a10.26,10.26,0,0,1,.16,5.21,3.62,3.62,0,0,1-1.64,2.33,2.84,2.84,0,0,1-1.51.4h-.16c-1.66,0-3.65-1.07-5.69-2.9-2.05,1.83-4.08,2.91-5.74,2.91a3.22,3.22,0,0,1-1.62-.41,3.63,3.63,0,0,1-1.65-2.33,9.83,9.83,0,0,1,.16-5.21c-3.4-1.14-5.57-2.93-5.57-5s2.17-3.85,5.57-5a15.54,15.54,0,0,1-.42-3.14,8.19,8.19,0,0,1,.26-2.07,3.63,3.63,0,0,1,1.65-2.33,3.22,3.22,0,0,1,1.62-.41m-2,7.6a26.91,26.91,0,0,1,4.24-.78,29.18,29.18,0,0,1,2.73-3.17c-1.8-1.61-3.55-2.56-4.93-2.56a2.11,2.11,0,0,0-1.08.27,2.59,2.59,0,0,0-1.12,1.65,10.24,10.24,0,0,0,.16,4.59m15.55,0a10.1,10.1,0,0,0,.16-4.59,2.55,2.55,0,0,0-1.12-1.65,2.1,2.1,0,0,0-1.07-.26c-1.39,0-3.14.94-4.94,2.55a28.12,28.12,0,0,1,2.73,3.17,26.7,26.7,0,0,1,4.24.78m-9.81-.9c.66,0,1.33-.07,2-.07s1.39,0,2.06.07a27.53,27.53,0,0,0-2-2.29,24.35,24.35,0,0,0-2,2.29m2,11.4c1,0,2,0,2.92-.13.56-.78,1.11-1.61,1.62-2.48s1-1.71,1.36-2.57c-.41-.85-.86-1.71-1.36-2.56s-1-1.7-1.62-2.49c-.93-.08-1.9-.12-2.92-.12s-2,0-2.93.12c-.56.79-1.11,1.62-1.62,2.49s-.95,1.71-1.35,2.56c.4.86.85,1.72,1.35,2.57s1.06,1.7,1.62,2.48c.93.08,1.91.13,2.93.13m6.48-6.5a25.05,25.05,0,0,0,1-2.93,24.71,24.71,0,0,0-3.11-.63c.38.56.75,1.15,1.1,1.75s.69,1.2,1,1.81m-13,0c.31-.6.63-1.21,1-1.81s.72-1.19,1.1-1.75a24.71,24.71,0,0,0-3.11.63,27,27,0,0,0,1,2.93m15.06,5.25c3-1,4.73-2.5,4.73-3.93s-1.75-2.91-4.73-3.92a28.66,28.66,0,0,1-1.45,3.92,28.77,28.77,0,0,1,1.45,3.93m-17.14,0a27.41,27.41,0,0,1,1.44-3.93,27.3,27.3,0,0,1-1.44-3.92c-3,1-4.74,2.49-4.74,3.92s1.75,2.92,4.74,3.93m13,1a23.05,23.05,0,0,0,3.11-.63,24.3,24.3,0,0,0-1-2.92q-.45.9-1,1.8c-.35.6-.72,1.19-1.1,1.75m-8.79,0c-.38-.56-.75-1.15-1.1-1.75s-.68-1.2-1-1.8a26.18,26.18,0,0,0-1,2.92,24.71,24.71,0,0,0,3.11.63m-1.34,6.95c1.38,0,3.13-.95,4.93-2.56a27.27,27.27,0,0,1-2.73-3.17,26.91,26.91,0,0,1-4.24-.78,10.08,10.08,0,0,0-.15,4.59,2.54,2.54,0,0,0,1.12,1.66,2.15,2.15,0,0,0,1.07.26m11.48,0h0a2.1,2.1,0,0,0,1.07-.27,2.55,2.55,0,0,0,1.12-1.65,10.24,10.24,0,0,0-.16-4.59,26.7,26.7,0,0,1-4.24.78,27.27,27.27,0,0,1-2.73,3.17c1.8,1.61,3.55,2.56,4.94,2.56m-5.74-3.31a29.44,29.44,0,0,0,2-2.3c-.67,0-1.32.13-2,.13s-1.41-.09-2.08-.13a24.72,24.72,0,0,0,2.05,2.3m-5.87-21.8a3.1,3.1,0,0,0-1.67.42,4,4,0,0,0-1.82,2.56,11.27,11.27,0,0,0,.08,5.06c-3.5,1.24-5.51,3.14-5.51,5.23s2,4,5.51,5.24a11.27,11.27,0,0,0-.08,5.06,4,4,0,0,0,1.82,2.56,3.72,3.72,0,0,0,1.83.43c1.66,0,3.61-.94,5.71-2.76,2.1,1.82,4.08,2.78,5.74,2.78a3.62,3.62,0,0,0,1.8-.46,4,4,0,0,0,1.82-2.55,11.44,11.44,0,0,0-.09-5.06C172,482,174,480.06,174,478s-2-4-5.51-5.23a11.44,11.44,0,0,0,.09-5.06,4,4,0,0,0-1.82-2.56,3.62,3.62,0,0,0-1.8-.45c-1.66,0-3.64,1-5.74,2.78-2.1-1.82-4.09-2.76-5.75-2.76Zm-1.63,7.51a13.62,13.62,0,0,1-.29-2.37,6,6,0,0,1,.21-1.67,2.21,2.21,0,0,1,1-1.43,1.71,1.71,0,0,1,.89-.24c1.18,0,2.72.8,4.39,2.23a29.18,29.18,0,0,0-2.39,2.8,28.23,28.23,0,0,0-3.76.68Zm8.84-3.48c1.67-1.42,3.22-2.2,4.4-2.2a1.8,1.8,0,0,1,.89.21,2.2,2.2,0,0,1,.94,1.43,8.17,8.17,0,0,1-.08,4,27.94,27.94,0,0,0-3.76-.68,29.18,29.18,0,0,0-2.39-2.8ZM158,471.34c.4-.48.81-.93,1.23-1.36.41.43.82.88,1.23,1.36l-1.23,0-1.23,0Zm-1.5,1.94c.89-.08,1.81-.13,2.73-.13s1.83.05,2.72.13c.53.74,1,1.52,1.5,2.31s.88,1.57,1.27,2.38c-.39.81-.82,1.61-1.27,2.38s-1,1.57-1.5,2.31c-.89.08-1.8.18-2.72.18s-1.84-.1-2.73-.18c-.53-.74-1-1.52-1.5-2.31s-.88-1.57-1.26-2.38c.38-.81.81-1.61,1.26-2.38s1-1.57,1.5-2.31Zm9.17,2.48-.63-1.1q-.32-.54-.66-1.08c.66.11,1.29.25,1.89.4-.17.58-.37,1.18-.6,1.78ZM152.17,474c.6-.15,1.23-.29,1.89-.4q-.34.54-.66,1.08c-.21.36-.42.73-.62,1.1-.24-.6-.44-1.2-.61-1.78Zm14.57,4a26.11,26.11,0,0,0,1.29-3.45c2.55.94,4.12,2.24,4.12,3.45s-1.57,2.52-4.12,3.45a26.65,26.65,0,0,0-1.29-3.45Zm-16.34,3.45c-2.55-.93-4.12-2.24-4.12-3.45s1.57-2.51,4.12-3.45a27.6,27.6,0,0,0,1.29,3.45,28.2,28.2,0,0,0-1.29,3.45Zm14,.94c.23-.36.45-.72.66-1.07l.63-1.11c.23.61.43,1.2.6,1.78-.6.15-1.23.29-1.89.4Zm-12.2-.4c.17-.58.37-1.17.61-1.78.2.38.41.75.62,1.11s.43.71.66,1.07c-.66-.11-1.29-.25-1.89-.4Zm1.31,7.47a1.8,1.8,0,0,1-.89-.21,2.24,2.24,0,0,1-1-1.43,8.59,8.59,0,0,1,.08-4.05,26.71,26.71,0,0,0,3.76.68,29.18,29.18,0,0,0,2.39,2.8c-1.67,1.43-3.22,2.21-4.39,2.21Zm9.5-5a28.25,28.25,0,0,0,3.76-.67,7.19,7.19,0,0,1,.08,4,2.21,2.21,0,0,1-.94,1.42,1.82,1.82,0,0,1-.9.22v0c-1.17,0-2.72-.78-4.39-2.21a29.18,29.18,0,0,0,2.39-2.8ZM159.22,486c-.42-.42-.83-.88-1.23-1.36.41,0,.82,0,1.23,0s.81,0,1.23,0c-.41.48-.82.94-1.23,1.36Z" transform="translate(-117.74 -7)" />
        <rect className="cls-22" x="26.26" y="300" width="28" height="28" />
        <polygon className="cls-10" points="42.98 312.06 32.48 312.06 32.48 314.78 36.37 314.78 36.37 326.06 39.48 326.06 39.48 314.78 42.98 314.78 42.98 312.06" />
        <path className="cls-10" d="M170,322.46a6,6,0,0,0-3-.93c-1.57,0-2.14.75-2.14,1.55,0,2.06,5.74,1.85,5.74,6,0,6.38-8.75,3.55-8.75,3.55v-3.06a6.86,6.86,0,0,0,3.68,1.26c2,0,1.93-1.31,1.93-1.49,0-1.91-5.69-1.91-5.69-6.13,0-5.74,8.29-3.48,8.29-3.48Z" transform="translate(-117.74 -7)" />
        <path className="cls-23" d="M171.55,551.25a2.58,2.58,0,0,0-2.58-2.59l-.27,0,3.55-10.47H157.17l3.54,10.46h-.15a2.59,2.59,0,0,0-.79,5.05,11.18,11.18,0,0,1-2,2.55,10.27,10.27,0,0,1-3.62,2.25,3.29,3.29,0,0,1-1.65-4.19l.23-.54a2.58,2.58,0,1,0-2.07-.4,19.77,19.77,0,0,0-1.87,4.74c-.36,2.12,0,4.37,1.82,5.63,4.27,3,8.89-1.83,13.77-3,1.77-.44,3.71-.37,5.27-1.27a4.42,4.42,0,0,0,2.16-3.06,4.61,4.61,0,0,0-.83-3.49,2.53,2.53,0,0,0,.6-1.65Zm-8.41,0h0a2.57,2.57,0,0,0-1.25-2.21l2.82-5.7,2.83,5.76a2.56,2.56,0,0,0-1.15,2.15h-3.25Z" transform="translate(-117.74 -7)" />
        <path className="cls-10" d="M172.18,551.29a3.22,3.22,0,0,0-2.62-3.16l3.57-10.5H156.29l3.57,10.52a3.21,3.21,0,0,0-1,5.87,11.57,11.57,0,0,1-1.55,1.83,10,10,0,0,1-3.13,2,2.63,2.63,0,0,1-1.13-3.25l0-.09.08-.18a3.21,3.21,0,1,0-4.27-3,3.16,3.16,0,0,0,1,2.28c-.11.23-.22.47-.34.7a14.15,14.15,0,0,0-1.39,3.77c-.46,2.78.29,5,2.1,6.25a5.54,5.54,0,0,0,3.33,1.06c2.11,0,4.25-1.06,6.34-2.1a24,24,0,0,1,4.6-1.9c.57-.14,1.16-.22,1.79-.31a9.83,9.83,0,0,0,3.64-1,5.06,5.06,0,0,0,2.47-3.5,5.21,5.21,0,0,0-.69-3.58,3.18,3.18,0,0,0,.47-1.67Zm-1.26,0a1.95,1.95,0,1,1-1.95-1.95,1.95,1.95,0,0,1,1.95,1.95Zm.45-12.37-3.15,9.28a3,3,0,0,0-.4.12l-3.1-6.34-3.12,6.3-.42-.11-3.13-9.25Zm-10.81,10.42a2,2,0,1,1-2,1.95,2,2,0,0,1,2-1.95Zm-8.45,0a1.95,1.95,0,1,1-2,1.95,1.95,1.95,0,0,1,2-1.95Zm19,7a3.79,3.79,0,0,1-1.86,2.62,8.88,8.88,0,0,1-3.19.86c-.63.09-1.28.19-1.91.34a24.28,24.28,0,0,0-4.86,2c-3.14,1.56-5.84,2.9-8.4,1.13-1.87-1.3-1.78-3.69-1.56-5a12.79,12.79,0,0,1,1.27-3.42l.27-.56a2.89,2.89,0,0,0,.83.21,3.94,3.94,0,0,0,2.08,4.62l.25.12.25-.09a10.83,10.83,0,0,0,3.84-2.38,12.1,12.1,0,0,0,1.9-2.3,3.91,3.91,0,0,0,.49,0,3.21,3.21,0,0,0,2.13-5.61l2-4.08,2,4.16a3.21,3.21,0,0,0,4.05,5,4,4,0,0,1,.36,2.4Z" transform="translate(-117.74 -7)" />
    </g>
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
                href="https://drive.google.com/file/d/1yFzYFCcELCNPJuZ8wlebkEvb3Y_6F50l/view?usp=sharing"
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
