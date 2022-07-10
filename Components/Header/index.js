import { Navbar } from "../Navbar";
import Image from "next/image";

function Header() {
  return (
    <div className="flex flex-row w-full h-1/7 bg-green-500">
      <Image src="/logo.png" width={500} height={125} />
      <Navbar />
    </div>
  );
}

export { Header };
