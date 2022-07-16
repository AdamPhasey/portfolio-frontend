import Navbar from "../Navbar";
import Image from "next/image";
import {useState, useEffect} from 'react';

function Header({setTheme}) {


// const [theme, setTheme] = useState(null)
// console.log(theme)

// const colorTheme = theme === 'dark' ? 'light' : 'dark';
// useEffect(() => {
// const root = window.document.documentElement;
// root.classList.remove(colorTheme);
// root.classList.add(theme);
// localStorage.setItem('theme', theme);
// }, [theme, colorTheme]);


  return (

    <div className="flex flex-row w-full justify-center items-center bg-[#2dd0e6] dark:bg-[#22223b]">
      <div className="flex flex-row w-3/4">
      <Image src="/logo.svg" alt="my name set as a logo" width={500} height={125} />
      </div>
      <div className="flex flex-row">
      <Navbar />
    </div>
    <button onClick={() => setTheme('dark')}>DARK</button>
    <button onClick={() => setTheme('light')}>LIGHT</button>
    </div>
  );
}

export { Header };
