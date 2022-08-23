import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import NavbarForSubPages from "../Components/Subpages/NavbarForSubPages";
import MuiCarousel from "../Components/Subpages/MuiCarousel";

export default function Chews() {
  const router = useRouter();

  return (
    <>
      <NavbarForSubPages />
      <div className="flex flex-row justify-center text-[3vmax] md:text-[5vmax] text-white w-full">
        <h1 className="font-permanent-marker text-red-600">
          Chews - Recipe Directory App
        </h1>
      </div>
      <div className="flex flex-row justify-center">
        <MuiCarousel
          images={[
            {
              label: "San Francisco – Oakland Bay Bridge, United States",
              imgPath:
                "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
            },
            {
              label: "Bird",
              imgPath:
                "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
            },
            {
              label: "Bali, Indonesia",
              imgPath:
                "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
            },
            {
              label: "Goč, Serbia",
              imgPath:
                "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
            },
          ]}
        />
      </div>
    </>
  );
}
