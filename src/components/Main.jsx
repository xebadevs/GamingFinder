import Navbar from "./navbar"
import { ColorChange } from "../features/colorChange"
import GetGames from "../api/getGames"
import FreeGames from "../api/freeGames"

export default function Main() {
    return(
        <div>
            <Navbar />
            <ColorChange />
            <GetGames />
            <FreeGames />
        </div>
    )
}