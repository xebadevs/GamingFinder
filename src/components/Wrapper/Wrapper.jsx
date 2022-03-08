import Latest from './Latests'
import MostPlayed from './MostPlayed'
import Recommended from "./Recommended";
import Footer from './Footer';

export default function Wrapper(){

    return(
        <div>
            <MostPlayed />
            <Latest />
            <Recommended />
            <Footer />
        </div>
        )
}