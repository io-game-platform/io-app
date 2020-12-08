import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './GameCard.scss';

class GameCard extends Component {

    render() {
        return (
            <Link to={`/games/${this.props.id}`} className="link-wrapper">
                <div className="game-card">
                    <div style={{backgroundColor: !!this.props.color ? this.props.backgroundColor : "white"}} className="game-image">Image placeholder</div>
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
    updated: PropTypes.string.isRequired
}

export default GameCard;