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
            thirdImage={"/innovativecode.png"}
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
            title={"2. "}
            modalTitle={"placeholder"}
            modalContent={"placeholder"}
            onClick={() => setOpen(true)}
            onClose={() => setOpen(false)}
            ButtonState={true}
          />

          <ModalFunction
            title={"3. placeholder"}
            modalTitle={"placeholder"}
            modalContent={"placeholder"}
            imgSrc={"/npm.svg"}
            onClick={() => setOpen(true)}
            onClose={() => setOpen(false)}
            ButtonState={true}
          />
          <ModalFunction
            title={"4. placeholder"}
            modalTitle={"placeholder"}
            modalContent={"placeholder"}
            imgSrc={"/npm.svg"}
            onClick={() => setOpen(true)}
            onClose={() => setOpen(false)}
            ButtonState={true}
          />
          <ModalFunction
            title={"5. placeholder"}
            modalTitle={"placeholder"}
            modalContent={"placeholder"}
            imgSrc={"/npm.svg"}
            onClick={() => setOpen(true)}
            onClose={() => setOpen(false)}
            ButtonState={true}
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
