import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";


export default function Navbar () {

return (

<Tabs value={0} aria-label="nav tabs example">
  <Tab className="text-xs md:text-2xl text-white" label="HOME" href="#home" />
  <Tab className="text-xs md:text-2xl text-white" label="PROJECTS" href="#projects" />
  <Tab className="text-xs md:text-2xl text-white" label="CONTACT" href="#contact" />
</Tabs>


); 

};