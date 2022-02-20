import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function FreeGames(props){
    const [freeGames, setFreeGames] = useState([])

    
    useEffect(() => {
        
        // ------ Permission request to: https://cors-anywhere.herokuapp.com/corsdemo ------
        // let url = "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games"
        let url = "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/game?id=452"
        // let url = "https://www.freetogame.com/api/game?id=452"

        axios.get(url)
        .then(res => {
            const data = res.data
            setFreeGames(data)
        })
    }, [])

    console.log(freeGames)

    return(
        <div>
            <hr />
        {freeGames.map((g, key) => <li key={key}>El id es: <b>{g.title}</b></li>)}
        This is something
        </div>
    )
}