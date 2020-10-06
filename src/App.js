import React from 'react';
import './App.css';
import GameCard from "./components/GameCard";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <GameCard/>
    </div>
  );
}

export default App;
