import React, { useState, useEffect } from 'react'
import axios from "axios";
import SingleGame from '../SingleGame';


export default function By_Release({endpoint, sort, tag, platform}) {

  const [posts, setPosts] = useState([])
  const [active, setActive] = useState('')
  const [gameId, setGameId] = useState(null)
  const [firstId, setFirstId] = useState(null)

  let filter_search = 'x'
  let options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/' + endpoint,
  params: {'sort-by': sort, tag: tag, platform: platform},
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

  console.log('firstId: ' + firstId, 'gameId: ' + gameId)
  
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
    {gameId != null &&
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
      {/* <div>
        {active === 'Single Game' && <SingleGame id={gameId} />}
        {active === 'Single Game' && <button className='btn btn-outline-primary' onClick={()=> setActive('')}>Return</button>}
      </div> */}
      </div>
    </div>
  )
}
