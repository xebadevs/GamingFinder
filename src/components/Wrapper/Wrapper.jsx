import Latest from './Latests'
import MostPlayed from './MostPlayed'
import Recommended from "./Recommended";

export default function Wrapper(){

    return(
        <div>
            <div className='my-5'>
                <MostPlayed />
            </div>
            <Latest />
            <Recommended />
        </div>
        )
}