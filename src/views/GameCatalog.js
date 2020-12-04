import React, {Component, Fragment} from "react";
import GameCard from "../components/GameCard/GameCard";
import ApiClient from "../ApiClient";

class GameCatalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
    }

    async componentDidMount() {
        await ApiClient.get("/games")
            .then(games => {
                this.setState({
                    games: games
                });
            });
    }

    render() {
        return (
            <Fragment>
                <h1 style={{color: "white"}}>Game Catalog</h1>
                <a href="/play/1">TEMP Play Game 1\n</a>
                <a href="/play/2">TEMP Play Game 2</a>
                {this.state.games.length > 0 ?
                this.state.games.map(game => (
                    <GameCard
                        key={game.id}
                        id={game.id || "-1"}
                        name={game.name || "Game Title"}
                        description={game.description || "Test description"}
                        updated={game.updated || "10/23/2020"}/>
                )) :
                    <p>No games to show.</p>}
            </Fragment>
        );
    }

}

export default GameCatalog;