import { useState } from "react"
import { useNavigate } from "react-router-dom"
import invader from '../../assets/invader-logo.png'

const Navbar = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <a className="navbar-brand" onClick={() => navigate('/main')}>
                    <span className="logo">
                        <img src={invader} className='inv-logo' />
                    </span>    
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                        <a className="nav-link" id="navbarDropdown" role="button" href="#" onClick={() => navigate('/by_release')}>
                        by release
                        </a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        by genre
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" onClick={() => navigate('/mmo')}>MMO</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/mmorpg')}>MMORPG</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/shooter')}>Shooter</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/strategy')}>Strategy</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/moba')}>Moba</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/card_games')}>Card Games</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/racing')}>Racing</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/sports')}>Sports</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/social')}>Social</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/fighting')}>Fighting</a></li>
                        </ul>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        by platform
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" onClick={() => navigate('/pc')}>PC</a></li>
                        <li><a className="dropdown-item" onClick={() => navigate('/web_browser')}>Web Browser</a></li>
                        </ul>
                    </li>
                    </ul>
                    <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" maxLength={18} onChange={e => setSearch(e.target.value)} />
                    <button className="btn btn-search" type="submit" onClick={() => navigate('/search/' + search)}>Search</button>
                    </form>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar