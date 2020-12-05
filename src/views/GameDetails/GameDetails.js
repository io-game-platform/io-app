import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import "./GameDetails.scss";
import Button from "../../components/Button/Button";
import ApiClient from "../../ApiClient";
import InputWithButton from "../../components/InputWithButton/InputWithButton";

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
                <div className="game-image">
                    <h1 className="page-title">{!!this.state.game ? this.state.game.name : "Game Title"}</h1>
                    <div className="game-data">
                        <h3>0 players online</h3>
                        <h3>Last updated 10/16/2020</h3>
                    </div>
                </div>
                <p className="game-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur nulla ex, ut sagittis tellus ornare ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque lacinia scelerisque nulla quis bibendum. Mauris dui mi, fringilla non eros ac, faucibus faucibus orci. Maecenas elit augue, malesuada a dignissim varius, efficitur a felis. Fusce rutrum aliquam nisl, sit amet convallis turpis blandit et. Phasellus euismod eget dolor auctor ultricies. Duis ullamcorper non elit id aliquam. Aliquam ultricies dolor vel felis convallis facilisis. In eget orci sit amet purus faucibus pretium nec vitae tortor. Mauris id eros nisl. In nec urna sollicitudin, eleifend nibh vitae, bibendum est. Fusce placerat enim non dapibus suscipit. Etiam vitae fermentum ex, vel aliquet ex.</p>
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
                        <Button link="/play/1">Singleplayer</Button>
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