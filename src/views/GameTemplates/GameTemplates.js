import React, {Component, Fragment} from "react";
import Button from "../../components/Button/Button";
//import PropTypes from "prop-types";
//import {apiFetch} from "../../utils";
import "./GameTemplates.scss";
//import { Link } from "react-router-dom";

class GameTemplates extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            game: null
        }
    }

    render() {
		return (
			<Fragment>
				<div className='template-header'>
                    <p>Templates</p>
                    <div className='input-field'>
                        <input placeholder='Filter'/>
                    </div>
                </div>
                <div className='my-server1'>
                    <div className='server-info'>
                        <h1>My Agar.io Server</h1>
                        <h2>Agar.io - 0 Players</h2>
                    </div>
                    <div className='server-buttons'>
                        <Button className='open-server'>Open</Button> <Button className='edit-server'>Edit</Button> 
					</div>
                </div>
                <div className='my-server2'>
                    <div className='server-info'>
                        <h1>My Paper.io Server</h1>
                        <h2>Paper.io - 0 Players</h2>
                    </div>
                    <div className='server-buttons'>
                        <Button className='open-server'>Open</Button> <Button className='edit-server'>Edit</Button> 
					</div>
                </div>
                <div className='my-server3'>
                    <div className='server-info'>
                        <h1>My Paper.io Server</h1>
                        <h2>Paper.io - 0 Players</h2>
                    </div>
                    <div>
                        <p>CODE</p>
                    </div>
                    <div className='server-buttons'>
                        <Button className='join-server'>Join</Button> <Button className='close-server'>Close</Button> <Button className='edit-server'>Edit</Button> 
					</div>
                </div>
			</Fragment>
		);
    }
}

export default GameTemplates;