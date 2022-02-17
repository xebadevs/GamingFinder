import { colorChange } from "../features/colorChange"
import Navbar from "./navbar"

export default function Main() {
    return(
        <div>
            <Navbar />
            <colorChange />
        </div>
    )
}