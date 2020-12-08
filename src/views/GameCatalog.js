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
                {this.state.games.length > 0 ?
                this.state.games.map(game => (
                    <GameCard
                        key={game.id}
                        id={game.id}
                        name={game.name}
                        description={game.description}
                        updated={game.updated}/>
                )) :
                    <p>No games to show.</p>}
            </Fragment>
        );
    }

}

export default GameCatalog;