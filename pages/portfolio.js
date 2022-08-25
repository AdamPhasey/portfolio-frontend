import { useRouter } from "next/router"
import NavbarForSubPages from "../Components/Subpages/NavbarForSubPages"


export default function Portfolio() {
    const router = useRouter()

    return (
        <NavbarForSubPages />
        )
}