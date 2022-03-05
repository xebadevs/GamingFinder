import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ShowGame() {

  const [posts, setPosts] = useState([])
  const { id } = useParams()

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
          })
          .catch(err => {
              console.log(err)
          })
  }, [])


  return (
    <div>


    </div>
  )
}