import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function MainGame({ id }) {

  const [posts, setPosts] = useState([])
  const navigate = useNavigate()
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

  useEffect(() => {
      axios
          .get(options.url, options)
          .then(res => {
            setPosts(res.data)
            setLoading(false)
          })
          .catch(err => {
              console.log(err)
          })
  }, [])

  return (
    <div>
      <div>
        {loading && <h2 className="main-loading">Loading...</h2>}
      </div>
      {loading === false &&
      <div className="main-card m-3">
        <div className="card main-card" onClick={() => navigate('/game/' + posts.id)}>
          <img src={posts.thumbnail} className="card-img-top" />
          <div className="card-body card-content">
            <h5 className="card-title"> {posts.title} </h5>
            <p className="card-text"> {posts.short_description} </p>
            <div>
              <a href={posts.game_url} target="_blank" className="btn btn-play">
                  Play for free!
              </a>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}