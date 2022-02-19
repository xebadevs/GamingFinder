import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function FreeGames(props){
    const [valores, setValores] = useState([])

    
    useEffect(() => {
        
        // ------ Permission request to: https://cors-anywhere.herokuapp.com/corsdemo ------
        let url = "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games"

        axios.get(url)
        .then(res => {
            const data = res.data
            // setValores(data.serie)
            console.log(data)
        })
    }, [])

    return(
        <div>
            <hr />
        {/* {valores.map((v, key) => <li key={key}>{v.valor}</li>)} */}
        This is something
        </div>
    )
}