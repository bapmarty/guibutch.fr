import { NavLink } from "react-router-dom";
import Cookies from 'js-cookie';

import Logo from "../assets/images/white-guibutch.png";
import "../assets/scss/layouts/Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <NavLink to="/"><img className="logo" src={Logo} /></NavLink>
        </div>
        <div>
          <ul className="nav-list">
            {Cookies.get('game') ? (<li><NavLink to="/game" className="outlined-button">Partie en cours</NavLink></li>) : (<li><NavLink to="/create-game" className="outlined-button">Créer une partie</NavLink></li>)}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;