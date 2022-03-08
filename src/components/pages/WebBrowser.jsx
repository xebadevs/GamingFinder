import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShowGames from '../handlers/ShowGames'


export default function WebBrowser() {
  return (
    <div>
        <Navbar />
        <ShowGames endpoint='games' platform='browser' title='WEB BROWSER' />
    </div>
  )
}