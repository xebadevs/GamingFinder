import { useNavigate } from "react-router-dom";
import Latest from './Latests'
import MostPlayed from './MostPlayed'
import Recommended from "./Recommended";

export default function Wrapper(){
    const navigate = useNavigate()

    function goToByRelease(){
        navigate('/by_release')
    }

    return(
        <div>
            <h1>Wrapper Component</h1>
            <MostPlayed />
            <Latest />
            <Recommended />
        </div>
        )
}