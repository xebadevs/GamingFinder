import React from 'react'
import { useState, useEffect } from 'react';

export default function ShowGame({id}) {

    const [loading, setLoading] = useState(true)

    let options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
        params: {id: id},
        headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key': 'a747c78b0emshbb6611ca068d29cp19a88ajsnd06816a76109'
            }
        };

    return (
        <div>
            <h1>ShowGame Component</h1>
            <p>Game nº {id}</p>
        </div>
    )
}