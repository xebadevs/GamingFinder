import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../Wrapper/Footer';

export default function By_Release({search}) {

    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const { game } = useParams()
    const navigate = useNavigate()
    const lower = game.toLowerCase()
    const ucfirst = lower.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
    let filter_search = ucfirst
    
    
    useEffect(() => {
        let options = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'x-rapidapi-key': 'a747c78b0emshbb6611ca068d29cp19a88ajsnd06816a76109'
            }
        };
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
    <div className='search-cont'>
        <Navbar />
        <h1 className='mt-5'><i>Results for:</i>
            <hr className='hr-main' />
            <p>
                {game}
            </p>
        </h1>

        <div className='card-container'>
        {loading &&
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        }
            {posts.filter(post => post.title.toLowerCase().includes(filter_search.toLocaleLowerCase())).map(posts => (
                <div className="card card-gap" key={posts.id} onClick={() => navigate('/game/' + posts.id)}>
                    <img src={posts.thumbnail} className="card-img-top" alt=''></img>
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
        <Footer />
    </div>
    )
}