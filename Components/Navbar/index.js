import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

export default function Navbar() {
  const [newValue, setNewValue] = useState(0);

  return (
    <div className="hidden md:flex">
      <Tabs value={newValue} aria-label="nav tabs example">
        <Tab
          value={0}
          onClick={() => setNewValue(0)}
          className=" text-white dark:text-white font-Montserrat-Alternates"
          label="Home"
          href="#home"
        />
        <Tab
          value={1}
          onClick={() => setNewValue(1)}
          className=" text-white dark:text-white font-Montserrat-Alternates"
          label="My CV"
          href="https://drive.google.com/file/d/1hXqO6ooaTS8FRyfMeusjFzYVpH8YLLuj/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        />
        <Tab
          value={2}
          onClick={() => setNewValue(2)}
          className=" text-white dark:text-white font-Montserrat-Alternates"
          label="About Me"
          href="#about-me"
        />
        <Tab
          value={3}
          onClick={() => setNewValue(3)}
          className=" text-white dark:text-white font-Montserrat-Alternates"
          label="Projects"
          href="#projects"
        />
        <Tab
          value={4}
          onClick={() => setNewValue(4)}
          className=" text-white dark:text-white font-Montserrat-Alternates mr-5"
          label="Contact"
          href="#contact"
        />
      </Tabs>
    </div>
  );
}
