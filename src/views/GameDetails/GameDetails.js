import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {apiFetch} from "../../utils";
import "./GameDetails.scss";

class GameDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            game: null
        }
    }

    async componentDidMount() {
        await apiFetch(`/games/${this.props.gameId}`)
            .then(game => {
                this.setState({
                    game: game
                });
            });
    }

    render() {
        return (
            <Fragment>
                <div className="game-image">
                    <h1>Game Title</h1>
                    <div className="game-data">
                        <h3>0 players online</h3>
                        <h3>Last updated 10/16/2020</h3>
                    </div>
                </div>
                <p className="game-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur nulla ex, ut sagittis tellus ornare ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque lacinia scelerisque nulla quis bibendum. Mauris dui mi, fringilla non eros ac, faucibus faucibus orci. Maecenas elit augue, malesuada a dignissim varius, efficitur a felis. Fusce rutrum aliquam nisl, sit amet convallis turpis blandit et. Phasellus euismod eget dolor auctor ultricies. Duis ullamcorper non elit id aliquam. Aliquam ultricies dolor vel felis convallis facilisis. In eget orci sit amet purus faucibus pretium nec vitae tortor. Mauris id eros nisl. In nec urna sollicitudin, eleifend nibh vitae, bibendum est. Fusce placerat enim non dapibus suscipit. Etiam vitae fermentum ex, vel aliquet ex.</p>
                <div className="game-mode-container">
                    <div>
                        <h2>Online</h2>
                        <p>Join an existing server to instantly start playing.</p>
                        <button className="online-button">Join Server</button>
                    </div>
                    <div>
                        <h2>Local</h2>
                        <p>Use a code to play on a server with friends.</p>
                        <div className="input-field">
                            <input placeholder="Enter code"/>
                            <button className="enter-button">Go</button>
                        </div>
                        <button className="local-button">Create Server</button>
                    </div>
                </div>
            </Fragment>
        );
    }

}

GameDetails.propTypes = {
    gameId: PropTypes.number.isRequired
}

export default GameDetails;