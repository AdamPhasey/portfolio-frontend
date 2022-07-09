import Head from "next/head";
import Link from "next/link";
import { Header } from "../Components/Header";

export default function Home() {
  return (
    <>
      <Head>
      <title>Adam's Portfolio</title>
      <a href="/api/auth/login" className="text-9xl font-bold">Login</a>
      </Head>
      <Header />
      <h1 className="text-sm md:text-7xl font-light">Hello world!</h1>
    </>
  );
}
