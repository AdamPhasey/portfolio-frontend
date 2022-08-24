import Cards from "../Cards";
import Divider from "@mui/material/Divider";

function Projects() {
  return (
    <>
      <Divider width="50%" variant="middle" textAlign="center" color="#fff" />
      <div className="h-full">
        <h1 className="flex py-2 font-Montserrat-Alternates text-[5vmax] text-white justify-center">
          Projects
        </h1>
      </div>
      <div className="flex flex-wrap p-10 gap-11 justify-around items-center mb-12">
        <Cards />
      </div>
    </>
  );
}

export { Projects };
