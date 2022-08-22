import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import Looks5Icon from "@mui/icons-material/Looks5";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
          onClick={() => setNewValue(0)}
          className="text-white font-Montserrat-Alternates"
          icon={<HomeIcon sx={{ fontSize: 20 }} />}
          style={{ fontSize: 10 }}
          label="Home"
          href="#home"
        />
        <Tab
          onClick={() => setNewValue(1)}
          className="text-white font-Montserrat-Alternates"
          icon={
            <>
              <Button
                id="fade-button"
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <Looks5Icon className="bg-white" sx={{ fontSize: 20 }} />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={() => {handleClose(); location.href="#home"}}>A bit about me</MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    window
                      .open(
                        "https://drive.google.com/file/d/1hXqO6ooaTS8FRyfMeusjFzYVpH8YLLuj/view?usp=sharing",
                        "_blank"
                      )
                      .focus();
                  }}
                >
                  My CV{" "}
                </MenuItem>
              </Menu>
            </>
          }
          style={{ fontSize: 10 }}
          label="Me"
        />
        <Tab
          onClick={() => setNewValue(2)}
          className="text-white font-Montserrat-Alternates"
          icon={<CodeIcon sx={{ fontSize: 20 }} />}
          style={{ fontSize: 10 }}
          label="Projects"
          href="#projects"
        />
        <Tab
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
<Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
*/
