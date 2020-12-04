import React, {Component} from "react";
import './Navbar.scss'
import AppLogo from "../../app-logo.png";
import {Link} from "react-router-dom";

class Navbar extends Component {

    render() {
        return (
            <div className="nav">
                <div className="nav-left">
                    <img alt="io.io" src={AppLogo}/>
                    <h1>io.io</h1>
                    <Link to="/games">Games</Link>
                    <Link to="/templates">Templates</Link>
                    <Link to="/about">About</Link>
                </div>
                <div className="nav-right">
                    <Link to="/login">Log in</Link>
                </div>
            </div>
        );
    }

}

export default Navbar;