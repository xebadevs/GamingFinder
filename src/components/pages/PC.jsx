import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from './ShowGames'

export default function PC() {
  return (
    <div>
        <Navbar />
        <ShowGames endpoint='games' platform='pc' title='PC' />
    </div>
  )
}