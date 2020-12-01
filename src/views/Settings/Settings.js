import React from "react";
import "./Settings.scss";
import { Component } from "react";
import Button from "../../components/Button/Button";

class Settings extends Component {
    render() {
        return (
            <div className="page-container">
                <div className="settings-container">
                    <div className="placeholder-setting">
                        <div>
                            <h1>Account Setting</h1>
                        </div>
                    </div>
                    <div className="placeholder-setting-modification">
                        <Button>Something</Button>
                    </div>
                </div>
                <div className="settings-container">
                    <div className="placeholder-setting">
                        <div>
                            <h1>Account Setting</h1>
                        </div>
                    </div>
                    <div className="placeholder-setting-modification">
                        <Button>Something</Button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Settings;