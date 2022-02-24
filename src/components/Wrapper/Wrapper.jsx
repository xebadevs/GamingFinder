import { LatestGames } from "./LatestGames";
import { PopularGames } from "./PopularGames";
import { RecommendedGames } from "./RecommendedGames";
import { useSelector } from 'react-redux'
import { ShowWrapper } from "../../features/showWrapper";

export default function Wrapper(){
    const color = useSelector((state) => state.colorChange.color)
    console.log(color)
    const condition = useSelector((state) => state.showWrapper.value)
    console.log(condition)


    return(
        (color === 'blue' &&
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