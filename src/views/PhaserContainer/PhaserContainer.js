import React, {Component, Fragment} from "react";
import Phaser from "phaser";
import Game from "./game";

export const config = {
    type: Phaser.AUTO,
    parent: "phaser-container",
    width: 800,
    height: 600,
    scene: Game
}

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
                <div id="phaser-container"></div>
            </Fragment>
        );
    }

}

export default PhaserContainer;