import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    function goToMain(){
        navigate('/main')
    }

    return (
        <div>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <div>
                <h1>GamingFinder</h1>
            </div>
            <div>
                <button className="btn btn-secondary" onClick={ goToMain }>Continue</button>
            </div>
        </div>
    )
}