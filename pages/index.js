import Head from "next/head";
import Link from "next/link";
import { Header } from "../Components/Header";
import { AboutMe } from "../Components/AboutMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam's Portfolio</title>
      </Head>

      <div className="h-screen flex flex-col items-center">
        <Header />
        <AboutMe />
      </div>


    </>
  );
}
