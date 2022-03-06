import React from 'react'
import MainGame from './MainGame'

export default function MostPlayed() {
  return (
    <div>
        <h1>MOST PLAYED GAMES</h1>
        <div className='card-container-main'>
            <MainGame id={365} />
            <MainGame id={475} />
            <MainGame id={516} />
        </div>
    </div>
  )
}
