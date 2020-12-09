import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.scss';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './views/Settings/Themes/theme';
import { GlobalStyles } from './views/Settings/Themes/global';
import Navbar from "./components/Navbar/Navbar";
import GameCatalog from "./views/GameCatalog/GameCatalog";
import GameDetails from "./views/GameDetails/GameDetails";
import NewTemplate from './views/NewTemplate/NewTemplate';
import GameTemplates from './views/GameTemplates/GameTemplates';
import LoginPage from "./views/LoginPage/LoginPage";
import PhaserContainer from "./views/PhaserContainer/PhaserContainer";
import About from "./views/About/About";
import Settings from "./views/Settings/Settings";
import { useDarkMode } from './views/Settings/useDarkMode';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'dark' ? darkTheme : lightTheme;
  if (!componentMounted) {
      return <div />
  };
  return (
    <div className="App">
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <BrowserRouter>
              <Navbar/>
              <Switch>
                  <Route exact={true} path="/" component={GameCatalog}/>
                  <Route exact={true} path="/games" component={GameCatalog}/>
                  <Route exact={true} path="/login" component={LoginPage}/>
                  <Route exact={true} path="/templates" component={GameTemplates}/>
                  <Route exact={true} path="/new-template" component={NewTemplate}/>
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
