import Navbar from "./navbar"
import { ColorChange } from "../features/colorChange"
import GetGames from "../api/getGames"
import FreeGames from "../api/freeGames"
import AxiosProof from "../api/axiosProof"
import PlaceHolder from "../api/placeHolder"

export default function Main() {
    return(
        <div>
            <Navbar />
            <ColorChange />
            {/* <GetGames /> */}
            {/* <FreeGames /> */}
            <AxiosProof />
            <PlaceHolder />
        </div>
    )
}