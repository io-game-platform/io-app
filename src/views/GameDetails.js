import React, {Component, Fragment} from "react";

class GameDetails extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment className="page">
                <h1 style={{color: "white"}}>Game Title</h1>
                <p>Game description</p>
                <h2>Players: 0</h2>
                <h2>Last updated 10/16/2020</h2>
            </Fragment>
        );
    }

}

export default GameDetails;