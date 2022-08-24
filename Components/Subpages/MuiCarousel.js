import { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Image from "next/image";
import Modal from "@mui/material/Modal";
import { GrClose } from "react-icons/gr";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "#fff",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 6,
  p: 4,
};

export default function MuiCarousel({ images }) {
  const [open1, setOpen1] = useState(false);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box className="p-4" sx={{ maxWidth: 800, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          bgcolor: "background.default",
        }}
      >
        <h1 className="flex flex-row justify-center">
          {images[activeStep].label}
        </h1>
      </Paper>
      <Box className="max-h-full">
        <Image
          className=""
          onClick={() => setOpen1(true)}
          width={800}
          height={400}
          layout="responsive"
          alt={images[activeStep].label}
          src={images[activeStep].imgPath}
        />
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
              onClick={() => setOpen1(false)}
            >
              <GrClose />
            </IconButton>
            <Typography
              id="modal-modal-title"
              className=" md:text-[1vmax] font-Montserrat-Alternates"
            >
              {images[activeStep].label}
            </Typography>
            <div className="flex flex-row">
              <Image
                src={images[activeStep].imgPath || "/camping.png"}
                width={975}
                height={600}
                layout="fixed"
                alt="image of my work"
              />
            </div>
          </Box>
        </Modal>
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
