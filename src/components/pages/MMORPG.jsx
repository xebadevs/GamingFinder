import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import axios from "axios";
import SingleGame from '../SingleGame';
import { useParams } from 'react-router-dom';


export default function By_Release({search}) {

  const [posts, setPosts] = useState([])
  const [active, setActive] = useState('')
  const [gameId, setGameId] = useState(null)
  const [firstId, setFirstId] = useState(null)
  const { game } = useParams()

  console.log(game)

  let filter_search = {search}
  let options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
  headers: {
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key': 'a747c78b0emshbb6611ca068d29cp19a88ajsnd06816a76109'
      }
  }; 

  function getGameId(id){
    setFirstId(id)
    setGameId(id)
    // setActive(false)
  }

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
      <Navbar />
      <h1>MMORPG Component</h1>
    {/* {gameId != null &&
      <div>
        <SingleGame id={gameId}/>
        <p>Id Nº: {gameId}</p>
      </div>
    }

      <div>
        {active === '' &&
        <div>
          <ul>                    
            {posts.filter(post => post.title.includes(filter_search)).map(posts => (
              <li key={posts.id} onClick={()=> getGameId(posts.id)}>
                {posts.title}
              </li>
            ))}
          </ul>
        </div>
        }
      </div> */}
    </div>
  )
}
