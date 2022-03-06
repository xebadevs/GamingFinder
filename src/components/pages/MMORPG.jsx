import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from './ShowGames'

export default function MMORPG() {
  return (
    <div>
      <Navbar />
      <ShowGames endpoint='filter' tag='mmorpg' title='MMORPG' />
    </div>
  )
}