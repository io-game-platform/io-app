import React, {Component, Fragment} from "react";

class About extends Component {

    render() {
        return (
            <Fragment>
                <h1>About io.io</h1>
                <p>.io games are simple web-based games where you compete against a large number of players or bots.
                    Often these games area sort 100-player free-for-all competition in which there is a single winner.
                    In other cases, leaderboards track the top players, and the players try to reach the top for as long as possible.
                </p>
                <p>The io.io platform was designed to host a variety of games using a common framework.</p>
                <p>This project is entirely open source, so feel free to check out our GitHub repositories for the
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/io-game-platform/io.io">games</a>
                    or the
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/io-game-platform/io.io">app</a>.
                </p>
                <h3>Contributors</h3>
            </Fragment>
        );
    }

}

export default About;