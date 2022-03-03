import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function ShowGame() {

    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const { id } = useParams()
    console.log(id)

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
            <Navbar />
            <h1>ShowGame Component</h1>
            <p>Game nº {id}</p>
            <p>Game title: {posts.title}</p>
        </div>
    )
}