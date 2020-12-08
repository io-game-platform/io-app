import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import Phaser from "phaser";
import "./PhaserContainer.scss";

const FULLSCREEN = false;

class PhaserContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            game: null,
        }
    }

    componentDidMount() {
        const gameFile = require(`../../games/${this.props.gameId}/game`);
        try {
            const gameConfig = gameFile.config;
            if (!gameConfig) {
                console.error(`Game ${this.props.gameId} is missing config`);
            } else {
                gameConfig.parent = "phaser-container";
                if(FULLSCREEN) {
                    gameConfig.width = window.innerWidth - 15;
                    gameConfig.height = window.innerHeight - 100;
                }
                this.setState({
                    game: new Phaser.Game(gameConfig)
                });
            }
        } catch (e) {
            console.error(e);
        }
    }

    componentWillUnmount() {
        this.state.game.destroy(true);
    }

    render() {
        return(
            <Fragment>
                <div id="phaser-container"/>
            </Fragment>
        );
    }

}

PhaserContainer.propTypes = {
    gameId: PropTypes.number.isRequired,
}

export default PhaserContainer;