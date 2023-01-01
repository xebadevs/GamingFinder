import Navbar from '../Navbar/Navbar'
import ShowGames from '../handlers/ShowGames'

export default function MMORPG() {
  return (
    <div>
      <Navbar />
      <ShowGames title='BY RELEASE' sort='release-date' />
    </div>
  )
}