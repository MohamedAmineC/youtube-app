import { Link } from 'react-router-dom';
import logo from './logo.png'

const Header = () => {
    return (
        <header>
            <div className="left-menu">
                <i className="bi bi-list"></i>
                <Link to="/">
                    <img alt="logo" src={logo}/>
                </Link>
            </div>
            <div className="search-bar">
                <form>
                    <input type="search" placeholder="Rechercher" />
                    <button type="submit"><i className="bi bi-search"></i></button>
                </form>
                <i class="bi bi-mic"></i>
            </div>
            <div className="login">
                <ul>
                    <li>
                        <i className="bi bi-three-dots-vertical"></i>
                        <ul>
                            <li></li>
                        </ul>
                    </li>
                    <li>
                    <i className="bi bi-person-circle"></i> Se Connecter
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header;