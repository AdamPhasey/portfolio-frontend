import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {useState} from 'react';



export default function Navbar () {
const [newValue, setNewValue] = useState();

return (

<Tabs value={newValue} aria-label="nav tabs example">
  <Tab onClick={() => setNewValue(0)}  className="text-xs md:text-2xl text-white" label="HOME" href="#home" />
  <Tab onClick={() => setNewValue(1)}  className="text-xs md:text-2xl text-white" label="PROJECTS" href="#projects" />
  <Tab onClick={() => setNewValue(2)}  className="text-xs md:text-2xl text-white" label="CONTACT" href="#contact" />
</Tabs>


); 

};