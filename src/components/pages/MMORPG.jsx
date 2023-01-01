import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from '../handlers/ShowGames'

export default function MMORPG() {
  return (
    <div>
      <Navbar />
      <ShowGames category='mmorpg' title='MMORPG' />
    </div>
  )
}