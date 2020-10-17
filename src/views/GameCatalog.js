import React, {Component, Fragment} from "react";
import GameCard from "../components/GameCard/GameCard";
import {apiFetch} from "../utils"

class GameCatalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
    }

    async componentDidMount() {
        await apiFetch("/games")
            .then(games => {
                this.setState({
                    games: games
                });
            });
    }

    render() {
        return (
            <Fragment className="page">
                <h1 style={{color: "white"}}>Game Catalog</h1>
                <GameCard
                    id={1}
                    name="Agar.io"
                    description="Play as a circle on a large grid, collect dots, and eat others to grow"
                    updated="10/5/2020"
                    color="#e55039"
                    link="agar-io"/>
                <GameCard
                    id={2}
                    name="Slither.io"
                    description="Slither around as a snake, don't run into anyone else's tails"
                    updated="10/5/2020"
                    color="#38ada9"
                    link="/slither-io"/>
                <GameCard
                    id={3}
                    name="Paper.io"
                    description="Glide across the room as a block, claiming territory and stealing it from others"
                    updated="10/5/2020"
                    color="#4a69bd"
                    link="/paper"/>
            </Fragment>
        );
    }

}

export default GameCatalog;