import Navbar from '../Navbar/Navbar'
import ShowGames from './ShowGames'

export default function MMORPG() {
  return (
    <div>
      <Navbar />
      <ShowGames endpoint='games' title='BY RELEASE' sort='release-date' />
    </div>
  )
}