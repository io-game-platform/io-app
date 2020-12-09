<<<<<<< HEAD
import React, {useState} from "react";
import "./Settings.scss";
import Button from "../../components/Button/Button";
import Toggle from './Themes/Toggle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Themes/theme';
import { GlobalStyles } from './Themes/global';
import { useDarkMode } from './useDarkMode';

function Settings() {
    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    if (!componentMounted) {
        return <div />
    };

    return ( 
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            
            <div className="page-container">
                <h1 className="page-title">Settings</h1>
                <div className="settings-container">
                    <div className="placeholder-setting">
                        <div>
                        <h1>Current Theme: {theme === 'light' ? 'Light' : 'Dark'}</h1>
                        </div>
                    </div>
                    <div className="placeholder-setting-modification">
                        <a href="/settings">
                        <Toggle theme={theme} toggleTheme={toggleTheme} />
                        </a>
                    </div>
                </div>
=======
import React from "react";
import "./Settings.scss";
import { Component } from "react";
import Button from "../../components/Button/Button";

class Settings extends Component {
    render() {
        return (
            <div className="page-container">
>>>>>>> f2a18bb299e3837d4cd52dd5b7f65ccf3f38c55c
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
<<<<<<< HEAD
        </ThemeProvider>
    );
=======
        );
    }

>>>>>>> f2a18bb299e3837d4cd52dd5b7f65ccf3f38c55c
}

export default Settings;