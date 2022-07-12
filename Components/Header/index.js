import Navbar from "../Navbar";
import Image from "next/image";

function Header() {
  return (

    <div className="flex flex-row w-full justify-center items-center bg-[#22223b]">
      <div className="flex flex-row w-3/4">
      <Image src="/logo.svg" width={500} height={125} />
      </div>
      <div className="flex flex-row">
      <Navbar />
    </div>
    </div>
  );
}

export { Header };
