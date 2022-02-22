import Navbar from "./Navbar"
import { ColorChange } from "../features/colorChange"
import GetGames from "../api/getGames"
import FreeGames from "../api/freeGames"
import AxiosProof from "../api/axiosProof"
import PlaceHolder from "../api/placeHolder"
import PlaceHolderTwo from "../api/placeHolderTwo"
import ByRelease from "./ByRelease"
import Wrapper from "./Wrapper/Wrapper"

export default function Main() {
    return(
        <div>
            <Navbar />
            {/* <ColorChange /> */}
            <ByRelease />
            <Wrapper />
            {/* <GetGames /> */}
            {/* <FreeGames /> */}
            {/* <AxiosProof /> */}
            {/* <PlaceHolder /> */}
            <PlaceHolderTwo />
        </div>
    )
}