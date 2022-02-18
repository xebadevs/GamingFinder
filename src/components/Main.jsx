import Navbar from "./navbar"
import { ColorChange } from "../features/colorChange"
import GetGames from "../api/getGames"

export default function Main() {
    return(
        <div>
            <Navbar />
            <ColorChange />
            <GetGames />
        </div>
    )
}