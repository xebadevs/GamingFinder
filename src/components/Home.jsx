import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div>
            <div>
                <h1>GamingFinder</h1>
            </div>
            <div>
                <button className="btn btn-secondary" onClick={() => navigate('/main')}>Continue</button>
            </div>
        </div>
    )
}