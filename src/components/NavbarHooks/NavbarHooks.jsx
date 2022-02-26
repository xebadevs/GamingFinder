import { useState } from "react"
import By_Release from './By_Release'
import MMO from "./MMO"
import MMORPG from "./MMORPG"
import Shooter from './Shooter'
import Strategy from './Strategy'
import Moba from './Moba'
import Card_Games from './Card_Games'
import Racing from './Racing'
import Sports from './Sports'
import Social from './Social'
import Fighting from './Fighting'
import Web_Browser from "./Web_Browser"

import By_Platform from "./By_Platform"


const NavbarHooks = () => {

    const [active, setActive] = useState('')    

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">LOGO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                        <a className="nav-link" id="navbarDropdown" role="button" href="#" onClick={() => setActive('By Release')}>
                        by release
                        </a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        by genre
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#" onClick={() => setActive('MMO')}>MMO</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setActive('MMORPG')}>MMORPG</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setActive('Shooter')}>Shooter</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setActive('Strategy')}>Strategy</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setActive('Moba')}>Moba</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setActive('Card Games')}>Card Games</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setActive('Racing')}>Racing</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setActive('Sports')}>Sports</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setActive('Social')}>Social</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setActive('Fighting')}>Fighting</a></li>
                        </ul>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        by platform
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#" onClick={() => setActive('PC')}>PC</a></li>
                        <li><a className="dropdown-item" href="#" onClick={() => setActive('Web Browser')}>Web Browser</a></li>
                        </ul>
                    </li>
                    </ul>
                    <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>

            <div>
                {/* {active === 'By Release' && <By_Release tag='2d' />} */}
                {active === 'By Release' && <By_Release endpoint='games' sort='release_date' tag='2d' />}

                {active === 'MMO' && <MMO endpoint='filter' tag='mmo' />}
                {active === 'MMORPG' && <MMORPG />}
                {active === 'Shooter' && <Shooter />}
                {active === 'Strategy' && <Strategy />}
                {active === 'Moba' && <Moba />}
                {active === 'Card Games' && <Card_Games />}
                {active === 'Racing' && <Racing />}
                {active === 'Sports' && <Sports />}
                {active === 'Social' && <Social />}
                {active === 'Fighting' && <Fighting />}

                {active === 'By Platform' && <By_Platform />}

                {active === 'PC' && <By_Platform endpoint='games' platform='pc' title='PC' />}
                {active === 'Web Browser' && <Web_Browser endpoint='games' platform='browser' />}

            </div>
        </div>
    )
}

export default NavbarHooks