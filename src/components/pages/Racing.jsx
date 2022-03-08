import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from '../handlers/ShowGames'

export default function Racing() {
  return (
    <div>
        <Navbar />
        <ShowGames endpoint='filter' tag='racing' title='RACING' />
    </div>
  )
}