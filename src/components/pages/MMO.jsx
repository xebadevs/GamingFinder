import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from './ShowGames'

export default function MMO() {
  return (
    <div>
      <Navbar />
      <ShowGames endpoint='filter' tag='mmo' title='MMO' />
    </div>
  )
}
