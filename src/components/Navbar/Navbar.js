import React, {Component} from "react";
import './Navbar.scss'
import AppLogo from "../../app-logo.png";

class Navbar extends Component {

    render() {
        return (
            <div className="nav">
                <img alt="io.io" src={AppLogo}/>
                <h1>io.io</h1>
                {this.props.children}
            </div>
        );
    }

}

export default Navbar;