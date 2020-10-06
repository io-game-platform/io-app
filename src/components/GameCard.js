import React, {Component} from "react";

class GameCard extends Component {

    render() {
        return (
            <div className="game-card">
                <div className="game-image">Image placeholder</div>
                <div className="game-info">
                    <h1>Game Name</h1>
                    <p>Description</p>
                    <p>Last updated 10/5/2020</p>
                </div>
            </div>
        );
    }

}

export default GameCard;