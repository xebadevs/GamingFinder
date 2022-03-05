import React, { useState, useEffect } from 'react'
import axios from "axios";
import Pagination from '../Pagination';
import { useNavigate } from "react-router-dom";


export default function By_release() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(50)
  const navigate = useNavigate()

  // Get current posts
  const indexOfLastPost = 12
  const indexOfFirstPost = 0

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  let options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {'sort-by': 'release-date'},
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
      <h1>Latests Component</h1>
      <div className='card-container'>
        {currentPosts.map(posts => (
            <div className="card card-gap" key={posts.id} onClick={() => navigate('/game/' + posts.id)}>
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
    </div>
  )
}
