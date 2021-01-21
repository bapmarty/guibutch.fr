import { NavLink } from "react-router-dom";

import Logo from "../assets/images/logo.svg";
import "../assets/scss/layouts/Navbar.scss";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <img className="logo" src={Logo} />
        </div>
        <div>
          <ul className="nav-list">
            <li><NavLink to="/create-game" id="outlined-button">Créer une partie</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;