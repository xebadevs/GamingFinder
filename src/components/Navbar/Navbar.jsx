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
                <button className="btn navbar-brand" onClick={() => navigate('/main')}>
                    <div className="logo">
                        <img src={invader} className='inv-logo' alt="" />
                    </div>    
                </button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                        <button className="btn nav-link" id="navbarDropdown" onClick={() => navigate('/by_release')}>
                        by release
                        </button>
                    </li>

                    <li className="nav-item dropdown">
                        <button className="btn nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        by genre
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><button className="dropdown-item" onClick={() => navigate('/mmo')}>MMO</button></li>
                        <li><button className="dropdown-item" onClick={() => navigate('/mmorpg')}>MMORPG</button></li>
                        <li><button className="dropdown-item" onClick={() => navigate('/shooter')}>Shooter</button></li>
                        <li><button className="dropdown-item" onClick={() => navigate('/strategy')}>Strategy</button></li>
                        <li><button className="dropdown-item" onClick={() => navigate('/moba')}>Moba</button></li>
                        <li><button className="dropdown-item" onClick={() => navigate('/card_games')}>Card Games</button></li>
                        <li><button className="dropdown-item" onClick={() => navigate('/racing')}>Racing</button></li>
                        <li><button className="dropdown-item" onClick={() => navigate('/sports')}>Sports</button></li>
                        <li><button className="dropdown-item" onClick={() => navigate('/social')}>Social</button></li>
                        <li><button className="dropdown-item" onClick={() => navigate('/fighting')}>Fighting</button></li>
                        </ul>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <button className="btn nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        by platform
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><button className="btn dropdown-item" onClick={() => navigate('/pc')}>PC</button></li>
                        <li><button className="btn dropdown-item" onClick={() => navigate('/web_browser')}>Web Browser</button></li>
                        </ul>
                    </li>
                    </ul>
                    <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" maxLength={18} autoFocus onChange={e => setSearch(e.target.value)} />
                    <button className="btn btn-search" type="submit" onClick={() => navigate('/search/' + search)}>Search</button>
                    </form>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar