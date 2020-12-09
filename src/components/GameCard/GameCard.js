import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './GameCard.scss';

class GameCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: null
        }
    }

    componentDidMount() {
        try {
            const gameImage = require(`../../games/${this.props.id}/game-image.png`);
            if (gameImage) {
                this.setState({
                    image: gameImage
                });
            }
        } catch (e) {
            console.warn(`${e.message}: The game of id ${this.props.id} does not have game-image.png`);
        }
    }

    render() {
        return (
            <Link to={`/games/${this.props.id}`} className="link-wrapper">
                <div className="game-card">
                    {!!this.state.image ?
                        <img className="game-image" src={this.state.image} alt="Game"/> :
                        <div className="game-image" style={{backgroundColor: !!this.props.color ? this.props.color : "#2d2d2d"}}/>
                    }
                    <div className="game-info">
                        <h3>{!!this.props.name ? this.props.name : "Game Title"}</h3>
                        <p>{!!this.props.description ? this.props.description : ""}</p>
                        <h5>Last updated {!!this.props.updated ? this.props.updated : "12/7/2020"}</h5>
                    </div>
                </div>
            </Link>
        );
    }

}

GameCard.propTypes = {
    id: PropTypes.number.isRequired,
    color: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    updated: PropTypes.string.isRequired,
}

export default GameCard;