import { useRouter } from "next/router"
import NavbarForSubPages from "../Components/Subpages/NavbarForSubPages"


export default function Infinitesimal() {
    const router = useRouter()

    return (
        <NavbarForSubPages />
    )
}