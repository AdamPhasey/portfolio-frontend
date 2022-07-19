import Navbar from "../Navbar";
import Image from "next/image";
import anime from "animejs";
import { useEffect } from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import {useState} from 'react';

function Header({ onChange, setTheme, theme }) {

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  useEffect(() => {
    anime(
      {
        targets: "#logo_layer2 path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: function (el, i) {
          return i * 100;
        },
        direction: "alternate",
        loop: false,
      },
      []
    );
  });

  const [checked, setChecked] = useState(!theme)

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (theme === "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
  };

  return (
    <div className="flex flex-row w-full justify-center items-center bg-[#2dd0e6] dark:bg-[#22223b]">
      <div className="flex flex-row w-3/4">
        {/* <Image id="logo_layer2" src="/logowithstroke.svg" alt="my name set as a logo" width={500} height={125}   /> */}
        <svg
          id="logo_layer2"
          width="75%"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 457.03 39.6"
        >
          <defs>
            <style>
              .cls-1{"{fill:none;stroke:#f0f;stroke-miterlimit:10;{"}
            </style>
          </defs>
          <path
            className="cls-1"
            d="M48.67,72.53H32L29.67,77.7h-8.4L35.43,44.09h9.8L59.38,77.7H51Zm-3.33-7.39-5-12.79-5,12.79Z"
            transform="translate(-20.51 -43.59)"
          />
          <path
            className="cls-1"
            d="M100.27,51.87V69.92a7.78,7.78,0,0,1-7.79,7.78H64.8V44.09H92.48A7.78,7.78,0,0,1,100.27,51.87Zm-7.94,1.81A1.66,1.66,0,0,0,90.67,52H72.75V69.76H90.67a1.66,1.66,0,0,0,1.66-1.65Z"
            transform="translate(-20.51 -43.59)"
          />
          <path
            className="cls-1"
            d="M133.1,72.53H116.42L114.1,77.7h-8.4l14.16-33.61h9.8L143.82,77.7h-8.4Zm-3.32-7.39-5-12.79-5,12.79Z"
            transform="translate(-20.51 -43.59)"
          />
          <path
            className="cls-1"
            d="M181.35,44.09h8.36V77.7h-8.4V61.47l-8,16.21-7.6,0-8-16.21V77.7h-8.4V44.09h8.35l11.88,24.23Z"
            transform="translate(-20.51 -43.59)"
          />
          <path
            className="cls-1"
            d="M197,82.69v-7h36.4v7Z"
            transform="translate(-20.51 -43.59)"
          />
          <path
            className="cls-1"
            d="M274.69,51.09V61.36a7,7,0,0,1-7,7H249.08V77.7h-8.41V44.09h27A7,7,0,0,1,274.69,51.09Zm-7.94,1.64a.7.7,0,0,0-.7-.7h-17v8.4h17a.7.7,0,0,0,.7-.7Z"
            transform="translate(-20.51 -43.59)"
          />
          <path
            className="cls-1"
            d="M307.14,44.09h8.4V77.7h-8.4V64.86H290.4V77.7H282V44.09h8.4V56.93h16.74Z"
            transform="translate(-20.51 -43.59)"
          />
          <path
            className="cls-1"
            d="M348.33,72.53H331.65l-2.32,5.17h-8.4l14.16-33.61h9.8L359.05,77.7h-8.4ZM345,65.14l-5-12.79-5,12.79Z"
            transform="translate(-20.51 -43.59)"
          />
          <path
            className="cls-1"
            d="M399.93,62.7v7.9a7,7,0,0,1-7,7l-21.46.06a7,7,0,0,1-7-7l0-3.26,7.94,0V69a.7.7,0,0,0,.7.7l18.2,0A.7.7,0,0,0,392,69V65.33a.7.7,0,0,0-.7-.7H370a5.53,5.53,0,0,1-5.53-5.54v-8a7,7,0,0,1,7-7h21.46a7,7,0,0,1,7,7v3.26H392V52.75a.7.7,0,0,0-.7-.7H373.11a.7.7,0,0,0-.71.7v3.71a.7.7,0,0,0,.7.7h21.3A5.53,5.53,0,0,1,399.93,62.7Z"
            transform="translate(-20.51 -43.59)"
          />
          <path
            className="cls-1"
            d="M407.23,44.09H438v7.47H415.72V56.9h18.57v8H415.72v5.34H438V77.7H407.23Z"
            transform="translate(-20.51 -43.59)"
          />
          <path
            className="cls-1"
            d="M467.48,44.09h9.18L464,65V77.7h-8.4V65l-12.68-21h9.18l7.7,13Z"
            transform="translate(-20.51 -43.59)"
          />
        </svg>
      </div>
      <div className="flex flex-row">
        <Navbar />

         <FormControlLabel
        control={
          <MaterialUISwitch
            onChange={handleChange}
            checked={checked}
            sx={{ m: 1 }}
            
          />
        }
      />
      </div>

     
</div>
  );
}

export { Header };
