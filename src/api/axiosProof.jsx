import React, { useState, useEffect } from 'react'
import axios from "axios";

let options = {
method: 'GET',
url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
params: {tag: '3d.fantasy.pvp', platform: 'pc'},
headers: {
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': 'a747c78b0emshbb6611ca068d29cp19a88ajsnd06816a76109'
    }
}; 

export default function AxiosProof(){

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get(options.url, options)
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        }, [])

    let filter_search = 'z'
        
    return (
        <div>
            <h1>Games Search Filter with '{filter_search}':</h1>
            <ul>                    
                {posts.filter(post => post.title.includes(filter_search)).map(posts => (
                    <li key={posts.id}>
                        {posts.title}
                    </li>
        ))}
            </ul>
        </div>
    )


}