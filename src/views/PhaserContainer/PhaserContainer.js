import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import Phaser from "phaser";
import {config} from "./TestGame";

class PhaserContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            game: null,
        }
    }

    async componentDidMount() {
        this.game = new Phaser.Game(config);
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
    serverId: PropTypes.number.isRequired
}

export default PhaserContainer;