import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { LogoDev, Style } from "@mui/icons-material";
import { FaHandPointLeft, FaHandPointRight } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { GrClose } from "react-icons/gr";
import IconButton from "@mui/material/IconButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 6,
  p: 4,
};

function ModalFunction({
  title,
  modalTitle,
  modalContent,
  width,
  height,
  ButtonState,
  imgSrc,
  secondImage,
  thirdImage,
  width2,
  height2,
  width3,
  height3,
}) {
  const [open1, setOpen1] = useState(false);

  return (
    <>
      <Button
        // startIcon={<FaHandPointRight style={{fontSize: '2vmax', color: 'lavender'}}/>}
        onClick={() => setOpen1(true)}
        variant="contained"
        style={{ textTransform: "none" }}
        className="text-white text-[3vmax] md:text-[2vmax] hover:bg-green-400 bg-[#4a4e69] font-Montserrat-Alternates"
      >
        {title}
      </Button>
      <Modal
        open={open1}
        onClose={() => setOpen1(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ overflowY: "auto", overflowX: "hidden" }}
      >
        <Box sx={style} className="flex flex-col justify-center items-center">
          <IconButton
            aria-label="delete"
            size="large"
            className="mt-10 md:mt-0"
          >
            <GrClose onClick={() => setOpen1(false)} />
          </IconButton>
          <Typography
            id="modal-modal-title"
            className=" md:text-[1vmax] font-Montserrat-Alternates"
          >
            {modalTitle}
          </Typography>
          <br />
          <div className="flex flex-row">
            <Image
              className="pl-1"
              src={imgSrc || "/camping.png"}
              width={width || 100}
              height={height || 100}
              layout="fixed"
              alt="image of my work"
            />
            {secondImage && (
              <div className="flex flex-col">
                <Image
                  className="p-1 pt-0"
                  src={secondImage || "/camping.png"}
                  width={width2 || 100}
                  height={height2 || 100}
                  layout="fixed"
                  alt="image of my work"
                />
                {thirdImage && (
                  <Image
                    className="p-1 pb-0 pt-0"
                    src={thirdImage || "/camping.png"}
                    width={width3 || 100}
                    height={height3 || 100}
                    layout="fixed"
                    alt="image of my work"
                  />
                )}
              </div>
            )}
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalContent}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
export { ModalFunction };
