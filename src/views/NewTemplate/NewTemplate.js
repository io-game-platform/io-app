import React, {Component, Fragment} from "react";
import Button from "../../components/Button/Button";
import "./NewTemplate.scss";
import { Link } from "react-router-dom";
import ApiClient from "../../ApiClient";

class NewTemplate extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	name: "",
            game: {
        		id: null,
				name: "No game",
			},
			maxPlayers: 0,
        }
    }

    render() {
		return (
			<Fragment>
				<div className='template-title'>
					<h1>New Server Template</h1>
				</div>
				<div className='server-container'>
					<div>
						<div className='input-field'>
							<input
								placeholder="Server Title"
								onChange={(e) => {
									this.setState({
										name: e.target.value
									});
								}}
							/>
						</div>
					</div>
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
								<span>Max players: {this.state.maxPlayers}</span>
							</div>
							<div className='field'>
								<div className='value-left'>1 player</div>
								<input
									type='range'
									min='1'
									max='100'
									step='1'
									onChange={(e) => {
										this.setState({
											maxPlayers: e.target.value
										});
									}}
								/>
								<div className='value-right'>100 players</div>
							</div>
						</div>
					</div>
					<Link to='/templates'>
						<Button
							className='create-server'
							onClick={async () => {
								await ApiClient.post("/templates", {
									name: this.state.name,
									gameId: this.state.game.id,
									game: this.state.game.name,
									maxPlayers: this.state.maxPlayers
								});
							}}
						>
							Create
						</Button>
					</Link>
				</div>
			</Fragment>
		);
    }
}

export default NewTemplate;