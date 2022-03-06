import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from './ShowGames'


export default function Web_browser() {
  return (
    <div>
        <Navbar />
        <ShowGames endpoint='games' platform='browser' title='WEB BROWSER' />
    </div>
  )
}