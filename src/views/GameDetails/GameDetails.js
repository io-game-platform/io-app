import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import "./GameDetails.scss";
import Button from "../../components/Button/Button";
import ApiClient from "../../ApiClient";
import InputWithButton from "../../components/InputWithButton/InputWithButton";
import GameBanner from "../../games/1/game-banner.png";

class GameDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            game: null
        }
    }

    async componentDidMount() {
        await ApiClient.get(`/games/${this.props.gameId}`)
            .then(game => {
                this.setState({
                    game: game
                });
            });
    }

    render() {
        return (
            <Fragment>
                <div className="image-header">
                    <img className="header-image" src={GameBanner} alt="Game Banner"/>
                    <div className="header-content">
                        <h1 className="page-title">{this.state.game.title}</h1>
                        <div className="game-data">
                            <h3>0 players online</h3>
                            <h3>Last updated {this.state.game.updated}</h3>
                        </div>
                    </div>
                </div>
                <p className="game-description">{this.state.game.description}</p>
                <div className="game-mode-container">
                    <div className="game-mode-section">
                        <h2>Online</h2>
                        <p>Join an existing server to instantly start playing.</p>
                        <Button>Join Server</Button>
                        <InputWithButton
                            className="code-input"
                            placeholder="Enter code"
                            buttonContent="Go"
                        />
                    </div>
                    <div className="game-mode-section">
                        <h2>Local</h2>
                        <p>Play singleplayer or create a new game server.</p>
                        <a href={`io.binaryaura.net/play/${this.props.gameId}`}>
                            <Button link={`/play/${this.props.gameId}`}>Singleplayer</Button>
                        </a>
                        <Button className="create-server-button">Create Server</Button>
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