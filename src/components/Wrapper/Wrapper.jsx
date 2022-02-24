import { LatestGames } from "./LatestGames";
import { PopularGames } from "./PopularGames";
import { RecommendedGames } from "./RecommendedGames";
import { useSelector } from 'react-redux'
import { ShowWrapper } from "../../features/showWrapper";

export default function Wrapper(){
    const condition = useSelector((state) => state.colorChange.color)
    console.log(condition)


    return(
        (condition === 'blue' &&
        <div>
            <h1>Wrapper Component</h1>
            <RecommendedGames />
            <PopularGames />
            <LatestGames />
            <ShowWrapper />
        </div>
        )
    )
}