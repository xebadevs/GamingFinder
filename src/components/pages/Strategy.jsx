import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from '../handlers/ShowGames'

export default function Strategy() {
  return (
    <div>
        <Navbar />
        <div>
        <ShowGames category='strategy' title='STRATEGY' />
        </div>
    </div>
  )
}