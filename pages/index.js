import Head from "next/head";
// import Link from "next/link";
import { Header } from "../Components/Header";
import { Hero } from "../Components/Hero";
import { Projects } from "../Components/Projects/index";
import { useState, useEffect, createContext } from "react";
import { Footer } from "../Components/Footer";
import { AboutMe } from "../Components/AboutMe";

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
        <div id="about-me" className="bg-[#fff] flex flex-col">
        <AboutMe />
        </div>
      </main>
      <Footer />
    </>
  );
}
