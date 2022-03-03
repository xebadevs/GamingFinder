import { LatestGames } from "./LatestGames";
import { PopularGames } from "./PopularGames";
import { RecommendedGames } from "./RecommendedGames";
import { useNavigate } from "react-router-dom";

export default function Wrapper(){
    const navigate = useNavigate()

    function goToByRelease(){
        navigate('/by_release')
    }

    return(
        <div>
            <h1>Wrapper Component</h1>
            <RecommendedGames />
            <PopularGames />
            <LatestGames />

            <button className="btn btn-primary" onClick={ goToByRelease }>Go to Closting Component</button>
        </div>
        )
}