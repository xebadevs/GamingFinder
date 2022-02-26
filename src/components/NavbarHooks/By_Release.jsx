import React, { useState, useEffect } from 'react'
import axios from "axios";



export default function By_Release({endpoint, sort, tag, platform}) {

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
      <h1>By Release Component</h1>
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
