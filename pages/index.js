import Head from "next/head";
import Link from "next/link";
import { Header } from "../Components/Header";
import { AboutMe } from "../Components/AboutMe";
import {Projects} from '../Components/Projects/index'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam's Portfolio</title>
      </Head>

      <div className="h-full flex flex-col bg-gradient-to-r from-transparent via-transparent to-green-900">
        <Header />
        <AboutMe />
      </div>

      <div className="h-full flex flex-col bg-green-300">
        <Projects />
      </div>


    </>
  );
}
