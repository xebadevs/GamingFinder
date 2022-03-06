import React from 'react'
import MainGame from './MainGame'

export default function Recommended() {
  return (
    <div>
        <h1>RECOMMENDED GAMES</h1>
        <div className='card-container-main'>
            <MainGame id={30} />
            <MainGame id={450} />
            <MainGame id={464} />
        </div>
    </div>
  )
}
