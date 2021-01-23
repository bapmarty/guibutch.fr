import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessRook, faGlassCheers } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import Cookies from 'js-cookie';

import "../assets/scss/components/Game.scss";

const Game = () => {

  const history = useHistory();

  const [players, setPlayers] = useState([]);
  const [rounds, setRounds] = useState([]);
  const [winPoint, setWinPoint] = useState(2);
  const [losePoint, setLosePoint] = useState(-1);
  const [defendPoint, setDefendPoint] = useState(1);

  const roundWin = (i, e) => {
    const playerList = [...players]; 
    playerList[i].point += winPoint;
    setPlayers(playerList);
    Cookies.set('game', players);
  }

  const roundLose = (i, e) => {
    const playerList = [...players]; 
    playerList[i].point += losePoint;
    setPlayers(playerList);
    Cookies.set('game', players);
  }
  
  const roundDefend = (i, e) => {
    const playerList = [...players]; 
    playerList[i].point += defendPoint;
    setPlayers(playerList);
    Cookies.set('game', players);
  }

  const endOfGame = () => {
    Cookies.remove('game');
    history.push('/');
  }
  
  useEffect(() => {
    const cookiePlayers = JSON.parse(Cookies.get('game'));
    setPlayers(cookiePlayers);
    if (cookiePlayers.length >= 5) {
      setWinPoint(3);
    }
  }, []);

  return (
    <>
      <section className="points-arr">
        <div className="players">
          {players.map((player, i) => {
            return (
              <div className="player">
                <div className="name">
                  {player.name.charAt(0).toUpperCase() + player.name.slice(1)}
                </div>
                <div className="point">
                  {player.point}
                </div>
                <div className="buttons">
                  <button className="win-round" onClick={e => roundWin(i, e)}><FontAwesomeIcon icon={faGlassCheers}/></button>
                  <button className="lose-round" onClick={e => roundLose(i, e)}><FontAwesomeIcon icon={faTimesCircle}/></button>
                  <button className="defend-round" onClick={e => roundDefend(i, e)}><FontAwesomeIcon icon={faChessRook}/></button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
      <section className="end-of-game">
          <button onClick={endOfGame}>
            Fin de partie
          </button>
      </section>
    </>
  )
}

export default Game;