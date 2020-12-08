import React, {Component, Fragment} from "react";
import GameCard from "../../components/GameCard/GameCard";
import ApiClient from "../../ApiClient";
import "./GameCatalog.scss";
import Input from "../../components/Input/Input";

class GameCatalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            viewableGames: []
        }
    }

    async componentDidMount() {
        await ApiClient.get("/games")
            .then(games => {
                this.setState({
                    games: games,
                    viewableGames: games
                });
            });
    }

    render() {
        return (
            <Fragment>
                <div className="catalog-header">
                    <h1 className="page-title">Game Catalog</h1>
                    <Input
                        className="filter-games"
                        placeholder="Filter"
                        transparent={true}
                        onChange={(e) => {
                            const query = e.target.value;
                            if (!!query && query.trim().length > 0) {
                                const filteredGames = this.state.games.filter(game => game.title.toLowerCase().includes(query.trim().toLowerCase()));
                                this.setState({
                                    viewableGames: filteredGames
                                });
                            }
                        }}
                    />
                </div>
                <div className="card-grid">
                    {this.state.viewableGames.length > 0 ?
                    this.state.viewableGames.map(game => (
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