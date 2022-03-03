import Navbar from "./Navbar/Navbar"
import { ColorChange } from "../features/colorChange"
import GetGames from "../api/getGames"
import FreeGames from "../api/freeGames"
import AxiosProof from "../api/axiosProof"
import PlaceHolder from "../api/placeHolder"
import PlaceHolderTwo from "../api/placeHolderTwo"
import Wrapper from "./Wrapper/Wrapper"
import NavbarHooks from "../components/NavbarHooks/NavbarHooks"

export default function Main() {
    return(
        <div>
            <Navbar />
            {/* <NavbarHooks /> */}
            {/* <ColorChange /> */}
            <Wrapper />
            {/* <GetGames /> */}
            {/* <FreeGames /> */}
            {/* <AxiosProof /> */}
            {/* <PlaceHolder /> */}
            {/* <PlaceHolderTwo /> */}
        </div>
    )
}