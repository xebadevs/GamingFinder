import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function ShowGame() {

    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState([])
    const [screenshots, setScreenshots] = useState([])
    const [image1, setImage1] = useState('')
    const [image3, setImage2] = useState('')
    const [image2, setImage3] = useState('')
    const [requirements, setRequirements] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()

console.log(requirements)

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
          setScreenshots(res.data.screenshots)
          setRequirements(res.data.minimum_system_requirements)
          window.scrollTo(0, 0)
          setImage1(res.data.screenshots[0].image)
          setImage2(res.data.screenshots[1].image)
          setImage3(res.data.screenshots[2].image)
          setLoading(false)
      })
      .catch(err => {
        console.log(err)
        navigate('./error')
      })
    }, [])


    return (
      <div>
          <Navbar />

          <div>
          </div>

          <div className="single-game-cont mt-5 mb-5">
          <div className="card col-md-8">
            <div className="row g-6">
              <div className="col-md-4">
                <img src={posts.thumbnail} className="img-fluid rounded m-3" />
              </div>
              <div className="col-md-4">
                <div className="card-body mt-4 p-height">
                  <p>Title: {posts.title}</p>
                  <p>Platform: {posts.platform}</p>
                  <p>Genre: {posts.genre}</p>
                  <p>Release date: {posts.release_date}</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-body mt-4 p-height">
                  <p>Publisher: {posts.publisher}</p>
                  <p>Developer: {posts.developer}</p>
                  <br />
                  <a href={posts.game_url} target="_blank" className="btn btn-play">Play it Free!</a>
                </div>
              </div>

              <div>
                <hr />
                <h1>Description</h1>
                {loading && <h2>Loading...</h2>}
                <p className="description m-4">{posts.description}</p>
            </div>

            <div>
            <hr />
              <h1>Screenshots</h1>
              {loading && <h2>Loading...</h2>}
              <div className="screenshot-container">
                  <div className="screenshot col-md-2 mt-3">
                      <img src={image1} className="screenshot col-md-2" />
                  </div>
                  <div className="screenshot col-md-2 mt-3">
                    <img src={image2} className="screenshot col-md-2" />
                  </div>
                  <div className="screenshot col-md-2 mt-3">
                    <img src={image3} className="screenshot col-md-2" />
                  </div>
              </div>
            </div>

            {requirements != undefined &&
            <div>
            <hr />
              <h1>System Requirements</h1>
                <div className="row">
                  <div className="col-md-4 mt-3">
                    <div className="card-body p-height">
                      <p>OS: {requirements.os}</p>
                      <p>Processor: {requirements.processor}</p>
                    </div>
                  </div>
                  <div className="col-md-4 mt-3">
                    <div className="card-body p-height">
                      <p>Memory: {requirements.memory}</p>
                      <p>Storage: {requirements.storage}</p>
                  </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="card-body p-height">
                      <p>Graphics: {requirements.graphics}</p>
                  </div>
                </div>
              </div>
            </div>
              }
            </div>
          </div>
      </div>

      <br />

      </div>
    )
}