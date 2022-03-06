import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from './ShowGames'

export default function Strategy() {
  return (
    <div>
        <Navbar />
        <ShowGames endpoint='filter' tag='strategy' title='STRATEGY' />
    </div>
  )
}