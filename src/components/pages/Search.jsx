import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function By_Release({search}) {

    const [posts, setPosts] = useState([])
    const [gameId, setGameId] = useState(null)
    const [firstId, setFirstId] = useState(null)
    const { game } = useParams()
    const navigate = useNavigate()

    const lower = game.toLowerCase()
    const alt_game = lower.charAt(0).toUpperCase() + lower.slice(1)
    console.log(alt_game)

    let filter_search = alt_game
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
          
    console.log(posts)

  return (
    <div>
        <Navbar />
        <h1 className='mt-5'><i>Results for:</i>
            <hr className='hr-main' />
            <p>
                {game}
            </p>
        </h1>

        <div className='card-container'>
            {posts.filter(post => post.title.includes(filter_search)).map(posts => (
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