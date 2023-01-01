import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from '../handlers/ShowGames'

export default function Sports() {
  return (
    <div>
        <Navbar />
        <ShowGames category='sports' title='SPORTS' />
    </div>
  )
}