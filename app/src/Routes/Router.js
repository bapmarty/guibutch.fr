import { Switch, Redirect, Route } from "react-router-dom";
import Cookies from 'js-cookie';

import Home from "../components/Home";
import Rules from "../components/Rules";
import CreateGame from "../components/CreateGame";
import Game from "../components/Game";

const Router = () => {
  return (
    <Switch>
        <PrivateRoute exact path="/game" component={Game} />

        <Route exact path="/" component={Home} />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/create-game" component={CreateGame} />

        <Redirect to="/" />
    </Switch>
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route 
      exact 
      {...rest}
      render = { props => Cookies.get("game") ? (<Component {...props} />) : (<Redirect to="/create-game" />)}
    />
  );
}

export default Router;