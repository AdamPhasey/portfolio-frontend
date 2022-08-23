import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

export default function Navbar() {
  const [newValue, setNewValue] = useState(0);

  return (
    <Tabs
      value={newValue}
      aria-label="nav tabs example"
      className="hidden md:flex"
    >
      <Tab
        onClick={() => setNewValue(0)}
        className=" text-white dark:text-white font-Montserrat-Alternates"
        label="Home"
        href="#home"
      />
      <Tab
        onClick={() => setNewValue(1)}
        className=" text-white dark:text-white font-Montserrat-Alternates"
        label="My CV"
        href="https://drive.google.com/file/d/1hXqO6ooaTS8FRyfMeusjFzYVpH8YLLuj/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      />
      <Tab
        onClick={() => setNewValue(2)}
        className=" text-white dark:text-white font-Montserrat-Alternates"
        label="About Me"
        href="#about-me"
      />
      <Tab
        onClick={() => setNewValue(3)}
        className=" text-white dark:text-white font-Montserrat-Alternates"
        label="Projects"
        href="#projects"
      />
      <Tab
        onClick={() => setNewValue(4)}
        className=" text-white dark:text-white font-Montserrat-Alternates mr-5"
        label="Contact"
        href="#contact"
      />
    </Tabs>
  );
}
