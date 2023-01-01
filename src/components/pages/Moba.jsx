import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from '../handlers/ShowGames'

export default function Moba() {
  return (
    <div>
        <Navbar />
        <ShowGames category='moba' title='MOBA' />
    </div>
  )
}