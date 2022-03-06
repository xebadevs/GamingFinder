import React from 'react'
import MainGame from './MainGame'

export default function Recommended() {
  return (
    <div className='my-5'>
        <h1>RECOMMENDED GAMES</h1>
        <hr className='hr-main' />
        <div className='card-container-main'>
            <MainGame id={30} />
            <MainGame id={450} />
            <MainGame id={464} />
        </div>
    </div>
  )
}
