import { NavLink } from 'react-router-dom';
import './LeftMenu.css';

const LeftMenu = (props) => {
    const {visible} = props
    return (
        <nav id="nav-menu" className={visible ? 'visible' : 'hidden'}>
            <ul>
                <NavLink to="/">
                    <li>
                        <i className="bi bi-house-door-fill"></i>
                        <p>Accueil</p>
                    </li>
                </NavLink>
                <NavLink to="/shorts">
                    <li>
                        <i className="bi bi-camera-video"></i>
                        <p>Shorts</p>
                    </li>
                </NavLink>
                <NavLink to="/abonnements">
                    <li>
                        <i className="bi bi-subtract"></i>
                        <p>Abonnements</p>
                    </li>
                </NavLink>
                <NavLink to="/biblio">
                    <li>
                        
                        <i className="bi bi-collection-play"></i>
                        <p>Bilbilothéques</p>
                    </li>
                </NavLink>
                <NavLink to="/history">
                    <li>

                        <i className="bi bi-clock-history"></i>
                        <p>Historique</p>
                    </li>
                </NavLink>
            </ul>
        </nav>
    )
}
export default LeftMenu;