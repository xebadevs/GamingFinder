import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            <div>
                <h1>GamingFinder</h1>
            </div>
            <div>
                <button className="btn btn-secondary" onClick={() => navigate('/main')}>Continue</button>
            </div>
        </div>
    )
}