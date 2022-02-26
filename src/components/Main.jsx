import Navbar from "./Navbar/Navbar"
import { ColorChange } from "../features/colorChange"
import GetGames from "../api/getGames"
import FreeGames from "../api/freeGames"
import AxiosProof from "../api/axiosProof"
import PlaceHolder from "../api/placeHolder"
import PlaceHolderTwo from "../api/placeHolderTwo"
import Wrapper from "./Wrapper/Wrapper"

export default function Main() {
    return(
        <div>
            <Navbar />
            <ColorChange />
            <Wrapper />
            {/* <GetGames /> */}
            {/* <FreeGames /> */}
            {/* <AxiosProof /> */}
            {/* <PlaceHolder /> */}
            <PlaceHolderTwo />
        </div>
    )
}