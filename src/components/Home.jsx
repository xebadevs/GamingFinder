import React from 'react'
import { useNavigate } from 'react-router-dom'
import invader from '../assets/space-invader.png'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className='bg-img'>
            <div className='main-cont'>
                <div className='mb-5'>
                    <h1 className='home-title mb-3'>GamingFinder</h1>
                    <h3 className='home-subtitle'>All the Free PC Games on the Web</h3>
                </div>
                <div className='img-cont mb-5'>
                    <img src={invader} className='invader' />
                </div>
                <div className='btn-main mt-5'>
                    <button className="btn btn-outline-secondary blink" onClick={() => navigate('/main')}>PRESS START</button>
                </div>
            </div>
        </div>
    )
}