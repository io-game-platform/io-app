import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import './App.scss';
import GameCard from "./components/GameCard/GameCard";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar>
                <Link to="/games">Games</Link>
                <Link to="/more">More</Link>
                <Link to="/login">Log in</Link>
            </Navbar>
            <h1 style={{color: "white"}}>Game Catalog</h1>
            <GameCard name="Agar.io" description="Play as a circle on a large grid, collect dots, and eat others to grow" updated="10/5/2020" color="#e55039"/>
            <GameCard name="Slither.io" description="Slither around as a snake, don't run into anyone else's tails" updated="10/5/2020" color="#38ada9"/>
            <GameCard name="Paper.io" description="Glide across the room as a block, claiming territory and stealing it from others" updated="10/5/2020" color="#4a69bd"/>
        </BrowserRouter>
    </div>
  );
}

export default App;
