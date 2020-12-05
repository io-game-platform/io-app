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
                            <h1>Username: </h1>
                        </div>
                    </div>
                    <div className="placeholder-setting-modification">
                        <Button>Change Username</Button>
                    </div>
                </div>
                <div className="settings-container">
                    <div className="placeholder-setting">
                        <div>
                            <h1>Email:  </h1>
                        </div>
                    </div>
                    <div className="placeholder-setting-modification">
                        <Button>Change Email</Button>
                    </div>
                </div>
                <div className="settings-container">
                    <div className="placeholder-setting">
                        <div>
                            <h1>Password</h1>
                        </div>
                    </div>
                    <div className="placeholder-setting-modification">
                        <Button>Change Password</Button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Settings;