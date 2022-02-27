import React, { useState, useEffect } from 'react'
import axios from "axios";

export default function By_Release({endpoint, sort, tag, platform, title}) {
  
  let options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/' + endpoint,
  params: {'sort-by': sort, tag: tag, platform: platform},
  headers: {
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key': 'a747c78b0emshbb6611ca068d29cp19a88ajsnd06816a76109'
      }
  }; 

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    axios
        .get(options.url, options)
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
        setLoading(false)
    }, [])


  return (    
    <div>
      <h1>{title} GAMES (PC Meanwhile)</h1>
      {loading && <h2>Loading...</h2>}
      <ul>                    
        {posts.map(posts => (
          <li key={posts.id}>
            {posts.title}
          </li>
        ))}
      </ul>


    </div>
  )
}