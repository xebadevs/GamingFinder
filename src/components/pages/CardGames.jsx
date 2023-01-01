import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from '../handlers/ShowGames'

export default function Card_games() {
  return (
    <div>
        <Navbar />
        <ShowGames category='card' title='CARD' />
    </div>
  )
}