import React, { useState, useEffect } from 'react'
import axios from "axios";

let tag1 = 'pvp'
let tag2 = 'fantasy'
let tag3 = '3d'

let tags = tag1 + '.' + tag2 + '.' + tag3

let options = {
method: 'GET',
url: 'https://free-to-play-games-database.p.rapidapi.com/api/filter',
params: {_limit: 10, tag: tags, platform: 'pc'},
headers: {
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': 'a747c78b0emshbb6611ca068d29cp19a88ajsnd06816a76109'
    }
}; 

export default function AxiosProof(){

    const [posts, setPosts] = useState([])
    let condition = true
    let filter_search = 'a'

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

        
    return (
        <div>
            <h1>Games Search Filter with '{filter_search}':</h1>
            <ul>                    
                {condition && posts.filter(post => post.title.includes(filter_search)).map(posts => (
                    <li key={posts.id}>
                        {posts.title}
                    </li>
                ))}
            </ul>
        </div>
    )


}