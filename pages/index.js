import Head from "next/head";
import { Header } from "../Components/Header";
import { Hero } from "../Components/Hero";
import { Projects } from "../Components/Projects/index";
import { useState, useEffect, createContext } from "react";
import { Footer } from "../Components/Footer";
import { AboutMe } from "../Components/AboutMe";
import { ModalFunction } from "../Components/Modal";
import { Divider } from "@mui/material";
import ContactUs from "../Components/Contact/ContactUs";

export default function Home() {
  const [theme, setTheme] = useState("light");
  console.log(theme);

  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return (
    <>
      <Head>
        <title>Adams Portfolio</title>
      </Head>
      <Header setTheme={setTheme} theme={theme} />
      <main>
        <div id="home" className="flex flex-grow">
          <Hero value={theme} />
        </div>
        <div className="flex flex-col items-center">
          <Divider
            width="50%"
            variant="middle"
            textAlign="center"
            color="#fff"
          />
        </div>

        <div
          id="about-me"
          className="flex h-screen flex-col bg-[#22223b] items-center justify-evenly"
        >
          <AboutMe />
          <ModalFunction
            title={"1. I love innovating"}
            modalTitle={"Innovation is my passion"}
            modalContent={`I really enjoy getting innovative. Whether it's designing my own cabinets or finding solutions for data to meet a given schema, I find myself thriving in such environments.
            Coming from a business background has given me the experience to come up with solutions under pressure and seeing them through to completion`}
            imgSrc={"/cabinet.jpeg"}
            secondImage={"/csscode.png"}
            thirdImage={"/svgcode.png"}
            width={200}
            height={400}
            width2={200}
            height2={200}
            width3={200}
            height3={200}
            onClick={() => setOpen(true)}
            onClose={() => setOpen(false)}
            ButtonState={true}
          />
          <ModalFunction
            title={"2. Family-oriented"}
            modalTitle={"They inspire me"}
            modalContent={
              "Being a father, son, husband and brother has really shaped me to be the person I am today. I feel that being a good role model to my daughter is important to me and as such it has made me determined to excel. Whether it's camping trips or demonstrating my devotion to a craft, I really care about this aspect of my life."
            }
            onClick={() => setOpen(true)}
            onClose={() => setOpen(false)}
            width={300}
            height={200}
          />

          <ModalFunction
            title={"3. I love aviation and cars"}
            modalTitle={"It has always fascinated me"}
            modalContent={"Since the age of 5 I have been fascinated by big machines. That passion grew when I joined the Air Cadets and was fortunate enough to go flying many times. I was able to fly with many decorated pilots, including fast-jet pilots and a person who flew a Vulcan. I developed a love for aviation and cars over time and had built my own RC kit car from when I was 14."}
            imgSrc={"/gliding.jpeg"}
            onClick={() => setOpen(true)}
            onClose={() => setOpen(false)}
            width={350}
            height={200}
          />
          <ModalFunction
            title={"4. I am proactive"}
            modalTitle={"I like to make things happen"}
            modalContent={"A recurring theme in my life has been my ability to take initiative and implement goals or tasks. I enjoy being proactive and have demonstrated that passion throughout my life, whether it was signing up to the Air Cadets myself, or building a startup from scratch."}
            imgSrc={"/habveg.png"}
            onClick={() => setOpen(true)}
            onClose={() => setOpen(false)}
            width={350}
            height={300}
          />
          <ModalFunction
            title={"5. I can adapt to change"}
            modalTitle={"Change always happens"}
            modalContent={"I can adapt to change quite comfortably given my background in business. Being dynamic is something I have had to practice regularly whilst being a business owner. Under high pressure and with short notice or time to respond, I have been able to effectively deliver decisions quickly and pragmatically."}
            imgSrc={"/npm.svg"}
            onClick={() => setOpen(true)}
            onClose={() => setOpen(false)}
          />
        </div>
        <div
          id="projects"
          className="bg-[#4a4e69] flex flex-col justify-center items-center"
        >
          <Projects />
        </div>
        <div
          id="contact"
          className="bg-[#22223b] pt-12 pb-28 md:pb-10 flex flex-col items-center"
        >
          <ContactUs />
        </div>
      </main>
      <Footer />
    </>
  );
}
