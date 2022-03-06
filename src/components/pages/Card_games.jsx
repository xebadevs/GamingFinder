import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from './ShowGames'

export default function Card_games() {
  return (
    <div>
        <Navbar />
        <ShowGames endpoint='filter' tag='card' title='CARD' />
    </div>
  )
}