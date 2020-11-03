import React from 'react';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import GameCatalog from "./views/GameCatalog";
import GameDetails from "./views/GameDetails/GameDetails";
import PhaserContainer from "./views/PhaserContainer/PhaserContainer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar>
                <Link to="/games">Games</Link>
                <Link to="/more">More</Link>
                <Link to="/login">Log in</Link>
            </Navbar>
            <Switch>
                <Route exact={true} path="/" component={GameCatalog}/>
                <Route exact={true} path="/games" component={GameCatalog}/>
                <Route path="/games/:gameId" render={({ match }) => {
                    const gameId = parseInt(match.params.gameId);
                    return <GameDetails gameId={gameId}/>
                }}/>
                <Route exact={true} path="/play/:gameId/:serverId" render={({match}) => {
                    const gameId = parseInt(match.params.gameId);
                    const serverId = parseInt(match.params.serverId);
                    return <PhaserContainer gameId={gameId} serverId={serverId}/>
                }}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
