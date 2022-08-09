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
        <Divider width='50%' variant='middle' textAlign='center' color='#fff'/>
        </div>

        <div
          id="about-me"
          className="flex h-screen flex-col bg-[#22223b] items-center justify-evenly"
        >

          <AboutMe />
            <ModalFunction
              title={"Technically-Minded"}
              modalTitle={"I thrive in environments that are challenging!"}
              modalContent={
                "I find really important in my life, which is largely why I chose being a software developer"
              }
              imgSrc={"/npm.svg"}
              onClick={() => setOpen(true)}
              onClose={() => setOpen(false)}
            />
            <ModalFunction
              title={"Dedicated"}
              modalTitle={
                "I am sure this is a hot opinion amongst my friends and family, but..."
              }
              modalContent={
                "I do try to bring fun activities to group meet ups! I once got a few of my friends camping in a field in Oxford. Can't say they'll go again though!"
              }

              onClick={() => setOpen(true)}
              onClose={() => setOpen(false)}
            />
        
          <ModalFunction
              title={"Family-Oriented"}
              modalTitle={"Being challenged is something I..."}
              modalContent={
                "find really important in my life, which is largely why I chose being a software developer"
              }
              imgSrc={"/npm.svg"}
              onClick={() => setOpen(true)}
              onClose={() => setOpen(false)}
            />
            <ModalFunction
              title={"Dad Jokes"}
              modalTitle={"Being challenged is something I..."}
              modalContent={
                "find really important in my life, which is largely why I chose being a software developer"
              }
              imgSrc={"/npm.svg"}
              onClick={() => setOpen(true)}
              onClose={() => setOpen(false)}
            />
            <ModalFunction
              title={"Carpentry"}
              modalTitle={"Being challenged is something I..."}
              modalContent={
                "find really important in my life, which is largely why I chose being a software developer"
              }
              imgSrc={"/npm.svg"}
              onClick={() => setOpen(true)}
              onClose={() => setOpen(false)}
            />
            </div>
        <div id="projects" className="bg-[#4a4e69] flex flex-col justify-center items-center">
          <Projects />
        </div>
        <div id="contact" className="bg-[#22223b] pt-12 pb-28 md:pb-10 flex flex-col items-center">
        <ContactUs />
        </div>
      </main>
      <Footer />
    </>
  );
}
