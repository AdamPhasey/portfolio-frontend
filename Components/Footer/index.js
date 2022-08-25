import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import Looks5Icon from "@mui/icons-material/Looks5";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

function Footer() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [newValue, setNewValue] = useState(0);
  return (
    <footer
      className="md:hidden w-screen bg-[#9a8c98]
            fixed bottom-0
            flex justify-center items-center
            text-white
            h-auto"
    >
      <Tabs value={newValue} aria-label="nav tabs" className="flex">
        <Tab
          value={0}
          onClick={() => setNewValue(0)}
          className="text-white font-Montserrat-Alternates"
          icon={<HomeIcon sx={{ fontSize: 20 }} />}
          style={{ fontSize: 10 }}
          label="Home"
          href="#home"
        />

        <Tab
                          value={1}

          onClick={() => setNewValue(1)}
          className="text-white font-Montserrat-Alternates"
          icon={<Looks5Icon sx={{ fontSize: 20 }} />}
          style={{ fontSize: 10 }}
          label="About"
          href="#about-me"
        />

        <Tab
                  value={2}

          onClick={() => setNewValue(2)}
          className="text-white font-Montserrat-Alternates"
          icon={<CodeIcon sx={{ fontSize: 20 }} />}
          style={{ fontSize: 10 }}
          label="Projects"
          href="#projects"
        />
        <Tab
                  value={3}

          onClick={() => setNewValue(3)}
          className="text-white font-Montserrat-Alternates"
          icon={<ConnectWithoutContactIcon sx={{ fontSize: 20 }} />}
          style={{ fontSize: 10 }}
          label="Contact"
          href="#contact"
        />
      </Tabs>
    </footer>
  );
}

export { Footer };

/*
 <Tab
          className="text-white font-Montserrat-Alternates"
          icon={
            <div>
              <IconButton
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Looks5Icon className="bg-white" sx={{ fontSize: 20 }} />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
              <Link href="#about-me">
                <MenuItem
                  onClick={() => {
                    handleClose();
                    setNewValue(1)
                  }}
                >
                  A bit about me
                </MenuItem>
              </Link>
                <a
                  href="https://drive.google.com/file/d/1hXqO6ooaTS8FRyfMeusjFzYVpH8YLLuj/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    My CV
                  </MenuItem>
                </a>
              </Menu>
            </div>
          }
          style={{ fontSize: 10 }}
          label="Me"
        />
*/
