import { Navbar } from "../Navbar";
import Image from "next/image";

function Header() {
  return (
    <div className="flex flex-row w-full">
      <Image src="/logo.png" width={500} height={125} />
      <Navbar />
    </div>
  );
}

export { Header };
