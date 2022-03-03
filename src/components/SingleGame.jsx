import axios from "axios";
import React, { useState, useEffect } from 'react'
import By_Platform from './NavbarHooks/By_Platform'

const SingleGame = ({id, from}) => {

  const [gameData, setGameData] = useState('')
  const [fromWhere, setFromWhere] = useState('')

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
            setGameData(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    // const img1 = gameData.screenshots[0].image
    // const img2 = gameData.screenshots[1].image
    // const img3 = gameData.screenshots[2].image

    function goTo(){
      setFromWhere(from)
      setGameData('')
      // console.log('FromWhere: ' + fromWhere)
    }

    console.log(gameData.title, gameData.id)
    console.log('FromWhere: ' + fromWhere)

    return (
      <div>
        <div className="single-game-cont">
            {/* <h1>Single Game Component</h1> */}
            {/* <div>SingleGame {id}</div> */}

            <div className="card col-md-8">
              <div className="row g-6">
                <div className="col-md-4">
                  <img src={gameData.thumbnail} className="img-fluid rounded m-2" />
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <p>Title: {gameData.title}</p>
                    <p>Platform: {gameData.platform}</p>
                    <p>Genre: {gameData.genre}</p>
                    <p>Release date: {gameData.release_date}</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <p>Publisher: {gameData.publisher}</p>
                    <p>Developer: {gameData.developer}</p>
                    <button className="btn btn-success">Play it Free!</button>
                  </div>
                </div>

                <div>
                  <hr />
                  <h1>Description</h1>
                  <p className="description m-2">{gameData.description}</p>
              </div>

              <div>
              <hr />
                <h1>Screenshots</h1>
                <div className="screenshot-container">
                  <img src="" alt="" className="screenshot col-md-2" />
                  <img src="" alt="" className="screenshot col-md-2" />
                  <img src="" alt="" className="screenshot col-md-2" />
                </div>
              </div>


              <div>
              <hr />
                <h1>System Requirements</h1>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card-body">
                        <p>OS: Windows 7 64-Bit (SP1) or Windows 10 64-Bit</p>
                        <p>Processor: Intel Core i3-4340 or AMD FX-6300</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card-body">
                        <p>Memory: 8GB RAM</p>
                        <p>Storage: 175GB HD space</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                      <div className="card-body">
                        <p>Graphics: NVIDIA GeForce GTX 670 / GeForce GTX 1650 or Radeon HD 7950</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
        </div>

        <div>
          <button className="btn btn-primary" onClick={goTo}>Return</button>
        </div>

        <div>
          {fromWhere === 'By Platform' && <By_Platform endpoint='games' platform='pc' title='PC'/>}
        </div>
      </div>
    )
}

export default SingleGame