import axios from "axios";
import { useState, useEffect } from 'react';

export default function MainGame({ id }) {

  const [posts, setPosts] = useState([])

  let options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
      params: {id: id},
      headers: {
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
          'x-rapidapi-key': 'a747c78b0emshbb6611ca068d29cp19a88ajsnd06816a76109'
          }
      };

  useEffect(() => {
      axios
          .get(options.url, options)
          .then(res => {
              setPosts(res.data)
              console.log(posts.game_url)
          })
          .catch(err => {
              console.log(err)
          })
  }, [])

  return (
    <div>
      <h1>MainGame Component</h1>
      <div className="card main-card">
        <img src={posts.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {posts.title} </h5>
          <p className="card-text"> {posts.short_description} </p>
          <a href={posts.game_url} target="_blank" className="btn btn-primary">Play for Free!</a>
        </div>
      </div>
    </div>
  )
}