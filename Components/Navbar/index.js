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
        className=" text-black dark:text-white font-Montserrat-Alternates"
        label="Home"
        href="#home"
      />
      <Tab
        onClick={() => setNewValue(1)}
        className=" text-black dark:text-white font-Montserrat-Alternates"
        label="Projects"
        href="#projects"
      />
      <Tab
        onClick={() => setNewValue(2)}
        className=" text-black dark:text-white font-Montserrat-Alternates"
        label="Contact"
        href="#contact"
      />
    </Tabs>
  );
}
