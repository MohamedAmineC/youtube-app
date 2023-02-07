import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    const {toggle} = props;
    return (
        <header>
        <div id="left-menu">
            <i class="bi bi-list" id="toggle" onClick={toggle} ></i>
            <div id="logo">
                <Link href="./index.html">
                    <i class="bi bi-youtube"></i>
                    <p>Youtube</p>
                </Link>
            </div>
        </div>
        <div id="search-bar">
            <form action="#">
                <div id="search">
                    <input type="search" placeholder="Rechercher" />
                </div>
                <div id="submit">
                    <button><i class="bi bi-search"></i></button>
                </div>
            </form>
        </div>
        <div id="right-menu">
            <i class="bi bi-three-dots-vertical"></i>
            <div id="login">
                <i class="bi bi-person"></i>
                <p>Se Connecter</p>
            </div>
        </div>
    </header>
    )
}
export default Header;