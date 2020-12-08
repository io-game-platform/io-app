import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import GameCatalog from "./views/GameCatalog/GameCatalog";
import GameDetails from "./views/GameDetails/GameDetails";
import NewTemplate from './views/NewTemplate/NewTemplate';
import GameTemplates from './views/GameTemplates/GameTemplates';
import LoginPage from "./views/LoginPage/LoginPage";
import PhaserContainer from "./views/PhaserContainer/PhaserContainer";
import About from "./views/About/About";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact={true} path="/" component={GameCatalog}/>
                <Route exact={true} path="/games" component={GameCatalog}/>
                <Route exact={true} path="/login" component={LoginPage}/>
                <Route exact={true} path="/templates" component={GameTemplates}/>
                <Route exact={true} path="/new-template" component={NewTemplate}/>
                <Route exact={true} path="/about" component={About}/>
                <Route path="/games/:gameId" render={({ match }) => {
                    const gameId = parseInt(match.params.gameId);
                    return <GameDetails gameId={gameId}/>
                }}/>
                <Route path="/play/:gameId" render={({match}) => {
                    const gameId = parseInt(match.params.gameId);
                    return <PhaserContainer gameId={gameId}/>
                }}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
