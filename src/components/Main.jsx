import Navbar from "./navbar"
import { ColorChange } from "../features/colorChange"
import GetGames from "../api/getGames"
import FreeGames from "../api/freeGames"
import AxiosProof from "../api/axiosProof"
import PlaceHolder from "../api/placeHolder"
import PlaceHolderTwo from "../api/placeHolderTwo"

export default function Main() {
    return(
        <div>
            <Navbar />
            <ColorChange />
            {/* <GetGames /> */}
            {/* <FreeGames /> */}
            {/* <AxiosProof /> */}
            {/* <PlaceHolder /> */}
            <PlaceHolderTwo />
        </div>
    )
}