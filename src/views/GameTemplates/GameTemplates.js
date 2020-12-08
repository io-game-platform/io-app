import React, {Component, Fragment} from "react";
import Button from "../../components/Button/Button";
import "./GameTemplates.scss";
import Input from "../../components/Input/Input";
import ApiClient from "../../ApiClient";

class GameTemplates extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            templates: [],
            viewableTemplates: [],
        }
    }

    async componentDidMount() {
        await ApiClient.get("/templates")
            .then(templates => {
                this.setState({
                    templates: templates,
                    viewableTemplates: templates
                });
            });
    }

    render() {
        return (
            <Fragment>
                <div className='page-container'>
                    <div className='template-header'>
                        <Button className='new-template-button' link="/new-template">New Template</Button>
                        <h1 className="page-title">Templates</h1>
                        <Input
                            className="filter-templates"
                            placeholder="Filter"
                            transparent={true}
                            onChange={(e) => {
                                const query = e.target.value;
                                if (!!query && query.trim().length > 0) {
                                    const filteredTemplates = this.state.templates.filter(template => template.name.includes(query.trim()));
                                    this.setState({
                                        viewableTemplates: filteredTemplates
                                    });
                                }
                            }}
                        />
                    </div>
                    {this.state.viewableTemplates.length === 0 && <p className="empty-notifier">No templates to show</p>}
                    {this.state.viewableTemplates.map(template => {
                        return (
                            <div key={template.id} className="my-server">
                                <div className='server-info'>
                                    <h1>{template.name}</h1>
                                    <h2>{template.game} - 0/{template.maxPlayers} Players</h2>
                                </div>
                                {template.open && !!template.code && (
                                    <div>
                                        <p>{template.code}</p>
                                    </div>
                                )}
                                {template.open ?
                                    <div className='server-buttons'>
                                        <Button className='join-server'>Join</Button>
                                        <Button className='close-server'>Close</Button>
                                        <Button className='edit-server'>Edit</Button>
                                    </div>
                                    :
                                    <div className='server-buttons'>
                                        <Button className='open-server'>Open</Button>
                                        <Button className='edit-server'>Edit</Button>
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