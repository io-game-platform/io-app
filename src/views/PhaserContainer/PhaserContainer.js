import React, {Component, Fragment} from "react";
import Phaser from "phaser";
import {config} from "./TestGame";

class PhaserContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            game: null,
        }
    }

    componentDidMount() {
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

export default PhaserContainer;