import { LatestGames } from "./LatestGames";
import { PopularGames } from "./PopularGames";
import { RecommendedGames } from "./RecommendedGames";
import { useSelector } from 'react-redux'
import { ShowWrapper } from "../../features/showWrapper";
import { useNavigate } from "react-router-dom";

export default function Wrapper(){
    const color = useSelector((state) => state.colorChange.color)
    console.log(color)
    const condition = useSelector((state) => state.showWrapper.value)
    console.log(condition)

    const navigate = useNavigate()

    function goToClosting(){
        navigate('/closting')
    }

    return(
        (color === 'blue' &&
        <div>
            <h1>Wrapper Component</h1>
            <RecommendedGames />
            <PopularGames />
            <LatestGames />
            <ShowWrapper />

            <button className="btn btn-primary" onClick={ goToClosting }>Go to Closting Component</button>
        </div>
        )
    )
}