import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from '../handlers/ShowGames'

export default function Social() {
  return (
    <div>
        <Navbar />
        <ShowGames category='social' title='SOCIAL' />
    </div>
  )
}