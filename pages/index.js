import Head from "next/head";
// import Link from "next/link";
import { Header } from "../Components/Header";
import { AboutMe } from "../Components/AboutMe";
import {Projects} from '../Components/Projects/index'
import {useState, useEffect, createContext} from 'react';

export default function Home() {


  const [theme, setTheme] = useState('dark')
  console.log(theme)
  
  const colorTheme = theme === 'dark' ? 'light' : 'dark';
  useEffect(() => {
  const root = window.document.documentElement;
  root.classList.remove(colorTheme);
  root.classList.add(theme);
  localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);
  

  return (
    <>
      <Head>
        <title>Adams Portfolio</title>
      </Head>

      <div id="home" className="h-full w-fullflex flex-col">
        <Header setTheme={setTheme}/>
        <AboutMe value={theme} />
      </div>

      <div id="projects" className="h-screen flex flex-col justify-center bg-[#9a8c98]">
        <Projects />
      </div>


    </>
  );
}
