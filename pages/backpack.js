import { useRouter } from "next/router"


export default function Backpack() {
    const router = useRouter()

    return (
        <button onClick={() => router.push('/#projects')}>GO BACK</button>
    )
}