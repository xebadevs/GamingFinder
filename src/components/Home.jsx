import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import invader from '../assets/space-invader.png'
import start from '../assets/start.mp3'

export default function Home() {
    const navigate = useNavigate()
    const audioRef = useRef()

function GoToMain(){
    navigate('/main')
}

function Play(){
    const audio = audioRef.current
    audio.play()
    setTimeout(GoToMain, 1111)    
}

    return (
        <div className='bg-img'>
            <div className='main-cont'>
                <div className='mb-5'>
                    <h1 className='home-title mb-3'>GamingFinder</h1>
                    <h3 className='home-subtitle'>All the Free PC Games on the Web</h3>
                </div>
                <div className='img-cont mb-5'>
                    <img src={invader} className='invader' alt=''/>
                </div>
                <div className='btn-main mt-5'>
                    <button className="btn btn-outline-secondary blink" onClick={Play}>PRESS START</button>
                    <audio ref={audioRef} src={start}></audio>
                </div>
            </div>
        </div>
    )
}