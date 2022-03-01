

const SingleGame = ({id}) => {

    

    return (
        <div className="single-game-cont">
            {/* <h1>Single Game Component</h1> */}
            {/* <div>SingleGame {id}</div> */}

            {/* -------------------------------------------------------------------- */}
            <div className="card col-md-8">
              <div className="row g-6">
                <div className="col-md-4">
                  <img src="https://www.freetogame.com/g/452/thumbnail.jpg" className="img-fluid rounded m-2" />
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <p>Title: Insert Title Here</p>
                    <p>Platform: PC / Browser</p>
                    <p>Genre: Insert Genre Here</p>
                    <p>Release date: Example 2017</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card-body">
                    <p>Publisher: Insert Publisher Here</p>
                    <p>Developer: Insert Developer Here</p>
                    <button className="btn btn-success">Play it Free!</button>
                  </div>
                </div>
                <div>
                  <h1>Description</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro necessitatibus molestias accusantium deleniti nisi odit? Corrupti distinctio fugiat sunt sequi! Facere ullam corporis nobis nulla! Labore nobis, praesentium alias sint numquam perspiciatis non iure facilis est maxime. Atque dicta, reiciendis consequatur porro consequuntur facere harum molestiae quae cum aspernatur, assumenda eos. Asperiores ullam quam reprehenderit incidunt pariatur vitae rem, accusantium, eius porro eligendi facere aperiam! Quod rerum porro illum quaerat aperiam architecto accusamus culpa, nostrum sapiente quas ratione laudantium.</p>
              </div>
              <div>
                <h1>Screenshots</h1>
                <div className="screenshot-container">
                  <div className="screenshot col-md-2">Screenshot 1</div>
                  <div className="screenshot col-md-2">Screenshot 2</div>
                  <div className="screenshot col-md-2">Screenshot 3</div>
                </div>
              </div>
              <div>
                <h1>System Requirements</h1>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card-body">
                        <p>Device: PC</p>
                        <p>OS: Windows 7 64-Bit (SP1) or Windows 10 64-Bit</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card-body">
                        <p>Processor: Intel Core i3-4340 or AMD FX-6300</p>
                        <p>Memory: 8GB RAM</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                      <div className="card-body">
                        <p>Storage: 175GB HD space</p>
                        <p>Graphics: NVIDIA GeForce GTX 670 / GeForce GTX 1650 or Radeon HD 7950</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
            {/* -------------------------------------------------------------------- */}
        </div>
    )
}

export default SingleGame