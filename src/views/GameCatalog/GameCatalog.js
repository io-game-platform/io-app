import React, {Component, Fragment} from "react";
import GameCard from "../../components/GameCard/GameCard";
import ApiClient from "../../ApiClient";
import "./GameCatalog.scss";

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
                <h1 className="page-title">Game Catalog</h1>
                <div className="card-grid">
                    {this.state.games.length > 0 ?
                    this.state.games.map(game => (
                        <GameCard
                            key={game.id}
                            id={game.id}
                            name={game.name}
                            description={game.description}
                            updated={game.updated}/>
                    )) :
                        <p className="empty-notifier">No games to show</p>}
                </div>
            </Fragment>
        );
    }

}

export default GameCatalog;