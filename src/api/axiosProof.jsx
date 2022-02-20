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

function Capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

let inputString = Capitalize('')    

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
        
    let min = posts.title
    console.log(min)


    return (
        <div>
            <h1>Game Titles:</h1>
            <ul>
                
            {posts.filter(post => post.title.includes('Age', 'age')).map(posts => (
        <li key={posts.id}>
          {posts.title}
        </li>
      ))}




                {/* {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))} */}




            </ul>
        </div>
    )


}