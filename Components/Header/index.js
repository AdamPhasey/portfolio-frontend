import Navbar from "../Navbar";
import Image from "next/image";
import anime from "animejs";
import { useEffect } from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";

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

  const [checked, setChecked] = useState(!theme);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="sticky top-0 z-[999] flex flex-row w-full justify-center items-center bg-[#4a4e69] dark:bg-[#000]">
      <div className="flex flex-row w-full">
        <svg
          className="w-3/4 md:w-1/3 p-4"
          id="logo_layer2"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 304.56 42.94"
        >
          <defs>
            <style>
              .adamP{"{fill:#fff;stroke:#000;stroke-miterlimit:10;width:0.5px{"}
            </style>
          </defs>
          <path
            className="adamP"
            d="M116.27,56.27a11.18,11.18,0,0,1,4.55,4.93,17.57,17.57,0,0,1,1.61,7.89V86.55H117v-8.1H101.71v8.1H96.34V69.09A17.56,17.56,0,0,1,98,61.2a11.13,11.13,0,0,1,4.55-4.93,15,15,0,0,1,13.76,0ZM117,73.55v-5c0-2.91-.67-5.1-2-6.59a8.2,8.2,0,0,0-11.24,0c-1.35,1.49-2,3.68-2,6.59v5Z"
            transform="translate(-96.09 -52.91)"
          />
          <path
            className="adamP"
            d="M151.5,53.16V86.55h-5v-3.1A8.21,8.21,0,0,1,143.26,86a10.2,10.2,0,0,1-4.22.86,11.18,11.18,0,0,1-5.81-1.53,10.73,10.73,0,0,1-4-4.34,13.76,13.76,0,0,1-1.47-6.46,13.62,13.62,0,0,1,1.47-6.44,10.74,10.74,0,0,1,4-4.32A11.18,11.18,0,0,1,139,62.25a10,10,0,0,1,4.07.81,8.27,8.27,0,0,1,3.15,2.43V53.16Zm-8.43,28a6.36,6.36,0,0,0,2.39-2.63,9.35,9.35,0,0,0,0-7.92A6.54,6.54,0,0,0,136.28,68a6.45,6.45,0,0,0-2.4,2.63,9.35,9.35,0,0,0,0,7.92,6.45,6.45,0,0,0,2.4,2.63,6.72,6.72,0,0,0,6.79,0Z"
            transform="translate(-96.09 -52.91)"
          />
          <path
            className="adamP"
            d="M180.28,62.52v24h-5v-3.1A8.21,8.21,0,0,1,172.08,86a10.24,10.24,0,0,1-4.22.86A11.25,11.25,0,0,1,162,85.34,10.58,10.58,0,0,1,158,81a15.26,15.26,0,0,1,0-12.94,10.66,10.66,0,0,1,4-4.3,11.25,11.25,0,0,1,5.85-1.53,9.81,9.81,0,0,1,4,.81A8.84,8.84,0,0,1,175,65.45V62.52ZM173.23,80a8.79,8.79,0,0,0,0-10.89A6.19,6.19,0,0,0,168.45,67a6.12,6.12,0,0,0-4.76,2.07,8.86,8.86,0,0,0,0,10.89,6.12,6.12,0,0,0,4.76,2.07A6.19,6.19,0,0,0,173.23,80Z"
            transform="translate(-96.09 -52.91)"
          />
          <path
            className="adamP"
            d="M222.14,64.89q2.48,2.63,2.47,7.89V86.55h-5.24v-13a7.34,7.34,0,0,0-1.3-4.74,4.52,4.52,0,0,0-3.73-1.6A5.27,5.27,0,0,0,210.1,69a8,8,0,0,0-1.59,5.33V86.55h-5.25v-13a7.34,7.34,0,0,0-1.3-4.74,4.51,4.51,0,0,0-3.73-1.6A5.31,5.31,0,0,0,194,69a8,8,0,0,0-1.57,5.36V86.55h-5.24v-24h5v3.06a8.18,8.18,0,0,1,3.14-2.47,10.08,10.08,0,0,1,4.2-.86,9.46,9.46,0,0,1,4.46,1,7.47,7.47,0,0,1,3.09,3,9.5,9.5,0,0,1,3.56-3,11,11,0,0,1,4.83-1.06A8.76,8.76,0,0,1,222.14,64.89Z"
            transform="translate(-96.09 -52.91)"
          />
          <path
            className="adamP"
            d="M262.13,56.4a9.81,9.81,0,0,1,4.34,3.87,12.58,12.58,0,0,1,0,11.95,9.74,9.74,0,0,1-4.34,3.89,15.27,15.27,0,0,1-6.65,1.35h-6.62v9.09H243.4V55.05h12.08A15.27,15.27,0,0,1,262.13,56.4Zm-1.49,14.49a5.83,5.83,0,0,0,1.85-4.63,5.85,5.85,0,0,0-1.85-4.64A8,8,0,0,0,255.23,60h-6.37V72.51h6.37A8,8,0,0,0,260.64,70.89Z"
            transform="translate(-96.09 -52.91)"
          />
          <path
            className="adamP"
            d="M292.86,64.91c1.7,1.77,2.56,4.39,2.56,7.87V86.55h-5.25v-13a7.06,7.06,0,0,0-1.38-4.74,4.92,4.92,0,0,0-3.94-1.6A5.84,5.84,0,0,0,280.27,69a7.8,7.8,0,0,0-1.67,5.37V86.55h-5.25V53.16h5.25V65.31A8.45,8.45,0,0,1,281.81,63a11.13,11.13,0,0,1,4.25-.79A9,9,0,0,1,292.86,64.91Z"
            transform="translate(-96.09 -52.91)"
          />
          <path
            className="adamP"
            d="M324.19,62.52v24h-5v-3.1A8.21,8.21,0,0,1,316,86a10.19,10.19,0,0,1-4.21.86,11.26,11.26,0,0,1-5.86-1.53,10.5,10.5,0,0,1-4-4.32,15.16,15.16,0,0,1,0-12.94,10.57,10.57,0,0,1,4-4.3,11.26,11.26,0,0,1,5.86-1.53,9.73,9.73,0,0,1,4,.81A8.87,8.87,0,0,1,319,65.45V62.52ZM317.14,80a8.79,8.79,0,0,0,0-10.89,6.53,6.53,0,0,0-9.54,0,8.9,8.9,0,0,0,0,10.89,6.53,6.53,0,0,0,9.54,0Z"
            transform="translate(-96.09 -52.91)"
          />
          <path
            className="adamP"
            d="M332.66,86.1a13,13,0,0,1-4.15-1.93l2-4.28a12.56,12.56,0,0,0,3.62,1.74,14.37,14.37,0,0,0,4.18.65q4.69,0,4.7-2.66a1.76,1.76,0,0,0-1.2-1.75,19.52,19.52,0,0,0-3.84-1,29.55,29.55,0,0,1-4.51-1,6.83,6.83,0,0,1-3-2,6,6,0,0,1-1.28-4.07,6.55,6.55,0,0,1,2.67-5.47,11.52,11.52,0,0,1,7.19-2,19.08,19.08,0,0,1,4.61.57,12.31,12.31,0,0,1,3.78,1.5l-2,4.28A11.79,11.79,0,0,0,339,66.8a6.73,6.73,0,0,0-3.5.74,2.24,2.24,0,0,0-1.2,2,2,2,0,0,0,1.28,1.91,18.77,18.77,0,0,0,4,1.06,29.07,29.07,0,0,1,4.41,1,6.92,6.92,0,0,1,3,2,5.8,5.8,0,0,1,1.23,4,6.41,6.41,0,0,1-2.72,5.4,12.22,12.22,0,0,1-7.43,2A18.82,18.82,0,0,1,332.66,86.1Z"
            transform="translate(-96.09 -52.91)"
          />
          <path
            className="adamP"
            d="M369.41,79.49,372.18,83a9.22,9.22,0,0,1-3.78,2.93,14.16,14.16,0,0,1-11.7-.59,11,11,0,0,1-4.34-4.38,14.09,14.09,0,0,1,0-12.69,11,11,0,0,1,4.11-4.39,11.91,11.91,0,0,1,11.66-.11,10.62,10.62,0,0,1,4.09,4.18,13,13,0,0,1,1.51,6.37l-17.16,3.6A6.18,6.18,0,0,0,359.09,81a8.56,8.56,0,0,0,10.32-1.53ZM357.68,68.78a8,8,0,0,0-1.78,5.44v0l12.67-2.61a6.46,6.46,0,0,0-2.2-3.56,6.15,6.15,0,0,0-4-1.35A5.94,5.94,0,0,0,357.68,68.78Z"
            transform="translate(-96.09 -52.91)"
          />
          <path
            className="adamP"
            d="M400.41,62.52V82.91q0,12.69-11.62,12.69a19.23,19.23,0,0,1-5.85-.88,11.88,11.88,0,0,1-4.6-2.54L380.69,88A10.51,10.51,0,0,0,384.17,90a12.28,12.28,0,0,0,4.32.76c2.3,0,4-.59,5.06-1.77s1.61-3,1.61-5.47V82.41a8.34,8.34,0,0,1-3.06,2.28,9.7,9.7,0,0,1-3.9.78,9.4,9.4,0,0,1-7.07-2.65q-2.58-2.66-2.58-8V62.52h5.25V74.13a7.25,7.25,0,0,0,1.36,4.8A4.83,4.83,0,0,0,389,80.52a5.72,5.72,0,0,0,4.47-1.84,7.8,7.8,0,0,0,1.65-5.36V62.52Z"
            transform="translate(-96.09 -52.91)"
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
