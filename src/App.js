import React, { useState } from 'react';
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import './App.scss';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './views/Settings/Themes/theme';
import { GlobalStyles } from './views/Settings/Themes/global';
import Toggle from './views/Settings/Themes/Toggle';
import Navbar from "./components/Navbar/Navbar";
import GameCatalog from "./views/GameCatalog";
import GameDetails from "./views/GameDetails/GameDetails";
import GameServer from './views/GameServer/GameServer';
import GameTemplates from './views/GameTemplates/GameTemplates';
import LoginPage from "./views/LoginPage";
import PhaserContainer from "./views/PhaserContainer/PhaserContainer";
import About from "./views/About/About";
import Settings from "./views/Settings/Settings";

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <div className="App">
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <BrowserRouter>
                <Navbar>
                    <Link to="/games">Games</Link>
                    <Link to="/templates">Templates</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login">Log in</Link>
                    <Link to="/settings">Settings</Link>
                    <Toggle theme={theme} toggleTheme={toggleTheme} />
                </Navbar>
                <Switch>
                    <Route exact={true} path="/" component={GameCatalog}/>
                    <Route exact={true} path="/games" component={GameCatalog}/>
                    <Route exact={true} path="/login" component={LoginPage}/>
                    <Route exact={true} path="/templates" component={GameTemplates}/>
                    <Route exact={true} path="/new-template" component={GameServer}/>
                    <Route exact={true} path="/about" component={About}/>
                    <Route exact={true} path="/settings" component={Settings}/>
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
        </ThemeProvider>
    </div>
  );
}

export default App;
