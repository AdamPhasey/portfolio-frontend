import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from '@mui/icons-material/Code';
import Looks5Icon from '@mui/icons-material/Looks5';
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";



function Footer() {
  const [newValue, setNewValue] = useState(0);
  return (
    <footer
      className="md:hidden w-screen bg-[#9a8c98]
            fixed bottom-0
            flex justify-center items-center
            text-white
            h-auto"
    >
      <Tabs
        value={newValue}
        aria-label="nav tabs example"
        className="flex"
      >
        <Tab
          onClick={() => setNewValue(0)}
          className="text-white font-Montserrat-Alternates"
          icon={<HomeIcon sx={{fontSize: 20}}/>}
          style={{fontSize: 10}}
          label="Home"
          href="#home"
        />
          <Tab
          onClick={() => setNewValue(1)}
          className="text-white font-Montserrat-Alternates"
          icon={<Looks5Icon sx={{fontSize: 20}}/>}
          style={{fontSize: 10}}
          label="Me"
          href="#about-me"
        />
        <Tab
          onClick={() => setNewValue(2)}
          className="text-white font-Montserrat-Alternates"
          icon={<CodeIcon sx={{fontSize: 20}}/>}
          style={{fontSize: 10}}
          label="Projects"
          href="#projects"
        />
        <Tab
          onClick={() => setNewValue(3)}
          className="text-white font-Montserrat-Alternates"
          icon={<ConnectWithoutContactIcon sx={{fontSize: 20}}/>}
          style={{fontSize: 10}}
          label="Contact"
          href="#contact"
        />
      </Tabs>
    </footer>
  );
}

export { Footer };
