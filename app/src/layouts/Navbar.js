import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Cookies from 'js-cookie';

import Logo from "../assets/images/white-guibutch.png";
import "../assets/scss/layouts/Navbar.scss";

const Navbar = () => {

  const [game, setGame] = useState({route: "/create-game", name: "Créer une partie"});

  useEffect(() => {
    Cookies.get('game') ? setGame({route: "/game", name: "Partie en cours"}) : setGame({route: "/create-game", name: "Créer une partie"});
  })
  return (
    <>
      <nav>
        <div>
          <NavLink to="/"><img className="logo" src={Logo} /></NavLink>
        </div>
        <div>
          <ul className="nav-list">
            <li><NavLink to={game.route} className="outlined-button">{game.name}</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;