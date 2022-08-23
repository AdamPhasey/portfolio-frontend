import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";

export default function NavbarForSubPages() {
  const [newValue, setNewValue] = useState(0);
  const router = useRouter()

  return (
    <div className="sticky top-0 z-[999] flex flex-row w-full items-center bg-[#4a4e69] dark:bg-[#000]">
      <Button variant="contained" className="bg-[#9a8c98]" onClick={() => router.push("/#projects")}>
        GO BACK
      </Button>
    </div>
  );
}
