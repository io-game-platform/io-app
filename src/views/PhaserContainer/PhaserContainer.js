import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import Phaser from "phaser";

class PhaserContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            game: null,
        }
    }

    async componentDidMount() {
        const gameFile = require(`../../games/${this.props.gameId}/game`);
        try {
            const gameConfig = gameFile.config;
            if (!gameConfig) {
                console.error(`Game ${this.props.gameId} is missing config`);
            } else {
                this.setState({
                    game: new Phaser.Game(gameConfig)
                });
            }
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return(
            <Fragment>
                <h1>Phaser Container</h1>
                <div id="phaser-container"/>
            </Fragment>
        );
    }

}

PhaserContainer.propTypes = {
    gameId: PropTypes.number.isRequired,
}

export default PhaserContainer;