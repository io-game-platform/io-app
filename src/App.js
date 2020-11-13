import React from 'react';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import GameCatalog from "./views/GameCatalog";
import GameDetails from "./views/GameDetails/GameDetails";
import GameServer from './views/GameServer/GameServer';
import GameTemplates from './views/GameTemplates/GameTemplates';
import LoginPage from "./views/LoginPage";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar>
                <Link to="/games">Games</Link>
                <Link to="/templates">Templates</Link>
                <Link to="/login">Log in</Link>
            </Navbar>
            <Switch>
                <Route exact={true} path="/" component={GameCatalog}/>
                <Route exact={true} path="/games" component={GameCatalog}/>
                <Route exact={true} path="/login" component={LoginPage}/>
                <Route exact={true} path="/templates" component={GameTemplates}/>
                <Route exact={true} path="/new-template" component={GameServer}/>
                <Route path="/games/:gameId" render={({ match }) => {
                    const gameId = parseInt(match.params.gameId);
                    return <GameDetails gameId={gameId}/>
                }}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
