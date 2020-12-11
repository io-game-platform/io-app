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
    const themeMode = theme === 'dark' ? darkTheme : lightTheme;
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
        </ThemeProvider>
    );
}

export default Settings;