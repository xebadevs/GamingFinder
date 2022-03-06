import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from './ShowGames'

export default function Moba() {
  return (
    <div>
        <Navbar />
        <ShowGames endpoint='filter' tag='moba' title='MOBA' />
    </div>
  )
}