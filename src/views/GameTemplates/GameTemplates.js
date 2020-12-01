import React, {Component, Fragment} from "react";
import Button from "../../components/Button/Button";
import "./GameTemplates.scss";

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
                        <Button className='new-template-button' link="/new-template">New Template</Button>
                        <h1>Templates</h1>
                        <div className='input-field'>
                            <input placeholder='Filter'/>
                        </div>
                    </div>
                    {this.state.templates.length === 0 && <p>No templates to show</p>}
                    {this.state.templates.map(template => {
                       return (
                           <div className="my-server">
                               <div className='server-info'>
                                   <h1>My Agar.io Server</h1>
                                   <h2>Agar.io - 0 Players</h2>
                               </div>
                               {template.open ?
                                   <div className='server-buttons'>
                                       <Button className='join-server'>Join</Button> <Button className='close-server'>Close</Button> <Button className='edit-server'>Edit</Button>
                                   </div>
                                   :
                                   <div className='server-buttons'>
                                       <Button className='open-server'>Open</Button> <Button className='edit-server'>Edit</Button>
                                   </div>
                               }
                           </div>
                       );
                    })}
                </div>
			</Fragment>
		);
    }
}

export default GameTemplates;