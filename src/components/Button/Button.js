import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Button.scss";
import {Link} from "react-router-dom";

class Button extends Component {

    render() {
        return (
            !this.props.link ?
                (<button className={`default-button${!!this.props.className ? ` ${this.props.className}` : ""}`}>{this.props.children}</button>) :
                (<Link className={`button-link${!!this.props.className ? ` ${this.props.className}` : ""}`} to={this.props.link}><button className={`default-button`}>{this.props.children}</button></Link>)
        );
    }

}

Button.propTypes = {
    className: PropTypes.string,
    link: PropTypes.string
}

export default Button;