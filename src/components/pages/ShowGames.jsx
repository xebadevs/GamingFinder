import React, { useState, useEffect } from 'react'
import axios from "axios";
import Pagination from '../Pagination';
import SingleGame from '../SingleGame';


export default function ShowGames({endpoint, sort, tag, platform, title}) {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(50)
    const [firstId, setFirstId] = useState(null)
    const [active, setActive] = useState('')
    const [gameId, setGameId] = useState(null)

      // Get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    let options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/' + endpoint,
        params: {'sort-by': sort, tag: tag, platform: platform},
        headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key': 'a747c78b0emshbb6611ca068d29cp19a88ajsnd06816a76109'
            }
        }; 

    function showGame(id){
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
            setLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (

        <div>
        <h1>{title} GAMES</h1>
        {loading && <h2>Loading...</h2>}
        {gameId != null && <SingleGame id={gameId} from='By Platform' />}
  
  
        {gameId === null &&
        <div>
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
          <div className='card-container'>
            {currentPosts.map(posts => (
              <div className="card card-gap" key={posts.id} onClick={() => showGame(posts.id)}>
                <img src={posts.thumbnail} className="card-img-top"></img>
                <div className='card-body'>
                  <h4 className='card-title' key={posts.id}>
                    {posts.title}
                  </h4>
                  <div>
                    <p>{posts.release_date}</p>
                    <p>{posts.platform}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
        </div>
        }
  
  
      </div>

  )
}