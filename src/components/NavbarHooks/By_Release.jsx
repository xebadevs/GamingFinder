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
  const [active, setActive] = useState('')
  const [gameId, setGameId] = useState(null)
  
  let filter_search = 'x'

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

  function getGameId(id){
    // setActive('Single Game')
    setGameId(id)
  }

  return (
    <div>
      <h1>By Release Component</h1>
    {gameId != null &&
      <div>
        Renderización del juego ID {gameId}
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
      {/* <div>
        {active === 'Single Game' && <SingleGame id={gameId} />}
        {active === 'Single Game' && <button className='btn btn-outline-primary' onClick={()=> setActive('')}>Return</button>}
      </div> */}
      </div>
    </div>
  )
}
