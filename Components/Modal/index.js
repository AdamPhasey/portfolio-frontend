import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { LogoDev, Style } from "@mui/icons-material";
import { FaHandPointLeft, FaHandPointRight } from "react-icons/fa";
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

function ModalFunction({ title, modalTitle, modalContent, imgSrc }) {

  const [open1, setOpen1] = useState(false);

  return (
    <>
      <Button
        // startIcon={<FaHandPointRight style={{fontSize: '2vmax', color: 'lavender'}}/>}
        onClick={() => setOpen1(true)}
        style={{ textTransform: "none" }}
        className="text-white text-[3vmax] md:text-[2vmax] hover:bg-[#4a4e69] font-Montserrat-Alternates"
      >
        {title}
      </Button>
      <Modal
        open={open1}
        onClose={() => setOpen1(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex flex-col justify-center items-center">
          <Typography
            id="modal-modal-title"
            className=" md:text-[1vmax] font-Montserrat-Alternates"
          >
            {modalTitle}
          </Typography>
          <br />
          <Image
            src={imgSrc || '/camping.png'}
            width={100}
            height={100}
            layout="fixed"
            alt="image of my work"
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalContent}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
export { ModalFunction };
