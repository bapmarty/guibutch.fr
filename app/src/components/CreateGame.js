import { useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from 'js-cookie';
import WhiteLogo from "../assets/images/white-guibutch.png";

import "../assets/scss/components/CreateGame.scss";

const CreateGame = () => {

  const history = useHistory();

  const [playersName, setPlayersName] = useState([{name: "", point: 0}, {name: "", point: 0}]);

  const handleChange = e => {
    e.preventDefault();
    setPlayersName([{name: "", point: 0}]);
    for (var i = 1; i < parseInt(e.target.value); i++) {
      setPlayersName(playersName => [...playersName, {name: '', point: 0}]);
    }
  }

  const handleChangePlayerName = (i, e) => {
    const values = [...playersName];
    values[i] = {name: e.target.value, point: 0};
    setPlayersName(values);
  }

  const handleSubmit = e => {
    for (var i = 0; i < playersName.length; i++) {
      if (playersName[i].name === "")
        playersName[i].name = `player${i+1}`;
    }
    Cookies.set('game', playersName);
    history.push('/game');
  }

  return (
    <>
      <section className="create-game">
        <img src={WhiteLogo} />
        <section className="players">
          <p>
            Nombre de joueurs:
            <select
              name="playerCount"
              id="playerCount"
              onChange={handleChange}
            >
              {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value) => {
                return (
                  <option key={value} value={value}>
                    {value}
                  </option>
                )
              })}
            </select>
          </p>
          <ul>
            {
              playersName.map((player, i) => {
                return (
                  <li key={i}>
                    <input 
                      type="text" 
                      name="name" 
                      id={"player" + i}
                      onChange={e => handleChangePlayerName(i, e)} 
                      value={player.name} 
                      placeholder={"joueur " + (i + 1)}
                      autoComplete="false"
                    />
                  </li>
                )
              })
            }
          </ul>
        </section>
        <section className="submit-btn">
          <button onClick={handleSubmit} >Commencer une partie</button>
        </section>
      </section>
    </>
  )
}

export default CreateGame;