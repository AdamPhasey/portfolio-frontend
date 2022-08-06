import Head from "next/head";
// import Link from "next/link";
import { Header } from "../Components/Header";
import { Hero } from "../Components/Hero";
import { Projects } from "../Components/Projects/index";
import { useState, useEffect, createContext } from "react";
import { Footer } from "../Components/Footer";
import { AboutMe } from "../Components/AboutMe";
import { ModalFunction } from "../Components/Modal";

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
      <main className="mb-auto">
        <div id="home" className="flex flex-grow">
          <Hero value={theme} />
        </div>
        <div id="projects" className="bg-[#ccd5ae] flex flex-col">
          <Projects />
        </div>
        <div
          id="about-me"
          className="flex h-screen flex-col bg-slate-500 items-center mb-12 sm:mb-12 md:mb-0"
        >
          <AboutMe />
          <div className="text-[5vmax] md:text-[3vmax] flex flex-col items-center">
            <ModalFunction
              title={"Technically-Minded"}
              modalTitle={"Being intellectually challenged is something I..."}
              modalContent={
                "find really important in my life, which is largely why I chose being a software developer"
              }
              imgSrc={"/npm.svg"}
              onClick={() => setOpen(true)}
              onClose={() => setOpen(false)}
            />
            <ModalFunction
              title={"Fun"}
              modalTitle={
                "I am sure this is a hot opinion amongst my friends and family, but..."
              }
              modalContent={
                "I do try to bring fun activities to group meet ups! I once got a few of my friends camping in a field in Oxford. Can't say they'll go again though!"
              }

              onClick={() => setOpen(true)}
              onClose={() => setOpen(false)}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
