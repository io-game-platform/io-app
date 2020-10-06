import React, {Component} from "react";
import './Navbar.scss'

class Navbar extends Component {

    render() {
        return (
            <div className="nav">
                <h1>io.io</h1>
                <h2>Link1</h2>
                <h2>Link2</h2>
                <h3>Link3</h3>
            </div>
        );
    }

}

export default Navbar;