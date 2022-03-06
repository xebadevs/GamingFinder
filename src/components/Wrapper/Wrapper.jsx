import Latest from './Latests'
import MostPlayed from './MostPlayed'
import Recommended from "./Recommended";

export default function Wrapper(){

    return(
        <div>
            <MostPlayed />
            <Latest />
            <Recommended />
        </div>
        )
}