import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function GetGames(props){
    const [games, setGames] = useState([])

    useEffect(() => {
        axios.get('https://www.freetogame.com/api/games')
            .then(res => {
                const data = res.data
                setGames(data.title)
            })
    }, [])

    return (
        <div>
            {games.map((v) => {
                <li>{v.games}</li>
            })}
            <p>Everything</p>
        </div>
    )
}