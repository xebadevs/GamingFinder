import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function FreeGames(props){
    const [freeGames, setFreeGames] = useState([])

    
    useEffect(() => {
        
        // ------ Permission request to: https://cors-anywhere.herokuapp.com/corsdemo ------
        let url = "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games"

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
        {freeGames.map((g, key) => <li key={key}>{g.id}</li>)}
        This is something
        </div>
    )
}