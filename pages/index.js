import Head from "next/head";
import Link from "next/link";
import { Header } from "../Components/Header";
import { AboutMe } from "../Components/AboutMe";
import {Projects} from '../Components/Projects/index'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adams Portfolio</title>
      </Head>

      <div id="home" className="h-full flex flex-col">
        <Header />
        <AboutMe />
      </div>

      <div id="projects" className="h-screen flex flex-col bg-[#9a8c98]">
        <Projects />
      </div>


    </>
  );
}
