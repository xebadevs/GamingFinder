import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from './ShowGames'

export default function Social() {
  return (
    <div>
        <Navbar />
        <ShowGames endpoint='filter' tag='social' title='SOCIAL' />
    </div>
  )
}