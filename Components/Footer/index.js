import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

function Footer() {
  const [newValue, setNewValue] = useState(0);
  return (
    <footer
      className="md:hidden w-screen h-12 bg-blue-500
            fixed bottom-0
            flex justify-center items-center
            text-white text-2xl"
    >
      <Tabs
        value={newValue}
        aria-label="nav tabs example"
        className="flex"
      >
        <Tab
          onClick={() => setNewValue(0)}
          className="text-white font-Montserrat-Alternates"
          label={<HomeIcon sx={{fontSize: 40}}/>}
          href="#home"
        />
        <Tab
          onClick={() => setNewValue(1)}
          className="text-white font-Montserrat-Alternates"
          label={<ArticleIcon sx={{fontSize: 40}}/>}
          href="#projects"
        />
        <Tab
          onClick={() => setNewValue(2)}
          className="text-white font-Montserrat-Alternates"
          label={<ConnectWithoutContactIcon sx={{fontSize: 40}}/>}
          href="#contact"
        />
      </Tabs>
    </footer>
  );
}

export { Footer };
