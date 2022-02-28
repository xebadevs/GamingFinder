import React, { useState, useEffect } from 'react'
import axios from "axios";
import Posts from '../Posts';
import Pagination from '../Pagination';

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
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(50)


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


  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)


  return (    
    <div>
      <h1>{title} GAMES (PC Meanwhile)</h1>
      {loading && <h2>Loading...</h2>}
        {currentPosts.map(posts => (

          <div className="card" key={posts.id}>
            <img src={posts.thumbnail} className="card-img-top" alt="..."></img>
            <li key={posts.id}>
              {posts.title}
            </li>
          </div>
        ))}
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  )
}
