import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from '../handlers/ShowGames'

export default function Fighting() {
  return (
    <div>
        <Navbar />
        <ShowGames endpoint='filter' tag='fighting' title='FIGHTING' />
    </div>
  )
}