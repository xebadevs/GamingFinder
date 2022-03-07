import React from 'react'
import MainGame from './MainGame'

export default function MostPlayed() {
  return (
    <div className='my-5'>
        <h1>MOST PLAYED GAMES</h1>
        <hr className='hr-main' />
        <div className='card-container-main'>
            <MainGame id={365} />
            <MainGame id={475} />
            <MainGame id={516} />
        </div>
    </div>
  )
}