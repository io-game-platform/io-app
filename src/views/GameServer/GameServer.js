import React, {Component, Fragment} from "react";
import Button from "../../components/Button/Button";
import "./GameServer.scss";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";

class GameServer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            game: null
        }
    }

    render() {
		return (
			<Fragment>
				<h1 className="page-title">New Server Template</h1>
				<div className='server-container'>
					<Input placeholder="Server Title"/>
					<div className='game-title'>
						<h1>0 players ingame</h1>
						<h1>Owned by username</h1>
					</div>
				</div>
				<div className='game-select'> 
					<h1>Selected Game: Example</h1>
					<div>
						<div className='range'>
							<div id='slider-value'>
								<span>Max players: 100</span>
							</div>
							<div className='field'>
								<div className='value-left'>1 player</div>
								<input type='range' min='1' max='100' value='100' step='1'/>
								<div className='value-right'>100 players</div>
							</div>
						</div>
					</div>
					<Link to='/templates'>
						<Button className='create-server'>Create</Button>
					</Link>
				</div>
			</Fragment>
		);
    }
}

export default GameServer;