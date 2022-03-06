import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from './ShowGames'

export default function Shooter() {
  return (
    <div>
        <Navbar />
        <ShowGames endpoint='filter' tag='shooter' title='SHOOTER' />
    </div>
  )
}