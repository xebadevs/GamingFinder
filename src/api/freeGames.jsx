import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function FreeGames(props){
    const [valores, setValores] = useState([])

    
    useEffect(() => {
        
        // let axios_config = {headers: {'Access-Control-Allow-Origin': '*'}}
        // let url = "https://www.freetogame.com/api/games"
        let url = "https://www.freetogame.com/api/games"

        axios.get(url)
        .then(res => {
            const data = res.data
            // setValores(data.serie)
            console.log(data)
        })
    }, [])

    return(
        <div>
        {/* {valores.map((v, key) => <li key={key}>{v.valor}</li>)} */}
        This is something
        </div>
    )
}