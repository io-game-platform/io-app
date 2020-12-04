import React, {Component, Fragment} from "react";
import Button from "../../components/Button/Button";
import "./GameTemplates.scss";
import Input from "../../components/Input/Input";

class GameTemplates extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            templates: []
        }
    }

    render() {
		return (
			<Fragment>
                <div className='page-container'>
                    <div className='template-header'>
                        <Button className='new-template-button'>New Template</Button>
                        <h1 className="page-title">Templates</h1>
                        <Input placeholder="Filter" transparent/>
                    </div>
                    <div className='my-server'>
                        <div className='server-info'>
                            <h1>My Agar.io Server</h1>
                            <h2>Agar.io - 0 Players</h2>
                        </div>
                        <div className='server-buttons'>
                            <Button className='open-server'>Open</Button> <Button className='edit-server'>Edit</Button> 
                        </div>
                    </div>
                    <div className='my-server'>
                        <div className='server-info'>
                            <h1>My Paper.io Server</h1>
                            <h2>Paper.io - 0 Players</h2>
                        </div>
                        <div className='server-buttons'>
                            <Button className='open-server'>Open</Button> <Button className='edit-server'>Edit</Button> 
                        </div>
                    </div>
                    <div className='my-server'>
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
                </div>
			</Fragment>
		);
    }
}

export default GameTemplates;