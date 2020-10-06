import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import './GameCard.scss';

class GameCard extends Component {

    render() {
        return (
            <Link to={`/`} className="link-wrapper">
                <div className="game-card">
                    <div style={{backgroundColor: this.props.color}} className="game-image">Image placeholder</div>
                    <div className="game-info">
                        <h3>{this.props.name}</h3>
                        <p>{this.props.description}</p>
                        <h5>Last updated {this.props.updated}</h5>
                    </div>
                </div>
            </Link>
        );
    }

}

GameCard.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    updated: PropTypes.string.isRequired
}

export default GameCard;