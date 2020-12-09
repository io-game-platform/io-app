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
<<<<<<< HEAD
                <h1 className="page-title">Game Catalog</h1>
=======
                <h1>Game Catalog</h1>
>>>>>>> f2a18bb299e3837d4cd52dd5b7f65ccf3f38c55c
                {this.state.games.length > 0 ?
                this.state.games.map(game => (
                    <GameCard
                        key={game.id}
                        id={game.id}
                        name={game.name}
                        description={game.description}
                        updated={game.updated}/>
                )) :
                    <p style={{color: "white"}}>No games to show</p>}
            </Fragment>
        );
    }

}

export default GameCatalog;