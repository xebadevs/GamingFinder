import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function GetGames(props){
    const [valores, setValores] = useState([])

    useEffect(() => {
        axios.get("https://mindicador.cl/api/dolar")
        .then(res => {
            const data = res.data
            setValores(data.serie)
        })
    }, [])

    return(
        <div>
            {valores.map((v) => <li>{v.valor}</li>)}
        </div>
    )
}