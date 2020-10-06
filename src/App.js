import React from 'react';
import {BrowserRouter, Link} from "react-router-dom";
import './App.css';
import GameCard from "./components/GameCard";
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
            <GameCard/>
        </BrowserRouter>
    </div>
  );
}

export default App;
